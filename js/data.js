const SITE_DATA = {
    categories: {
        "waterfalls": {
        title: "Hidden Waterfalls of Ceylon",
        heroImage: "./images/waterfalls-hero.jpg",
        description: "Discover secluded cascades beyond the crowded tourist trails.",
        intro: "Sri Lanka is home to countless waterfalls, many of which remain undiscovered by mainstream tourism. Explore these hidden natural wonders.",
        items: [
            {
                name: "Dunhinda Falls",
                district: "Badulla",
                difficulty: "Moderate",
                desc: "One of the most beautiful among south asian waterfalls.",
                id: "dunhinda",
                image: "./images/waterfalls/dunhida.jpg" 
            },
            {
                name: "Diyaluma Falls",
                district: "Badulla",
                difficulty: "Easy",
                desc: "The second highest waterfall in Sri Lanka with natural pools.",
                id: "diyaluma",
                image: "./images/waterfalls/diyaluma.jpg" 
            },
            {
                name: "Bambarakanda Falls",
                district: "Badulla",
                difficulty: "Hard",
                desc: "The tallest waterfall in Sri Lanka, surrounded by pine forests.",
                id: "bambarakanda",
                image: "./images/waterfalls/bambarakanda.jpg" 
            },
            {
                name: "St. Clair's Falls",
                district: "Nuwara Eliya",
                difficulty: "Easy",
                desc: "Known as the 'Little Niagara of Sri Lanka' for its wide, powerful flow.",
                id: "stclairs",
                image: "./images/waterfalls/stclairs.jpg" 
            },
            {
                name: "Baker's Falls",
                district: "Nuwara Eliya",
                difficulty: "Moderate",
                desc: "A famous wide waterfall located within the Horton Plains National Park.",
                id: "bakersfalls",
                image: "./images/waterfalls/bakersfalls.jpg" 
            },
            {
                name: "Ramboda Falls",
                district: "Nuwara Eliya",
                difficulty: "Easy",
                desc: "A massive three-tiered waterfall visible from the A5 highway.",
                id: "rambodafalls",
                image: "./images/waterfalls/ramboda.jpg" 
            },
            {
                name: "Devon Falls",
                district: "Nuwara Eliya",
                difficulty: "Easy",
                desc: "Known as the 'Veil of the Valley', a majestic fall in the heart of tea country.",
                id: "devonfalls",
                image: "./images/waterfalls/devonfalls.jpg" 
            },
            {
                name: "Ravana Falls",
                district: "Badulla",
                difficulty: "Easy",
                desc: "A legendary waterfall connected to the ancient Ramayana epic.",
                id: "ravanafalls",
                image: "./images/waterfalls/ravana.jpg" 
            }
        ]
    },
        "mountains": {
            title: "Majestic Peaks of Ceylon",
            heroImage: "./images/mountains-hero.webp",
            description: "Climb beyond the clouds and explore quiet highland trails.",
            intro: "From the central highlands to northern ranges, discover peaks that offer panoramic views and spiritual serenity.",
            items: [
                {
                    name: "Knuckles Range",
                    district: "Matale/Kandy",
                    difficulty: "Hard",
                    desc: "A UNESCO site with mist-laden peaks and diverse biodiversity.",
                    id: "knuckles",
                    image: "./images/mountains/knuckles.jpg" // Updated
                },
                
                {
                    name: "Ella Rock",
                    district: "Badulla",
                    difficulty: "Moderate",
                    desc: "A famous trek through tea plantations with views of Ella Gap.",
                    id: "ellarock",
                    image: "./images/mountains/ellarock.jpg" // Updated
                },
                { name: "Piduruthalagala", district: "Nuwara Eliya", difficulty: "Easy", desc: "The highest peak in Sri Lanka, offering a view of the entire island.", id: "piduruthalagala", image: "./images/mountains/piduruthalagala.jpg" },
        { name: "Horton Plains", district: "Nuwara Eliya", difficulty: "Moderate", desc: "A plateau at 2100m featuring 'World's End' and unique biodiversity.", id: "hortonplains", image: "./images/mountains/hortonplains.jpg" },
        { name: "Hanthana Range", district: "Kandy", difficulty: "Moderate", desc: "A favorite among hikers with seven peaks overlooking Kandy city.", id: "hanthana", image: "./images/mountains/hanthana.jpg" },
        { name: "Dolukanda", district: "Kurunegala", difficulty: "Moderate", desc: "An ancient site with legendary healing herbs and a flat mountain top.", id: "dolukanda", image: "./images/mountains/dolukanda.jpg" },
        { name: "Riverston", district: "Matale", difficulty: "Easy", desc: "A windy peak in the Knuckles range with breathtaking views of the valley.", id: "riverston", image: "./images/mountains/riverston.jpg" }
            ]
        },
        "beaches": {
            title: "Hidden Shores of Ceylon",
            heroImage: "./images/beach-hero.jpeg",
            description: "Find secluded shores where golden sands meet endless horizons.",
            intro: "Escape the crowds and discover the pristine, untouched coastlines of the island's southern and eastern edges.",
            items: [
                {
                    name: "Hiriketiya Bay",
                    district: "Matara",
                    difficulty: "Easy",
                    desc: "A hidden horseshoe-shaped bay perfect for surfing and relaxing.",
                    id: "hiriketiya",
                    image: "./images/beaches/hiriketiya.jpeg" // Updated
                },
                {
                    name: "Nilaveli Beach",
                    district: "Trincomalee",
                    difficulty: "Easy",
                    desc: "White sands and turquoise waters, ideal for whale watching.",
                    id: "nilaveli",
                    image: "./images/beaches/nilaveli.jpg" // Updated
                },
                { name: "Mannar Island", district: "Mannar", difficulty: "Easy", desc: "A wild landscape of baobab trees and shallow turquoise flats.", id: "mannar", image: "./images/beaches/mannar.jpg" },
                { name: "Kudawa Beach", district: "Puttalam", difficulty: "Easy", desc: "The kite-surfing capital of Sri Lanka on the Kalpitiya coast.", id: "kudawa", image: "./images/beaches/kudawa.jpg" },
                { name: "Negombo Lagoon", district: "Gampaha", difficulty: "Easy", desc: "A historic fishing hub perfect for sunset boat safaris.", id: "negombo-lagoon", image: "./images/beaches/negombo.webp" },
                { name: "Pasikuda", district: "Batticaloa", difficulty: "Easy", desc: "Famous for its shallow bay where you can walk kilometers into the sea.", id: "pasikuda", image: "./images/beaches/pasikuda.jpg" },
                { name: "Tangalle", district: "Hambantota", difficulty: "Easy", desc: "Hidden coves and rocky outcrops perfect for a quiet escape.", id: "tangalle", image: "./images/beaches/tangalle.jpg" }
                
            ]
        },
        "camping": {
    title: "Wild Camping Spots",
    heroImage: "./images/camping-hero.jpg",
    description: "Escape the city and sleep under the stars in Sri Lanka's most scenic landscapes.",
    intro: "From misty mountain plateaus to riverside forests, discover the best places to pitch a tent responsibly.",
    items: [
        { name: "Horton Plains", district: "Nuwara Eliya", difficulty: "Moderate", desc: "High-altitude camping near the silent 'Chimney Pool'.", id: "hortonplains", image: "./images/camping/horton.jpg" },
        { name: "Knuckles Range", district: "Matale", difficulty: "Hard", desc: "The ultimate wilderness trek and misty cloud forest camping.", id: "knuckles", image: "./images/camping/knuckles.webp" },
        { name: "Kitulgala", district: "Kegalle", difficulty: "Easy", desc: "Riverside camping with white-water rafting adventures.", id: "kitulgala", image: "./images/camping/kitulgala.jpg" },
        { name: "Ella Peaks", district: "Badulla", difficulty: "Moderate", desc: "Camp on the cliffs overlooking the famous Ella Gap.", id: "ella-camp", image: "./images/camping/ella.jpg" },
        { name: "Lipton's Seat", district: "Badulla", difficulty: "Easy", desc: "Wake up to a 360-degree view of the tea country highlands.", id: "liptons-seat", image: "./images/camping/liptons.webp" },
        { name: "Awissawella", district: "Colombo/Kegalle", difficulty: "Easy", desc: "Lush rubber estate and riverside camping near the city.", id: "awissawella", image: "./images/camping/awissawella.webp" }
    ]
}
    },
    places: {
    "dunhinda": {//d
        name: "Dunhinda Falls",
        image: "./images/waterfalls/dunhinda.jpg",
        district: "Badulla",
        difficulty: "🟡 Moderate",
        crowd: "🟡 Moderate",
        season: "October - May",
        description: "A mist-covered cascade hidden within lush green forest trails.",
        about: "Dunhinda Falls is one of Sri Lanka’s most breathtaking waterfalls. Standing 64 meters tall, it is famous for the 'smoky mist' created as water crashes into the pool below. The 1.5km forest trail leading to the falls is a scenic experience in itself, filled with local vendors selling herbal drinks and the sounds of wild birds.",
        quickInfo: ["Location : Badulla", "Distance : 1.5km Trek", "Best time : Morning", "Entry fee : 200 LKR"],
        gettingThere: "Located 5km from Badulla town. You can take a bus or tuk-tuk from the Badulla station to the entrance gate.",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.930836362272!2d81.05750610000001!3d7.0255635000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae489128c5dab27%3A0x6ba769480f37b6fa!2sDunhinda%20Waterfall!5e1!3m2!1sen!2sus!4v1772598983840!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        safety: ["Slippery rocks near the base", "Monkey encounters on trail", "Avoid swimming in high current"]
    },
    "diyaluma": {
        name: "Diyaluma Falls", //d
        image: "./images/waterfalls/diyaluma.jpg",
        district: "Badulla",
        difficulty: "🟢 Easy",
        crowd: "🟡 Moderate",
        season: "March - August",
        description: "The second highest waterfall in Sri Lanka with natural infinity pools.",
        about: "Standing at 220m, Diyaluma is iconic for the series of natural pools at its summit. While the bottom fall is visible from the road, the true adventure is hiking to the top to swim in the cliff-edge infinity pools overlooking the valley.",
        quickInfo: ["Koslanda", "45 min Hike", "All Day", "Free"],
        gettingThere: "Drive to Koslanda on the Wellawaya-Beragala road. A hike from the upper road (Makaldenya junction) is the easiest way to reach the top pools.",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28974.322490409657!2d81.0123629!3d6.7331443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46c352d6455e3%3A0x28c362117103a1b1!2sDiyaluma%20Falls!5e1!3m2!1sen!2slk!4v1772642758053!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        safety: ["Do not go near the edge of the pools", "Elephants often roam here at night", "Path can be muddy"]
    },
    "bambarakanda": {//done
        name: "Bambarakanda Falls",
        image: "./images/waterfalls/bambarakanda.jpg",
        district: "Badulla",
        difficulty: "🟡 Moderate",
        crowd: "🟢 Low",
        season: "October - March",
        description: "The tallest waterfall in Sri Lanka, nestled in a pine forest.",
        about: "With a height of 263 meters, Bambarakanda is a vertical thin strip of water. It is set within a beautiful pine forest in the Kalupahana area, offering a very peaceful atmosphere compared to other tourist spots.",
        quickInfo: ["Kalupahana", "1km Trek", "Morning", "150 LKR"],
        gettingThere: "Turn off from the A4 highway at Kalupahana junction. The waterfall is a few kilometers up the mountain road.",
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4893598862513!2d80.8312138!3d6.7733517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47660d0e3ef59%3A0x6863b33a5baad25!2sBambarakanda%20Falls!5e1!3m2!1sen!2slk!4v1772642634466!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        safety: ["Leeches during rainy season", "Very cold water temperatures", "Steep trail to the top"]
    },
    "bakersfalls": {
            name: "Baker's Falls",//d
            image: "./images/waterfalls/bakersfalls.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟡 Moderate",
            crowd: "🔴 High",
            season: "January - April",
            description: "A famous wide waterfall located within the Horton Plains National Park.",
            about: "Named after Sir Samuel Baker, this 20-meter waterfall is a highlight of the Horton Plains trek. It is surrounded by rare ferns and rhododendrons. The walk to the falls is beautiful but involves some steep steps near the viewing platform.",
            quickInfo: ["Horton Plains", "2km Trek", "Morning", "Entry Fee"],
            gettingThere: "Located inside Horton Plains National Park. You must drive to the park entrance from Nuwara Eliya or Ohiya and then hike the main loop trail.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.343802599682!2d80.7894553!3d6.7927133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae388350af5eebb%3A0x80bbd2f70b7eb7aa!2sBaker&#39;s%20Falls!5e1!3m2!1sen!2slk!4v1772644150217!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Steps can be very slippery when wet", "Do not cross the safety railings", "Weather changes rapidly to thick mist"]
        },

        "rambodafalls": {
            name: "Ramboda Falls",//d
            image: "./images/waterfalls/ramboda.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "All Year",
            description: "A massive three-tiered waterfall visible from the A5 highway.",
            about: "Ramboda Falls is the 11th highest waterfall in Sri Lanka. It consists of three parts: the Upper, Middle, and Lower falls. The most impressive view is from the top, which requires a short, well-paved uphill walk through the Ramboda Falls Hotel area.",
            quickInfo: ["Pussellawa", "15 min Walk", "Daytime", "50 LKR"],
            gettingThere: "Located directly on the Peradeniya-Nuwara Eliya Road (A5). Most travelers stop here while driving to Nuwara Eliya.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28954.676833772588!2d80.6862766!3d7.0545692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3793d5db58671%3A0x2fe5b27e99b54356!2sRamboda%20Falls!5e1!3m2!1sen!2slk!4v1772643414749!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Stay on the designated paths", "Water level rises very quickly during rain", "Rocks at the base are mossy"]
        },

        "devonfalls": {
            name: "Devon Falls",//d
            image: "./images/waterfalls/devonfalls.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "December - March",
            description: "Known as the 'Veil of the Valley', a majestic fall in the heart of tea country.",
            about: "Named after a pioneer English coffee planter, Devon Falls drops 97 meters. It is best viewed from the special viewpoint on the Avissawella-Nuwara Eliya Road, where you can see the fall perfectly framed by lush tea estates.",
            quickInfo: ["Talawakele", "No Trek", "Daytime", "Free"],
            gettingThere: "Located along the A20 highway near Talawakele. There is a popular roadside viewpoint with a large parking area.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57921.78585454165!2d80.6019982!3d6.954466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae39cd4801e423f%3A0xd16f677b3f53e74c!2sDevon%20Falls!5e1!3m2!1sen!2slk!4v1772643247652!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Viewing from the road is very safe", "Attempting to reach the base is difficult and dangerous", "Be mindful of traffic while crossing the road"]
        },

        "ravanafalls": {
            name: "Ravana Falls",//d
            image: "./images/waterfalls/ravana.jpg",
            district: "Badulla",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "June - August",
            description: "A legendary waterfall connected to the ancient Ramayana epic.",
            about: "One of the widest falls in the country, Ravana Falls is located in the Ella wildlife sanctuary. Legend says King Ravana hid Princess Sita in the caves behind this waterfall. It is a very popular spot for a quick dip during the hot season.",
            quickInfo: ["Ella", "Roadside", "All Day", "Free"],
            gettingThere: "Located about 6km from Ella town on the Ella-Wellawaya Road. You can easily reach it by bus or tuk-tuk from Ella center.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231742.6106910743!2d80.9023957!3d6.841092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46566989736b1%3A0x7723c32995403b9c!2sRavana%20waterfall!5e1!3m2!1sen!2slk!4v1772643084020!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Avoid climbing higher up the rocks; many accidents happen here", "Strong currents during monsoon", "Watch out for monkeys"]
        },
                
        "stclairs": {
            name: "St. Clair's Falls",//d
            image: "./images/waterfalls/stclairs.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "All Year",
            description: "Known as the 'Little Niagara of Sri Lanka' for its wide, powerful flow.",
            about: "St. Clair's Falls is one of the widest waterfalls in Sri Lanka and is commonly known as the 'Little Niagara of Sri Lanka'. It consists of two falls: 'Maha Ella' (The Greater Fall) and 'Kuda Ella' (The Lesser Fall). It is situated among beautiful tea estates and is best viewed from the roadside viewpoint which offers a panoramic vista of the falls and the surrounding valley.",
            quickInfo: ["Location : Talawakele", "Distance : Roadside View", "Best time : Morning", "Entry fee : Free"],
            gettingThere: "Located on the Hatton-Talawakele Highway (A7). The best viewing point is situated about 3km from Talawakele town, easily accessible by any vehicle.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7240.33279921238!2d80.6409077!3d6.947354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae383820725580f%3A0xfcb741c2b6c997b3!2sSt.Clair%20Waterfall%20Roadside%20View%20point!5e1!3m2!1sen!2slk!4v1772643176588!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Stay within the designated viewing platforms", "Do not attempt to trek to the bottom without a guide", "Be cautious of heavy mist during rainy days"]
        },



            //---------------------------------------------------------------------------------------------------------------------------
              //camping & mountains  
       
       
       
            "hortonplains": {
            name: "Horton Plains",//d
            image: "./images/camping/horton.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟡 Moderate",
            crowd: "🔴 High",
            season: "January - March",
            description: "High-altitude camping near the silent 'Chimney Pool'.",
            about: "Camping at Horton Plains is a premier highland experience. Located at an elevation of 2,100m, the designated campsites (like Chimney Pool) offer a serene environment surrounded by montane grasslands. It is one of the few places in Sri Lanka where you can experience sub-zero temperatures at night while camping under a crystal-clear sky.",
            quickInfo: ["Location: Ohiya", "Elevation: 2100m", "Stay: Wild Campsite", "Temp: 5°C - 15°C"],
            gettingThere: "Enter through the Horton Plains National Park gates via Ohiya or Pattipola. Campsites must be pre-booked through the Department of Wildlife Conservation.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d463500.1903192608!2d80.5832745!3d6.8256504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae479e89b50cbdb%3A0xc443fe3f9371dec!2sHorton%20Plains%20National%20Park%20-%20Pattipola%20Entrance!5e1!3m2!1sen!2slk!4v1772649654534!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Strictly no polythene or plastic inside", "Night temperatures drop significantly", "Stay alert for sambar deer and leopards"]
        },

        "knuckles": {
            name: "Knuckles Range", //d
            image: "./images/camping/knuckles.webp",
            district: "Matale",
            difficulty: "🔴 Hard",
            crowd: "🟢 Low",
            season: "June - September",
            description: "The ultimate wilderness trek and misty cloud forest camping.",
            about: "The Knuckles Mountain Range provides a rugged camping experience in a UNESCO World Heritage site. Hikers can camp in designated areas near the Pitawala Pathana or deep forest sites near Meemure. The terrain is famous for its unpredictable mist, unique flora, and breathtaking 'Mini World's End' views.",
            quickInfo: ["Location: Rattota", "Activity: Trekking", "Stay: Forest Camp", "Vibe: True Wild"],
            gettingThere: "Access via Hunnasgiriya or Rattota. A 4WD vehicle and a certified local guide are highly recommended to navigate the deep mountain trails.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115732.60517540443!2d80.6170818!3d7.3907967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35f659beee899%3A0x3bf7cc23068a888d!2sKnuckles!5e1!3m2!1sen!2slk!4v1772649407238!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Leech protection is mandatory", "Sudden mist can cause disorientation", "Ensure tents are high-quality and waterproof"]
        },

        "kitulgala": {
            name: "Kitulgala",//d
            image: "./images/camping/kitulgala.jpg",
            district: "Kegalle",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "January - April",
            description: "Riverside camping with white-water rafting adventures.",
            about: "Kitulgala is the adventure hub of the island. Camping here usually takes place along the banks of the Kelani River. It is a humid jungle environment where you can combine a night under the stars with adrenaline-pumping activities like rafting, confidence jumping, and stream sliding.",
            quickInfo: ["Location: Kitulgala", "Activity: Rafting", "Stay: River Tents", "Price: Moderate"],
            gettingThere: "Located on the A10 highway between Avissawella and Hatton. Most campsites are managed by adventure companies located right along the main road.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.299881322615!2d80.41992185!3d6.99156085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a01d4b2a337b%3A0x54abb9abd813b04a!2sKitulgala!5e1!3m2!1sen!2slk!4v1772648976235!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Avoid swimming in the river during heavy rain", "Use life jackets for all water activities", "Mosquito repellent is essential"]
        },

        "ella-camp": {
            name: "Ella Peaks",//d
            image: "./images/camping/ella.jpg",
            district: "Badulla",
            difficulty: "🟡 Moderate",
            crowd: "🔴 High",
            season: "December - March",
            description: "Camp on the cliffs overlooking the famous Ella Gap.",
            about: "Camping in Ella typically happens on the summits of Ella Rock or Little Adam's Peak. These spots offer some of the most iconic sunrise views in Sri Lanka, looking straight through the 'Ella Gap' toward the southern plains. It is a perfect mix of adventure and the cozy atmosphere of Ella town.",
            quickInfo: ["Location: Ella Rock", "Activity: Hiking", "Stay: Cliffside", "Best: Sunrise"],
            gettingThere: "Start the hike from Ella Railway Station. Follow the tracks and mountain paths. Note that wild camping is restricted; use recognized private camping organizers in the area.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14483.461354711428!2d81.0328845!3d6.8559737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4651f4ac18b17%3A0x94e63df29eca0234!2sElla%20rock%20point!5e1!3m2!1sen!2slk!4v1772648893436!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Stay away from cliff edges at night", "Path can be confusing; keep a map app ready", "Pack all waste back to the town"]
        },

        "liptons-seat": {
            name: "Lipton's Seat",//d
            image: "./images/camping/liptons.webp",
            district: "Badulla",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "All Year",
            description: "Wake up to a 360-degree view of the tea country highlands.",
            about: "Located on the Dambatenne Tea Estate, Lipton's Seat offers a viewpoint where Sir Thomas Lipton used to survey his empire. Camping in the vicinity (at private estate sites) allows you to witness the 'Seven Provinces' view before the morning mist rolls in at 10 AM.",
            quickInfo: ["Location: Haputale", "Activity: Sightseeing", "Stay: Tea Estate", "View: 360°"],
            gettingThere: "Reach Haputale by train or bus, then take a 7km tuk-tuk ride or hike up through the Dambatenne Tea Factory route.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.434496703197!2d81.0155175!3d6.7806559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46e34030893af%3A0x3886114faff7476b!2sLipton&#39;s%20Seat!5e1!3m2!1sen!2slk!4v1772648831939!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Respect the tea estate property", "Morning wind can be very strong", "Be mindful of early-morning estate workers"]
        },

        "awissawella": {
            name: "Awissawella",//d
            image: "./images/camping/awissawella.webp",
            district: "Colombo/Kegalle",
            difficulty: "🟢 Easy",
            crowd: "🟢 Low",
            season: "All Year",
            description: "Lush rubber estate and riverside camping near the city.",
            about: "Awissawella offers a quick nature escape for those based in Colombo. Campsites here are often located within private rubber plantations or along the Seethawaka river. It is an ideal spot for beginner campers looking for a low-altitude, warm-weather camping experience.",
            quickInfo: ["Location: Hanwella", "Distance: 1hr from CMB", "Stay: Estate/River", "Vibe: Relaxed"],
            gettingThere: "Drive along the Low Level Road (AB10) from Colombo toward Awissawella. Most campsites are within 10-15km of the town center.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57922.35378157165!2d80.15950359197792!3d6.94985882079468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a99e4c1f47cd%3A0xee25998579adfb13!2sAvissawella!5e1!3m2!1sen!2slk!4v1772648728334!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Check for river current during monsoon", "Be aware of local wildlife in rubber estates", "Secure food from monkeys"]
        },


        "ellarock": {
            name: "Ella Rock",
            image: "./images/mountains/ellarock.jpg",
            district: "Badulla",
            difficulty: "🟡 Moderate",
            crowd: "🔴 High",
            season: "December - March",
            description: "A classic trek through tea estates and railway tracks.",
            about: "Ella Rock offers stunning views of the Ella Gap and Little Adam's Peak. The hike involves walking along the railway line and through dense eucalyptus forests.",
            quickInfo: ["Location : Ella", "Distance : 4km Trek", "Best time : Sunrise", "Entry fee : Free"],
            gettingThere: "Start by walking south from the Ella Railway Station along the tracks towards Kithalella.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14483.461354711428!2d81.0328845!3d6.8559737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4651f4ac18b17%3A0x94e63df29eca0234!2sElla%20rock%20point!5e1!3m2!1sen!2slk!4v1772648893436!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Be careful of trains on tracks", "False guides may give wrong directions", "Take plenty of water"]
        },
        "piduruthalagala": {
            name: "Piduruthalagala",//d
            image: "./images/mountains/piduruthalagala.jpg",
            district: "Nuwara Eliya",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "March - April",
            description: "The highest peak in Sri Lanka, standing at 2,524 meters.",
            about: "Piduruthalagala, also known as Mount Pedro, is the highest point in Sri Lanka. It serves as a key communications hub for the country. While the summit is a high-security zone, the drive up the mountain offers incredible views of the Nuwara Eliya district and the surrounding tea estates.",
            quickInfo: ["Location : Nuwara Eliya", "Elevation : 2524m", "Best time : Morning", "Entry fee : Free"],
            gettingThere: "Located in Nuwara Eliya. You can drive to the top through the high-security entrance, but walking/hiking is usually restricted.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3016.4405209519136!2d80.773505!3d7.003984999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDAnMTQuNCJOIDgwwrA0NicyNC42IkU!5e1!3m2!1sen!2slk!4v1772650413713!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Photography is restricted at the summit", "Temperature can drop significantly", "Check for security clearance at the gate"]
        },

        "hanthana": {
            name: "Hanthana Range",//d
            image: "./images/mountains/hanthana.jpg",
            district: "Kandy",
            difficulty: "🟡 Moderate",
            crowd: "🟡 Moderate",
            season: "All Year",
            description: "A series of peaks offering panoramic views of Kandy and beyond.",
            about: "The Hanthana Mountain Range consists of seven peaks and is a popular destination for hikers in Kandy. The trail passes through tea estates and provides a 360-degree view of the city of Kandy, the Knuckles range, and the Sabaragamuwa mountains.",
            quickInfo: ["Location : Kandy", "Distance : 5km Hike", "Best time : Sunrise", "Entry fee : Free"],
            gettingThere: "The trail starts near the University of Peradeniya or the Ceylon Tea Museum. It is easily accessible from Kandy town via bus or tuk-tuk.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3014.828204444398!2d80.62727199999999!3d7.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTQnNTYuNCJOIDgwwrAzNyczOC4yIkU!5e1!3m2!1sen!2slk!4v1772651139557!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Avoid hiking during heavy rain as it gets slippery", "Carry enough water", "Leeches are common on the lower trails"]
        },

        "dolukanda": {
            name: "Dolukanda",//d
            image: "./images/mountains/dolukanda.jpg",
            district: "Kurunegala",
            difficulty: "🟡 Moderate",
            crowd: "🟢 Low",
            season: "December - April",
            description: "A legendary mountain steeped in folklore and history.",
            about: "Dolukanda is one of the sites believed to be part of the Himalayas dropped by Hanuman in the Ramayana epic. It is home to several ancient ruins and rare medicinal herbs. The climb is steep but rewards hikers with a vast flat summit and a stunning view of the Kurunegala district.",
            quickInfo: ["Location : Kurunegala", "Distance : 2km Climb", "Best time : Morning", "Entry fee : Free"],
            gettingThere: "Located about 20km from Kurunegala town. Drive towards the Dolukanda temple where the trail begins.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24098.42210478587!2d80.3928859064738!3d7.617035113479703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae335effdf06029%3A0x4792bb7002e108c9!2sDolukanda%20Hiking%20%26%20Trekking%20Guide!5e1!3m2!1sen!2slk!4v1772652123445!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Final climb involves steep rocky sections", "Respect the archaeological sites", "Sun protection is recommended"]
        },

        "riverston": {
            name: "Riverston",//d
            image: "./images/mountains/riverston.jpg",
            district: "Matale",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "All Year",
            description: "One of the windiest and most beautiful points in the Knuckles range.",
            about: "Riverston Peak is a popular destination for nature lovers. The hike to the summit is relatively easy and follows a paved road that leads to a telecommunications tower. It is famous for its extreme wind conditions and the 'Mini World's End' viewpoint located nearby.",
            quickInfo: ["Location : Matale", "Distance : 2.5km Walk", "Best time : Morning", "Entry fee : Free"],
            gettingThere: "Drive from Matale on the Rattota-Illukkumbura road. The trail begins at the Riverston mountain pass.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3012.9393074869795!2d80.735867!3d7.5259579999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzEnMzMuNSJOIDgwwrA0NCcwOS4xIkU!5e1!3m2!1sen!2slk!4v1772651266173!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Very strong winds can be dangerous near edges", "Sudden thick mist can reduce visibility", "Stay on the designated path"]
        },



        //---------------------------------------------------------------------------------------------------------------
        //beaches



        "hiriketiya": {
            name: "Hiriketiya Bay",
            image: "./images/beaches/hiriketiya.jpeg",
            district: "Matara",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "November - April",
            description: "A horseshoe-shaped surfing paradise.",
            about: "Hiriketiya is a hidden gem on the south coast where the jungle meets the sea. It is famous for its consistent surf break and cozy cafe culture.",
            quickInfo: ["Dikwella", "N/A", "All Day", "Free"],
            gettingThere: "Located in Dikwella. A short tuk-tuk ride from the Dikwella bus stand will get you to the bay.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12359.39802249155!2d80.706811!3d5.9623576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1366e9b42e095%3A0x9e533650b0813670!2sHiriketiya%20Beach!5e1!3m2!1sen!2slk!4v1772693010617!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Reef breaks can be sharp", "Watch for beginner surfers", "Strong currents during monsoon"]
        },
        "nilaveli": {
            name: "Nilaveli Beach",//d
            image: "./images/beaches/nilaveli.jpg",
            district: "Trincomalee",
            difficulty: "🟢 Easy",
            crowd: "🟢 Low",
            season: "May - September",
            description: "Pristine white sands and crystal clear waters.",
            about: "Nilaveli is regarded as one of the purest beaches in Sri Lanka. The calm, shallow waters make it perfect for swimming and boat trips to Pigeon Island for snorkeling.",
            quickInfo: ["Trincomalee", "N/A", "All Day", "Free"],
            gettingThere: "Approximately 15km north of Trincomalee town. Accessible by bus or tuk-tuk.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12283.832430120028!2d81.1878133!3d8.694117999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbfb5c9304551%3A0xc6d99d1084095189!2sNilaveli!5e1!3m2!1sen!2slk!4v1772692865307!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Snorkel only in designated areas", "Sun protection is essential", "Respect the marine life at Pigeon Island"]
        },"mannar": {
            name: "Mannar Island",//d
            image: "./images/beaches/mannar.jpg",
            district: "Mannar",
            difficulty: "🟢 Easy",
            crowd: "🟢 Low",
            season: "November - March",
            description: "A wild landscape of baobab trees and shallow turquoise flats.",
            about: "Mannar Island is a unique destination in the north of Sri Lanka. Connected to the mainland by a causeway, it features ancient Baobab trees planted by Arab traders and is a major stop for migratory birds like Greater Flamingos. It feels wild and untouched compared to the southern coast.",
            quickInfo: ["Location : Mannar", "Distance : N/A", "Best time : Evening", "Entry fee : Free"],
            gettingThere: "Drive via the Medawachchiya-Mannar Highway (A14). The island is easily accessible by bus or private vehicle from Anuradhapura.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.8381022587814!2d79.9263645735958!3d8.894639791161408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd00da2cdbf69%3A0xf49ac297fe4a5f99!2z4K614K6Z4K-N4K6V4K6-4K6y4K-IIOCuleCun-CuseCvjeCuleCusOCviCB8IOC3gOC2seC3iuC2muC3j-C2veC3miDgt4Dgt5ngtrvgt4UgfCBWYW5rYWxhaSBCZWFjaCDvuI8!5e0!3m2!1sen!2slk!4v1772649658426!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Be mindful of free-roaming donkeys", "Strong sun - use high SPF", "Stay on main roads near salt flats"]
        },

        "kudawa": {
            name: "Kudawa Beach",//d
            image: "./images/beaches/kudawa.jpg",
            district: "Puttalam",
            difficulty: "🟢 Easy",
            crowd: "🟡 Moderate",
            season: "May - September",
            description: "The kite-surfing capital of Sri Lanka on the Kalpitiya coast.",
            about: "Kudawa is the primary beach in Kalpitiya for kite surfers. The flat water of the lagoon on one side and the waves of the Indian Ocean on the other make it world-class. It’s also a great base for dolphin watching tours in the early morning.",
            quickInfo: ["Location : Kalpitiya", "Distance : N/A", "Best time : All Day", "Entry fee : Free"],
            gettingThere: "Located in the Kalpitiya peninsula. Take the Palavi-Kalpitiya road from the A12 highway.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.152497066238!2d79.7261657!3d8.2236245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afd7327ace69689%3A0x69c9da47befe5949!2sKudawa!5e1!3m2!1sen!2slk!4v1772649443625!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Watch out for high-speed kite surfers", "Wear polarized sunglasses for glare", "Check weather for boat tours"]
        },

        "negombo-lagoon": {
            name: "Negombo Lagoon",//d
            image: "./images/beaches/negombo.webp",
            district: "Gampaha",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "All Year",
            description: "A historic fishing hub perfect for sunset boat safaris.",
            about: "Negombo Lagoon is one of the largest estuarine water bodies in Sri Lanka. It is famous for its traditional outrigger canoes (Oruvas) and fresh seafood. A boat trip through the mangrove forests and canals allows you to see the local fishing culture up close.",
            quickInfo: ["Location : Negombo", "Distance : N/A", "Best time : Sunset", "Entry fee : Boat Fee"],
            gettingThere: "Located just 15 minutes from the Bandaranaike International Airport. Easily reached by any vehicle from Colombo.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1234!2d80.78!3d7.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjUnMTIuMCJOIDgwwrA0Nic0OC4wIkU!5e0!3m2!1sen!2slk!4v1680000000003!5m2!1sen!2slk2" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Always wear a life jacket on boats", "Keep hands inside the boat near mangroves", "Negotiate boat rates in advance"]
        },

        "pasikuda": {
            name: "Pasikuda",//d
            image: "./images/beaches/pasikuda.jpg",
            district: "Batticaloa",
            difficulty: "🟢 Easy",
            crowd: "🔴 High",
            season: "May - September",
            description: "Famous for its shallow bay where you can walk kilometers into the sea.",
            about: "Pasikuda is known for having one of the longest stretches of shallow coastline in the world. The outer reef protects the bay, making the water calm and current-free, perfect for families and non-swimmers to enjoy the crystal-clear ocean.",
            quickInfo: ["Location : Kalkudah", "Distance : N/A", "Best time : Morning", "Entry fee : Free"],
            gettingThere: "Located on the east coast, about 35km from Batticaloa. Accessible via the A11 highway from Polonnaruwa.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1234!2d80.78!3d7.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjUnMTIuMCJOIDgwwrA0Nic0OC4wIkU!5e0!3m2!1sen!2slk!4v1680000000003!5m2!1sen!2slk3" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Watch out for jellyfish during certain months", "Sun is very intense on the east coast", "Avoid walking on live coral"]
        },

        "tangalle": {
            name: "Tangalle",//d
            image: "./images/beaches/tangalle.jpg",
            district: "Hambantota",
            difficulty: "🟢 Easy",
            crowd: "🟢 Low",
            season: "November - April",
            description: "Hidden coves and rocky outcrops perfect for a quiet escape.",
            about: "Tangalle offers a more secluded and romantic atmosphere than the busy beaches of Mirissa or Unawatuna. Goyambokka and Silent Beach are famous for their golden sand, turquoise water, and large palm trees that lean over the ocean.",
            quickInfo: ["Location : Tangalle", "Distance : N/A", "Best time : All Day", "Entry fee : Free"],
            gettingThere: "Located on the far southern coast. It is best reached via the Southern Expressway (E01) exiting at Kasagala or Beliatta.",
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.771313043752!2d80.77705689999999!3d6.005880200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14b4441709067%3A0xfabb81d2e4fb5841!2sSilent%20Beach!5e1!3m2!1sen!2slk!4v1772649383505!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            safety: ["Shore break can be very powerful", "Some areas have hidden rocks underwater", "Be careful of turtles nesting at night"]
        }
    },
    crews: {
        "waterfall-explorers": {
            id: "waterfall-explorers",
            name: "Waterfall Explorers",
            tagline: "Chase hidden forest cascades with adventure lovers.",
            heroImage: "./images/waterfalls-hero.jpg",
            stats: [
                "Active since 2021",
                "Adventure Level: Moderate",
                "1.2k+ Members"
            ],
            aboutContent: "The Waterfall Explorers is a community of nature enthusiasts dedicated to exploring hidden waterfalls across Sri Lanka. Members regularly organize weekend expeditions, photography walks, and eco-friendly exploration trips.",
            activities: [
                "Guided waterfall hikes",
                "Weekend nature trips",
                "Photography meetups",
                "Eco-cleanup initiatives"
            ],
            upcomingAdventures: [
                {
                    title: "Dunhinda Falls Expedition",
                    date: "Date: Next Weekend",
                    slots: "Available Slots: 5",
                    difficulty: "🟡 Moderate",
                    image: "./images/waterfalls/dunhinda.jpg"
                },
                {
                    title: "Diyaluma Upper Trek",
                    date: "Date: End of Month",
                    slots: "Available Slots: 2",
                    difficulty: "🔴 Hard",
                    image: "./images/waterfalls/diyaluma.jpg"
                }
            ],
            guidelines: "All members are expected to respect nature, fellow travelers, and local communities. Safety is a shared responsibility. Participants must avoid littering and ensure ethical travel behavior."
        },

        "hidden-beaches": {
            id: "hidden-beaches",
            name: "Hidden Beaches",
            tagline: "Discover peaceful shores beyond the crowds.",
            heroImage: "./images/beach-hero.jpeg",
            stats: [
                "Active since 2022",
                "Adventure Level: Easy",
                "2k+ Members"
            ],
            aboutContent: "A relaxed group for ocean lovers looking to escape the main tourist strips. We organize surf trips, beach cleanups, and sunset bonfires on Sri Lanka's quietest shores.",
            activities: [
                "Secret beach discovery",
                "Surfing and snorkeling",
                "Coastal cleanups",
                "Sunset social gatherings"
            ],
            upcomingAdventures: [
                {
                    title: "Hiriketiya Surf Weekend",
                    date: "Date: Next Month",
                    slots: "Available Slots: 15",
                    difficulty: "🟢 Easy",
                    image: "./images/beaches/hiriketiya.jpeg"
                }
            ],
            guidelines: "Leave only footprints. Do not disturb turtle nesting sites or marine life. Support local beach vendors."
        },

        "mountain-hiking": {
            id: "mountain-hiking",
            name: "Mountain Hiking",
            tagline: "Climb scenic peaks and watch golden sunrises.",
            heroImage: "./images/mountains-hero.webp",
            stats: [
                "Active since 2018",
                "Adventure Level: Hard",
                "3.5k+ Members"
            ],
            aboutContent: "For those who seek the thrill of the climb. We tackle Sri Lanka's most challenging and rewarding peaks, from the dense Knuckles range to the misty heights of Adam's Peak.",
            activities: [
                "High-altitude trekking",
                "Navigational skills training",
                "Multi-day mountain expeditions",
                "Fitness and endurance prep"
            ],
            upcomingAdventures: [
                {
                    title: "Knuckles Range Crossing",
                    date: "Date: Next Friday",
                    slots: "Available Slots: 4",
                    difficulty: "🔴 Hard",
                    image: "./images/mountains/knuckles.webp"
                },
                {
                    title: "Ella Rock Sunrise",
                    date: "Date: This Sunday",
                    slots: "Available Slots: 8",
                    difficulty: "🟡 Moderate",
                    image: "./images/mountains/ellarock.jpg"
                }
            ],
            guidelines: "Proper footwear is mandatory. Stay with the guide at all times. Carry all trash back down the mountain."
        },

        "camping-crew": {
            id: "camping-crew",
            name: "Camping Crew",
            tagline: "Sleep under the stars in wild landscapes.",
            heroImage: "./images/camping-hero.jpg",
            stats: [
                "Active since 2020",
                "Adventure Level: Moderate",
                "1.5k+ Members"
            ],
            aboutContent: "A community of outdoor enthusiasts who prefer tents over hotels. We share knowledge on gear, survival skills, and the best hidden campsites near rivers, lakes, and pine forests.",
            activities: [
                "Weekend camping trips",
                "Campfire cooking",
                "Stargazing events",
                "Wilderness survival basics"
            ],
            upcomingAdventures: [
                {
                    title: "Pine Forest Night Camp",
                    date: "Date: TBA",
                    slots: "Available Slots: 12",
                    difficulty: "🟡 Moderate",
                    image: "./images/story/knuckles.jpg"
                }
            ],
            guidelines: "Strictly no loud music to respect wildlife. Ensure all fires are fully extinguished before leaving. Practice 'Leave No Trace' principles."
        }
    }
};
