// 1. District and Taluk Data

let districtTaluks = {

    Hassan: [
        "Hassan",
        "Arsikere",
        "Belur",
        "Channarayapatna",
        "Alur",
        "Sakleshpur",
        "Holenarasipura",
        "Arkalgud"
    ],

    Mysuru: [
        "Mysuru",
        "Nanjangud",
        "Hunsur",
        "T. Narasipura",
        "K.R. Nagar",
        "H.D. Kote"
    ],

    Bengaluru: [
        "Bengaluru North",
        "Bengaluru South",
        "Bengaluru East",
        "Anekal"
    ],

    Mandya: [
        "Mandya",
        "Maddur",
        "Malavalli",
        "Pandavapura",
        "Srirangapatna"
    ],

    Tumakuru: [
        "Tumakuru",
        "Tiptur",
        "Kunigal",
        "Sira",
        "Madhugiri"
    ]

};


// 2. Get HTML Elements

let district = document.getElementById("district");

let result = document.getElementById("result");


// 3. District Selection

district.addEventListener("change", function() {

    let selectedDistrict = this.value;

    result.innerHTML = "";

    if (selectedDistrict === "") {
        return;
    }

    let taluks = districtTaluks[selectedDistrict];

    result.innerHTML = "<h3>Select Your Taluk</h3>";

    // Create Taluk Buttons

    taluks.forEach(function(taluk) {

        let button = document.createElement("button");

        button.innerHTML = taluk;

        button.addEventListener("click", function() {

            showPlaces(taluk);

        });

        result.appendChild(button);

    });

});


// 4. Tourist Places Data

let places = {

    "Belur": {

        temples: ["Chennakeshava Temple"],

        forests: [],

        tourist: ["Yagachi Dam"]

    },

    "Sakleshpur": {

        temples: [],

        forests: ["Bisle Ghat"],

        tourist: ["Manjarabad Fort"]

    },

    "Hassan": {

        temples: ["Hasanamba Temple"],

        forests: [],

        tourist: ["Shettihalli Rosary Church"]

    }

};


// 5. Display Tourist Places
// 5. Display Tourist Places

// Remember the selected Taluk
let currentTaluk = "";

function showPlaces(taluk) {

    // Store selected Taluk
    currentTaluk = taluk;

    let data = places[taluk];

    result.innerHTML = "";

    // Back Button
    let backButton = document.createElement("button");
    backButton.textContent = "⬅ Back to Taluks";

    backButton.onclick = function() {

        let selectedDistrict = district.value;

        result.innerHTML = "<h3>Select Your Taluk</h3>";

        districtTaluks[selectedDistrict].forEach(function(t) {

            let button = document.createElement("button");

            button.textContent = t;

            button.onclick = function() {
                showPlaces(t);
            };

            result.appendChild(button);

        });
    };

    result.appendChild(backButton);

    // Heading
    let heading = document.createElement("h2");
    heading.textContent = "Tourist Places in " + taluk;
    result.appendChild(heading);

    if (!data) {
        let message = document.createElement("p");
        message.textContent = "Places coming soon!";
        result.appendChild(message);
        return;
    }

    // Temples
    let templeHeading = document.createElement("h3");
    templeHeading.textContent = "Temples 🛕";
    result.appendChild(templeHeading);

    data.temples.forEach(function(place) {

        let button = document.createElement("button");
        button.textContent = place;

        button.onclick = function() {
            showDetails(place);
        };

        result.appendChild(button);

    });

    // Forests
    let forestHeading = document.createElement("h3");
    forestHeading.textContent = "Forests 🌳";
    result.appendChild(forestHeading);

    data.forests.forEach(function(place) {

        let p = document.createElement("p");
        p.textContent = place;
        result.appendChild(p);

    });

    // Other Tourist Places
    let touristHeading = document.createElement("h3");
    touristHeading.textContent = "Other Tourist Places 🏞️";
    result.appendChild(touristHeading);

    data.tourist.forEach(function(place) {

        let p = document.createElement("p");
        data.tourist.forEach(function(place) {

    let button = document.createElement("button");
    button.textContent = place;

    button.onclick = function() {
        showDetails(place);
    };

    result.appendChild(button);

});
        result.appendChild(p);

    });

}

// 6. Display Place Details
// 6. Display Place Details

// 6. Display Place Details

// 6. Display Place Details

function showDetails(place) {

    result.innerHTML = "";

    // Back Button
    let backButton = document.createElement("button");
    backButton.textContent = "⬅ Back to Places";

    backButton.onclick = function() {
        showPlaces(currentTaluk);
    };

    result.appendChild(backButton);

    // Details Container
    let details = document.createElement("div");

    // 1. Chennakeshava Temple
    if (place === "Chennakeshava Temple") {

        details.innerHTML = `
            <h2>Chennakeshava Temple 🛕</h2>

            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Chennakeshava_Temple_at_Belur.jpg"
                 width="95%" alt="Chennakeshava Temple">

            <h3>📍 Location</h3>
            <p>Belur, Hassan District, Karnataka</p>

            <h3>📖 History</h3>
            <p>
                Chennakeshava Temple was consecrated by
                Hoysala King Vishnuvardhana in 1116 AD.
                It is famous for beautiful stone carvings
                and Hoysala architecture.
            </p>

            <h3>🗺️ Google Maps</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Chennakeshava+Temple+Belur+Karnataka"
               target="_blank">Open Google Maps</a>
        `;
    }

    // 2. Yagachi Dam
    else if (place === "Yagachi Dam") {

        details.innerHTML = `
            <h2>Yagachi Dam 🏞️</h2>

            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Yagachi_Dam.jpg"
                 width="95%" alt="Yagachi Dam">

            <h3>📍 Location</h3>
            <p>Near Belur, Hassan District, Karnataka</p>

            <h3>📖 Information</h3>
            <p>
                Yagachi Dam is a popular tourist attraction
                near Belur. It is known for its scenic
                surroundings and water activities.
            </p>

            <h3>🗺️ Google Maps</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Yagachi+Dam+Belur+Karnataka"
               target="_blank">Open Google Maps</a>
        `;
    }

    // 3. Hasanamba Temple
    else if (place === "Hasanamba Temple") {

        details.innerHTML = `
            <h2>Hasanamba Temple 🛕</h2>

            <img src="Hasanaba_Devi.jpg" width="300" alt="Hasanamba Temple">

            <h3>📍 Location</h3>
            <p>Hassan City, Hassan District, Karnataka</p>

            <h3>📖 History</h3>
            <p>
                Hasanamba Temple is dedicated to Goddess
                Hasanamba. It is famous for its annual
                Deepavali festival and traditional beliefs.
                The temple opens for public darshan for
                a limited number of days every year.
            </p>

            <h3>🗺️ Google Maps</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Hasanamba+Temple+Hassan+Karnataka"
               target="_blank">Open Google Maps</a>
        `;
    }

    // 4. Shettihalli Rosary Church
    else if (place === "Shettihalli Rosary Church") {

        details.innerHTML = `
            <h2>Shettihalli Rosary Church ⛪</h2>

            <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Shettihalli_Rosary_Church_%2C_Hassan_01.jpg"
                width="95%"
                alt="Shettihalli Rosary Church"
                style="border-radius:10px;">

            <h3>📍 Location</h3>
            <p>
                Shettihalli, Hassan District,
                Karnataka - 573128
            </p>

            <h3>📖 History</h3>
            <p>
                Shettihalli Rosary Church was built
                in the 1860s by French missionaries.
                It is famous for its Gothic architecture.
                After the construction of Hemavati Dam
                and Reservoir, the church was abandoned
                and became partially submerged during
                the monsoon season.
            </p>

            <h3>⭐ Special Features</h3>
            <p>
                It is also known as the Floating Church
                or Submerged Church. During monsoon,
                rising water surrounds the church ruins.
            </p>

            <h3>🗺️ Google Maps</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Shettihalli+Rosary+Church+Hassan+Karnataka"
               target="_blank">Open Google Maps</a>

            <h3>🌐 Official Website</h3>
            <a href="https://hassan.nic.in/en/tourist-place/shetty-halli-church/"
               target="_blank">Hassan District Tourism</a>
        `;
    }

    // Unknown Place
    else {

        details.innerHTML = `
            <h2>${place}</h2>
            <p>More information coming soon!</p>
        `;
    }

    result.appendChild(details);
}
