// ========================================
// ISORTECH - PRODUCT DATA EXAMPLES
// Additional products and customization
// ========================================

/**
 * This file shows how to add more products to the catalog.
 * Copy and paste product objects into the products array in script.js
 */

// ========== ADDITIONAL REFRIGERATOR PRODUCTS ==========

const refrigerators = [
    {
        id: 10,
        name: "Top Freezer Refrigerator",
        category: "Refrigerators",
        image: "❄️",
        price: "$799.99",
        specs: [
            "18.2 cu ft capacity",
            "Adjustable shelves",
            "Frost-free freezer",
            "Energy Star rated"
        ]
    },
    {
        id: 11,
        name: "Bottom Freezer Refrigerator",
        category: "Refrigerators",
        image: "🧊",
        price: "$1,099.99",
        specs: [
            "21.9 cu ft capacity",
            "Drawer-style freezer",
            "Spill-proof shelves",
            "Stainless steel exterior"
        ]
    },
    {
        id: 12,
        name: "Compact Mini Refrigerator",
        category: "Refrigerators",
        image: "📦",
        price: "$199.99",
        specs: [
            "3.2 cu ft capacity",
            "Perfect for dorms",
            "Reversible door",
            "Removable shelves"
        ]
    }
];

// ========== ADDITIONAL HAIR DRYER PRODUCTS ==========

const hairDryers = [
    {
        id: 13,
        name: "Travel Hair Dryer",
        category: "Hair Dryers",
        image: "✈️",
        price: "$49.99",
        specs: [
            "Dual voltage",
            "Ultra-compact design",
            "Lightweight (under 1 lb)",
            "Perfect for travel"
        ]
    },
    {
        id: 14,
        name: "Diffuser Hair Dryer",
        category: "Hair Dryers",
        image: "🌊",
        price: "$129.99",
        specs: [
            "Built-in diffuser",
            "Reduces frizz",
            "Concentrator nozzle included",
            "1900W power"
        ]
    },
    {
        id: 15,
        name: "Turbo Blow Dryer",
        category: "Hair Dryers",
        image: "💨",
        price: "$199.99",
        specs: [
            "Ultra high power",
            "Super fast drying",
            "Titanium coated",
            "Professional grade"
        ]
    }
];

// ========== ADDITIONAL MIXER PRODUCTS ==========

const mixers = [
    {
        id: 16,
        name: "Immersion Blender",
        category: "Mixers",
        image: "🥣",
        price: "$49.99",
        specs: [
            "Cordless design",
            "3 speed settings",
            "Stainless steel blades",
            "Easy to clean"
        ]
    },
    {
        id: 17,
        name: "Food Processor Mixer",
        category: "Mixers",
        image: "⚙️",
        price: "$199.99",
        specs: [
            "Multi-function",
            "Large capacity bowl",
            "Pulse feature",
            "Multiple blades included"
        ]
    },
    {
        id: 18,
        name: "Dough Mixer Pro",
        category: "Mixers",
        image: "🍞",
        price: "$299.99",
        specs: [
            "Heavy-duty construction",
            "8-quart bowl",
            "10 speed settings",
            "Commercial strength motor"
        ]
    }
];

// ========== HOW TO USE ==========

/**
 * To add these products to your catalog:
 * 
 * 1. Open script.js
 * 2. Find the const products = [ ... ] section
 * 3. Copy product objects from this file
 * 4. Paste them into the products array
 * 
 * Example:
 * const products = [
 *     { id: 1, name: "French Door Refrigerator", ... },
 *     { id: 2, name: "Professional Hair Dryer", ... },
 *     // Paste additional products here ↓
 *     { id: 10, name: "Top Freezer Refrigerator", ... },
 *     { id: 13, name: "Travel Hair Dryer", ... },
 * ];
 */

// ========== CUSTOMIZATION EXAMPLES ==========

/**
 * EXAMPLE 1: Using image files instead of emojis
 * 
 * 1. Create an images/ folder in your project
 * 2. Add your product images (e.g., refrigerator.jpg)
 * 3. Update the image property:
 * 
 * {
 *     id: 1,
 *     name: "French Door Refrigerator",
 *     image: "images/refrigerator.jpg",  // ← Change this
 *     ...
 * }
 * 
 * 4. Update the HTML in script.js renderProducts() function:
 *    Replace: <div class="product-image placeholder">${product.image}</div>
 *    With: <img src="${product.image}" alt="${product.name}">
 */

/**
 * EXAMPLE 2: Adding custom fields to products
 * 
 * {
 *     id: 1,
 *     name: "French Door Refrigerator",
 *     category: "Refrigerators",
 *     image: "🧊",
 *     price: "$1,299.99",
 *     specs: [...],
 *     sku: "FDR-001",              // Add SKU
 *     inStock: true,               // Track inventory
 *     warranty: "5 years",         // Add warranty
 *     rating: 4.8,                 // Add rating
 *     reviews: 127,                // Add review count
 *     discount: "10% off"          // Add promotion
 * }
 */

/**
 * EXAMPLE 3: Filtering products by category
 * 
 * In your HTML, you can add category buttons:
 * <button onclick="filterCategory('Refrigerators')">Refrigerators</button>
 * <button onclick="filterCategory('Hair Dryers')">Hair Dryers</button>
 * 
 * Then add this function to script.js:
 * 
 * function filterCategory(category) {
 *     const filtered = products.filter(p => p.category === category);
 *     displayProducts(filtered);
 * }
 */

/**
 * EXAMPLE 4: Sorting products
 * 
 * Add these functions to script.js:
 * 
 * function sortByPrice(order = 'asc') {
 *     const sorted = [...products].sort((a, b) => {
 *         const priceA = parseFloat(a.price.replace('$', ''));
 *         const priceB = parseFloat(b.price.replace('$', ''));
 *         return order === 'asc' ? priceA - priceB : priceB - priceA;
 *     });
 *     renderProducts(sorted);
 * }
 * 
 * function sortByName() {
 *     const sorted = [...products].sort((a, b) =>
 *         a.name.localeCompare(b.name)
 *     );
 *     renderProducts(sorted);
 * }
 */

// ========== CONTACT CUSTOMIZATION ==========

/**
 * To update contact information:
 * 
 * 1. Edit WHATSAPP_PHONE in script.js:
 *    const WHATSAPP_PHONE = "270709400027";  // Change this
 * 
 * 2. Edit INSTAGRAM_HANDLE in script.js:
 *    const INSTAGRAM_HANDLE = "isortech";  // Change this
 * 
 * 3. Update contact details in index.html (Contact Section):
 *    <a href="mailto:your-email@mail.ru">
 *    <a href="https://wa.me/your-number">
 *    <a href="https://instagram.com/your-handle">
 * 
 * 4. Update footer social links in index.html
 */

// ========== COLOR CUSTOMIZATION ==========

/**
 * To change the brand colors:
 * 
 * Open styles.css and modify the :root variables:
 * 
 * :root {
 *     --primary-color: #2563eb;        // Main brand color (blue)
 *     --primary-dark: #1e40af;         // Dark variant
 *     --secondary-color: #10b981;      // Secondary color (green)
 *     --accent-color: #f59e0b;         // Accent color (amber)
 *     --text-dark: #1f2937;            // Dark text
 *     --text-light: #6b7280;           // Light text
 *     --border-light: #e5e7eb;         // Border color
 *     --bg-light: #f9fafb;             // Light background
 *     --bg-white: #ffffff;             // White background
 * }
 * 
 * Popular color combinations:
 * 
 * Tech-focused: #007bff (blue), #17a2b8 (cyan), #6c757d (gray)
 * Natural: #27ae60 (green), #f39c12 (orange), #34495e (dark)
 * Premium: #2c3e50 (dark blue), #c0392b (red), #f1c40f (gold)
 * Modern: #3498db (light blue), #e74c3c (red), #2ecc71 (green)
 */

// ========== PERFORMANCE TIPS ==========

/**
 * 1. Image Optimization:
 *    - Use JPEG for photos (smaller file size)
 *    - Use PNG for graphics with transparency
 *    - Resize images to 800x600px maximum
 *    - Compress using tools like TinyPNG or Imagemin
 * 
 * 2. Loading Speed:
 *    - Limit products to 50-100 per page
 *    - Use lazy loading for images if you have many products
 *    - Minify CSS and JavaScript for production
 * 
 * 3. Mobile Optimization:
 *    - Test on real devices (iPhone, Android)
 *    - Ensure buttons are at least 44x44px for touch targets
 *    - Use viewport meta tag (already included)
 * 
 * 4. Accessibility:
 *    - Add alt text to images
 *    - Use semantic HTML
 *    - Ensure sufficient color contrast
 *    - Test with screen readers
 */

/**
 * That's it! Customize the products, colors, and contact info to match your brand.
 * For more help, check the README.md file.
 */
