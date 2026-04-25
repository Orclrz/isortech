/* ========================================
   ISORTECH - JAVASCRIPT FUNCTIONALITY
   ======================================== */

// Product Data - Add or modify products here
const products = [
    {
        id: 1,
        name: "French Door Refrigerator",
        category: "Refrigerators",
        image: "🧊",
        price: "$1,299.99",
        specs: [
            "25.8 cu ft capacity",
            "Energy Star certified",
            "Ice and water dispenser",
            "Temperature control system"
        ]
    },
    {
        id: 2,
        name: "Professional Hair Dryer",
        category: "Hair Dryers",
        image: "💇",
        price: "$89.99",
        specs: [
            "Ionic technology",
            "3 heat settings",
            "2000W power",
            "Lightweight design"
        ]
    },
    {
        id: 3,
        name: "Stand Mixer Deluxe",
        category: "Mixers",
        image: "🥣",
        price: "$349.99",
        specs: [
            "6-quart stainless bowl",
            "Multiple attachments",
            "Variable speed control",
            "5-year warranty"
        ]
    },
    {
        id: 4,
        name: "Side-by-Side Refrigerator",
        category: "Refrigerators",
        image: "❄️",
        price: "$1,599.99",
        specs: [
            "27.8 cu ft capacity",
            "Sliding shelves",
            "Ice maker included",
            "LED lighting system"
        ]
    },
    {
        id: 5,
        name: "Ionic Compact Hair Dryer",
        category: "Hair Dryers",
        image: "🔥",
        price: "$59.99",
        specs: [
            "Compact and portable",
            "Quick dry technology",
            "1800W power",
            "Ergonomic handle"
        ]
    },
    {
        id: 6,
        name: "Hand Mixer Pro",
        category: "Mixers",
        image: "🥄",
        price: "$39.99",
        specs: [
            "Powerful motor",
            "Easy bowl eject",
            "9-speed settings",
            "Dishwasher safe"
        ]
    },
    {
        id: 7,
        name: "French Door Smart Refrigerator",
        category: "Refrigerators",
        image: "📱",
        price: "$2,199.99",
        specs: [
            "29.6 cu ft capacity",
            "Smart temperature control",
            "WiFi enabled",
            "Inverter compressor"
        ]
    },
    {
        id: 8,
        name: "Salon-Grade Hair Dryer",
        category: "Hair Dryers",
        image: "✨",
        price: "$149.99",
        specs: [
            "Ceramic coating",
            "Negative ion technology",
            "Infrared heat",
            "Professional nozzles"
        ]
    },
    {
        id: 9,
        name: "Planetary Stand Mixer",
        category: "Mixers",
        image: "⭐",
        price: "$449.99",
        specs: [
            "7-quart capacity",
            "Planetary mixing action",
            "Multiple speed settings",
            "Commercial grade"
        ]
    }
];

// WhatsApp and Instagram Contact Info
const WHATSAPP_PHONE = "270709400027"; // Format: country code + number without +
const INSTAGRAM_HANDLE = "isortech";

// ========== DOM ELEMENTS ==========
const productsGrid = document.getElementById("productsGrid");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// ========== RENDER PRODUCTS ==========
function renderProducts() {
    productsGrid.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        
        // Create specs list HTML
        const specsHTML = product.specs
            .map(spec => `<li>${spec}</li>`)
            .join("");

        productCard.innerHTML = `
            <div class="product-image placeholder">
                ${product.image}
            </div>
            <div class="product-body">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <ul class="product-specs">
                    ${specsHTML}
                </ul>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-whatsapp" onclick="orderViaWhatsApp('${product.name}', '${product.price}')">
                        📲 WhatsApp
                    </button>
                    <button class="btn btn-instagram" onclick="orderViaInstagram('${product.name}')">
                        📸 Instagram
                    </button>
                </div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// ========== ORDER VIA WHATSAPP ==========
function orderViaWhatsApp(productName, price) {
    const message = encodeURIComponent(
        `Hi isortech! I'm interested in ordering the "${productName}" (${price}). Can you provide more details and pricing information? Thank you!`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
    window.open(whatsappUrl, "_blank");
}

// ========== ORDER VIA INSTAGRAM ==========
function orderViaInstagram(productName) {
    const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;
    window.open(instagramUrl, "_blank");
    
    // Optional: Show a message to the user
    alert(
        `Please send a Direct Message on Instagram @${INSTAGRAM_HANDLE} mentioning the "${productName}" product you're interested in.`
    );
}

// ========== MOBILE MENU TOGGLE ==========
function toggleMenu() {
    navMenu.classList.toggle("active");
}

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    const header = document.querySelector(".header");
    if (!header.contains(e.target)) {
        navMenu.classList.remove("active");
    }
});

// ========== EVENT LISTENERS ==========
menuToggle.addEventListener("click", toggleMenu);

// ========== INITIALIZE ==========
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Optional: Log initialization
    console.log("isortech Product Catalog loaded successfully!");
    console.log(`Total products: ${products.length}`);
});

// ========== HELPER FUNCTIONS ==========

// Add product to the catalog (for future use)
function addProduct(product) {
    products.push(product);
    renderProducts();
}

// Search products by name or category (for future use)
function searchProducts(query) {
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    return results;
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Export functions for console use
window.isortech = {
    addProduct,
    searchProducts,
    getProductsByCategory,
    getAllProducts: () => products
};
