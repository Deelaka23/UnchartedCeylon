document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const path = window.location.pathname;

    // ==========================================
    // 1. CATEGORY / SEARCH PAGE ROUTING
    // ==========================================
    if (path.includes('category.html')) {
        const searchQuery = params.get('search');
        const categoryType = params.get('type');

        if (searchQuery) {
            // If there is a search word in the URL, run the search function
            renderSearchResults(searchQuery);
        } else if (categoryType) {
            // Otherwise, load the normal category
            renderCategoryPage(categoryType);
        } else {
            // Fallback if no parameters exist
            renderCategoryPage('waterfalls');
        }
    }
    // ==========================================
    // 2. DETAIL PAGE ROUTING
    // ==========================================
    if (path.includes('detail.html')) {
        const placeId = params.get('place') || 'dunhinda';
        const categoryType = params.get('type') || 'waterfalls';
        renderDetailPage(placeId, categoryType);
    }

    // ==========================================
    // 3. CREW PAGE ROUTING
    // ==========================================
    if (path.includes('crew.html')) {
        const groupId = params.get('group') || 'waterfall-explorers';
        renderCrewPage(groupId);
    }
});
// ==========================================
// --- CARD GENERATOR (HELPER FUNCTION) ---
// ==========================================
function renderCategoryCards(itemsArray, containerId, categoryType, skipId = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';

    // Find the parent wrapper (the box with the background color and arrows)
    const wrapper = container.closest('.wrapper');
    
    // Keep track of how many cards we actually create
    let renderedCardsCount = 0;

    itemsArray.forEach(element => {
        // Smart fallback: Handle data whether it's a string ID or a full object
        const placeId = typeof element === 'string' ? element : element.id;
        const item = SITE_DATA.places[placeId] || element;

        // Skip rendering if this is the place we are currently viewing on the Detail page
        if (skipId && placeId === skipId) return;
        if (!item || !item.name) return; // Skip invalid data

        renderedCardsCount++; // Count this card!

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-placeholder" style="background-image: url('${item.image || './images/placeholder.jpg'}'); background-size: cover; background-position: center;"></div>
            <div class="card-content" style="display: flex; flex-direction: column; flex-grow: 1;">
                <h3>${item.name}</h3>
                <p><strong>District:</strong> ${item.district || 'N/A'}</p>
                <p><strong>Difficulty:</strong> ${item.difficulty || '🟡 Moderate'}</p>
                <p class="item-desc" style="max-height: 70px; overflow: hidden; margin-bottom: 15px;">
                    ${item.description || item.desc || ''}
                </p>
                <a href="detail.html?place=${placeId}&type=${categoryType}" class="explore-btn" style="margin-top: auto; display: block;">Explore</a>
            </div>
        `;
        container.appendChild(card);
    });

    // Automatically HIDE the entire slider box if there are no cards to show
    if (wrapper) {
        if (renderedCardsCount === 0) {
            wrapper.style.display = 'none'; // Hides the pink background and arrows
        } else {
            wrapper.style.display = 'flex'; // Shows it normally
        }
    }
}

// ==========================================
// --- PAGE RENDER FUNCTIONS ---
// ==========================================

function renderCategoryPage(categoryType) {
    const data = SITE_DATA.categories[categoryType];
    
    if (!data) {
        const catTitle = document.getElementById('cat-title');
        if (catTitle) catTitle.innerText = "Category Not Found";
        return;
    }

    // 1. Change the Hero Section Background
    const heroSection = document.querySelector('.hero'); // Or use ID if you have one
    if (heroSection && data.heroImage) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${data.heroImage}')`;
    }

    // 2. Change the Footer Background (Upper section)
    const footerUpper = document.querySelector('.footer-upper');
    if (footerUpper && data.heroImage) {
        footerUpper.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${data.heroImage}')`;
    }

    // --- rest of your existing code ---
    const titleEl = document.getElementById('cat-title');
    const descEl = document.getElementById('cat-description');
    const introEl = document.getElementById('cat-intro-text');
    const subtitleEl = document.getElementById('cat-subtitle');

    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerText = data.description;
    if (introEl) introEl.innerText = data.intro;
    if (subtitleEl) subtitleEl.innerText = data.title.split(' ').pop();

    renderCategoryCards(data.items, 'category-items-container', categoryType);
}

function renderDetailPage(placeId, categoryType) {
    const place = SITE_DATA.places[placeId] || SITE_DATA.places['dunhinda'];
    
    // 1. Hero & Text
    const heroEl = document.getElementById('det-hero');
    if (heroEl) heroEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${place.image}')`;
    
    const titleEl = document.getElementById('det-title');
    if (titleEl) titleEl.innerText = place.name;
    
    const metaEl = document.getElementById('det-meta');
    if (metaEl) {
        metaEl.innerHTML = `
            <span><strong>District:</strong> ${place.district}</span> 
            <span><strong>Difficulty:</strong>  ${place.difficulty}</span>
            <span><strong>Crowd Level:</strong>  ${place.crowd}</span>
            <span><strong>Best Season:</strong>  ${place.season}</span>
            <p style="margin-top:10px;">${place.description}</p>
        `;
    }

    const descEl = document.getElementById('det-description');
    if (descEl) descEl.innerText = place.about || place.description;

    const aboutImg = document.getElementById('det-about-img');
    if (aboutImg) aboutImg.src = place.image;

    // 2. Quick Info Strip
    const infoContainer = document.getElementById('det-quick-info');
    if (infoContainer && place.quickInfo) {
        infoContainer.innerHTML = '';
        place.quickInfo.forEach(info => {
            infoContainer.innerHTML += `<div class="info-item"><strong>•</strong> <span>${info}</span></div>`;
        });
    }

    // 3. Getting There & Map
    const gettingContainer = document.getElementById('det-getting');
    if (gettingContainer) gettingContainer.innerHTML = place.gettingThere || '';
    
    const iframeContainer = document.getElementById('iframe-block');
    if (iframeContainer) iframeContainer.innerHTML = place.iframe || '';

    // 4. Safety Notes
    const safetyContainer = document.getElementById('det-safety');
    if (safetyContainer && place.safety) {
        safetyContainer.innerHTML = '';
        place.safety.forEach(info => {
            safetyContainer.innerHTML += `<li class="info-item">${info}</li>`;
        });
    }
    
    // 5. "Explore More" Section
    const categoryData = SITE_DATA.categories[categoryType];
    if (categoryData) {
        // We pass placeId to skipId so it hides the current location from the "explore more" list
        renderCategoryCards(categoryData.items, 'category-items-container', categoryType, placeId);
    }

    // 6. Related Crews Section
    const crewContainer = document.getElementById('crewScroll'); // Fixed ID
    if (crewContainer) {
        crewContainer.innerHTML = '';
        Object.keys(SITE_DATA.crews).forEach(key => {
            const crew = SITE_DATA.crews[key];
            crewContainer.innerHTML += `
                <div class="crew-circle" style="background-image: url('${crew.heroImage || './images/placeholder.jpg'}');">
                    <div class="overlay">
                        <h3>${crew.name}</h3>
                        <p>${crew.tagline}</p>
                        <a href="crew.html?group=${key}" class="join-btn" style="text-decoration:none; display:inline-block;">Join</a>
                    </div>
                </div>
            `;
        });
    }
}

function renderCrewPage(id) {
    const crew = SITE_DATA.crews[id] || SITE_DATA.crews['waterfall-explorers'];

    const titleEl = document.getElementById('crew-title');
    if (titleEl) titleEl.innerText = crew.name;

    const taglineEl = document.getElementById('crew-tagline');
    if (taglineEl) taglineEl.innerText = crew.tagline;

    const heroEl = document.getElementById('crew-hero');
    if (heroEl) heroEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${crew.heroImage}')`;
    
    const metaContainer = document.getElementById('crew-meta');
    if (metaContainer) {
        metaContainer.innerHTML = '';
        crew.stats.forEach(stat => {
            metaContainer.innerHTML += `<span style="display:block; margin-bottom:5px;">• ${stat}</span>`;
        });
    }

    const aboutEl = document.getElementById('crew-about');
    if (aboutEl) aboutEl.innerText = crew.aboutContent;

    const guideEl = document.getElementById('crew-guidelines');
    if (guideEl) guideEl.innerText = crew.guidelines;

    const activitiesList = document.getElementById('crew-activities');
    if (activitiesList) {
        activitiesList.innerHTML = '';
        crew.activities.forEach(act => {
            activitiesList.innerHTML += `<li style="font-size: 1.1rem; margin-bottom: 8px;">${act}</li>`;
        });
    }

    const adventuresContainer = document.getElementById('crew-adventures-container');
    if (adventuresContainer) {
        adventuresContainer.innerHTML = '';
        crew.upcomingAdventures.forEach(adv => {
            adventuresContainer.innerHTML += `
                <div class="card">
                    <div class="card-img-placeholder" style="background-image: url('${adv.image}');"></div>
                    <div class="card-content">
                        <h3 style="font-size:1.3rem;">${adv.title}</h3>
                        <p style="margin:5px 0;"><strong>${adv.date}</strong></p>
                        <p style="margin:5px 0;">${adv.slots}</p>
                        <p style="margin:5px 0;">Difficulty: ${adv.difficulty}</p>
                    </div>
                </div>
            `;
        });
    }

    const joinForm = document.getElementById('join-crew-form');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const name = document.getElementById('j-name').value;
            alert(`Thank you, ${name}! Your request to join the ${crew.name} has been sent. We will contact you via email soon.`);
            joinForm.reset(); 
        });
    }
}

// ==========================================
// --- CAROUSEL & SLIDER CONTROLS ---
// ==========================================
function moveLeftCard() {
    const container = document.getElementById('myContainer');
    if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
}

function moveRightCard() {
    const container = document.getElementById('myContainer');
    if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
}

function moveLeft() {
    const container = document.getElementById('category-items-container');
    if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
}

function moveRight() {
    const container = document.getElementById('category-items-container');
    if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
}

function scrollCrew(direction) {
    const container = document.getElementById("crewScroll");
    if (container) container.scrollBy({ left: direction * 380, behavior: 'smooth' });
}

function scrollAdventures(direction) {
    const container = document.getElementById('crew-adventures-container');
    if (container) container.scrollBy({ left: direction * 350, behavior: 'smooth' });
}
/**
 * Renders Search Results on the Category Page
 */
function renderSearchResults(query) {
    const lowerQuery = query.toLowerCase();
    const matchingPlaces = [];

    // Loop through all places in data.js to find a match
    Object.keys(SITE_DATA.places).forEach(key => {
        const place = SITE_DATA.places[key];
        
        // Check if the name, district, or description includes the search word
        if (
            place.name.toLowerCase().includes(lowerQuery) ||
            place.district.toLowerCase().includes(lowerQuery) ||
            place.description.toLowerCase().includes(lowerQuery)
        ) {
            matchingPlaces.push(key); // Add the ID to our results list
        }
    });

    const heroSection = document.querySelector('.hero');
    const searchHero = "./images/search-bg.jpg";
     // Path to a general image
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${searchHero}')`;
    }
    
    // Update the Category Page headers to show search results info
    const titleEl = document.getElementById('cat-title');
    const descEl = document.getElementById('cat-description');
    const introEl = document.getElementById('cat-intro-text');
    const subtitleEl = document.getElementById('cat-subtitle');

    if (titleEl) titleEl.innerText = `Search Results for "${query}"`;
    if (introEl) introEl.innerText = ""; // Hide the intro text
    if (subtitleEl) subtitleEl.innerText = "Matching Destinations";

    if (descEl) {
        if (matchingPlaces.length > 0) {
            descEl.innerText = `We found ${matchingPlaces.length} destination(s) matching your search.`;
        } else {
            descEl.innerText = `We couldn't find any destinations matching "${query}". Try searching for 'Badulla', 'Waterfall', or 'Hike'.`;
        }
    }

    // Reuse our awesome card generator to draw the matching cards!
    renderCategoryCards(matchingPlaces, 'category-items-container', 'search');
}

//footer send message
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('footer-send-btn');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the page from refreshing

            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            // Simple validation check
            if (emailValue === "" || !emailValue.includes('@')) {
                alert("Please enter a valid email address so we can get back to you! 🌿");
                return;
            }

            if (messageValue === "") {
                alert("Don't forget to write your message! We'd love to hear from you. ⛰️");
                return;
            }

            // Success Message
            alert(`Ayubowan! Thank you for reaching out to Uncharted Ceylon. \n\nWe've received your message and our team will get back to you at ${emailValue} shortly. Let's keep exploring! 🍃`);

            // Clear the form after sending
            emailInput.value = "";
            messageInput.value = "";
        });
    }
});
