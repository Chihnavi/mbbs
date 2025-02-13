// College Data with Fees
const collegeData = {
    Russia: [
        {
            name: "Moscow Medical Academy",
            image: "Sechenov University.jpg",
            location: "Moscow, Russia",
            reviews: "4.8/5",
            feesUSD: 79600,
            feesINR: 5970000,
        },
        {
            name: "Saint Petersburg State Medical University",
            image: "spb-medical.jpg",
            location: "Saint Petersburg, Russia",
            reviews: "4.6/5",
            feesUSD: 38000,
            feesINR: 3100000,
        },
    ],
    Uzbekistan: [
        {
            name: "Tashkent Medical Academy",
            image: "tashkent-medical.jpg",
            location: "Tashkent, Uzbekistan",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "Samarkand State Medical Institute",
            image: "samarkand-medical.jpg",
            location: "Samarkand, Uzbekistan",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
    Kazakhstan: [
        {
            name: "Al-Farabi Kazakh National University",
            image: "Al-Farabi Kazakh National University.jpg",
            location: "Al-Farabi Avenue 71, Almaty 050040, Kazakhstan",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "Kazakh National Medical University",
            image: "Kazakh National Medical University.jpg",
            location: "Tole Bi Street 94, Almaty 050000, Kazakhstan",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
    Philippines: [
        {
            name: "University of Northern Philippines",
            image: "University of Northern Philippines.jpg",
            location: "H96M+F3X, Vigan City, Ilocos Sur, Philippines",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "matias h. aznar memorial college of medicine",
            image: "matias h. aznar memorial college of medicine.jpg",
            location: "R. Duterte Street, Banawa, Guadalupe, Cebu City, Philippines",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
    Georgia: [
        {
            name: "Tbilisi State Medical University",
            image: "Tbilisi State Medical University.jpg",
            location: "33 Vazha Pshavela Ave, T'bilisi, Georgia",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "Batumi Shota Rustaveli State University",
            image: "Batumi Shota Rustaveli State University.jpg",
            location: "35/32 Ninoshvili/Rustaveli str, Batumi 6010, Georgia",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
    Kyrgyzstan: [
        {
            name: "Asian Medical Institute",
            image: "Asian Medical Institute.jpg",
            location: "58, Gagarina Street, Kant, Kyrgyzstan",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "International School of Medicine",
            image: "International School of Medicine.jpg",
            location: "Bishkek (Capital of Kyrgyzstan)",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
    Egypt: [
        {
            name: "Cairo University",
            image: "Cairo University.jpg",
            location: " Giza, immediately across the Nile from Cairo",
            reviews: "4.7/5",
            feesUSD: 35000,
            feesINR: 2900000,
        },
        {
            name: "Ain Shams University",
            image: "Ain Shams University.jpg",
            location: "Cairo, Egypt",
            reviews: "4.5/5",
            feesUSD: 34000,
            feesINR: 2800000,
        },
    ],
};

// Display colleges for the selected country
function displayColleges(country) {
    const collegeContainer = document.getElementById("collegeContainer");
    const collegeDetails = document.getElementById("collegeDetails");

    collegeContainer.innerHTML = "";
    const colleges = collegeData[country];

    if (colleges) {
        colleges.forEach((college) => {
            const card = document.createElement("div");
            card.className = "college-card";

            card.innerHTML = `
                <img src="images/${college.image}" alt="${college.name}">
                <div class="college-name">${college.name}</div>
                <div class="college-location">${college.location}</div>
                <div class="college-reviews">${college.reviews}</div>
                <div class="college-fees">Fees: $${college.feesUSD} (~₹${college.feesINR})</div>
            `;

            collegeContainer.appendChild(card);
        });
        collegeDetails.style.display = "block";
    } else {
        collegeDetails.style.display = "none";
    }
}

// Event listeners for country buttons
document.querySelectorAll(".country-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const country = button.getAttribute("data-country");
        displayColleges(country);
    });
});

// Scroll to Form
function scrollToForm() {
    document.getElementById("lead-form-section").scrollIntoView({ behavior: "smooth" });
}


// Handle form submission
const form = document.getElementById("leadForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    successMessage.classList.remove("hidden"); // Show the success message
    form.reset(); // Clear the form fields
});
