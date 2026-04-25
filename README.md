# isortech - Product Catalog Website

A modern, clean, and fully responsive product catalog website for isortech - a household appliances business.

## 📋 Overview

This is a **catalog-only website** with no shopping cart, checkout, or payment processing. Customers browse products and contact the business via WhatsApp or Instagram to place orders.

### Key Features

✅ **Product Catalog** - Showcase household appliances with images, specs, and prices
✅ **Social Contact** - WhatsApp and Instagram ordering options
✅ **Mobile Optimized** - Fully responsive design for all devices
✅ **Modern Design** - Clean, professional, and trustworthy appearance
✅ **Easy to Customize** - Simple JavaScript-based product data management

## 📁 File Structure

```
isortech/
├── index.html      # Main HTML structure
├── styles.css      # All styling (responsive design)
├── script.js       # JavaScript functionality & product data
└── README.md       # This file
```

## 🚀 Getting Started

### 1. **Open the Website**
   - Simply open `index.html` in any modern web browser
   - The website works offline and requires no server setup

### 2. **View on Mobile**
   - Open `index.html` on your phone or tablet
   - The website is fully optimized for all screen sizes

### 3. **Deploy Online**
   - Upload all files to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)
   - No backend or database needed

## 🛍️ Product Management

### Adding Products

Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        category: "Category Name",
        image: "🧊",  // Use emoji or image file path
        price: "$99.99",
        specs: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ]
    }
    // Add more products...
];
```

### Using Product Images

Replace the emoji placeholders with actual image paths:

**Option 1: Use emoji** (current setup)
```javascript
image: "🧊"  // Any emoji works
```

**Option 2: Use image files**
1. Create an `images/` folder in the project
2. Add your product images
3. Update the image path:
```javascript
image: "images/refrigerator.jpg"
```

Then update the `product-image` HTML to use `<img>` tag instead of emoji.

## 📱 Contact Information

Current contact details are configured in `index.html` and `script.js`:

- **Email**: arazoruc07@mail.ru
- **WhatsApp**: +27 709 400 027
- **Instagram**: @isortech

To update contact info, search for these values throughout the files and replace with your own.

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #10b981;    /* Accent color */
    --accent-color: #f59e0b;       /* Highlight color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    /* ... more variables ... */
}
```

### Change Brand Name

1. Replace "isortech" in `index.html` (header and footer)
2. Update title: `<title>isortech - Premium Household Appliances</title>`
3. Update tagline: `<p class="tagline">Premium Household Appliances</p>`

### Change Font

Update the font-family in `styles.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 🔗 Social Media Links

The WhatsApp and Instagram links are generated dynamically from the product buttons.

### WhatsApp Integration

- Phone number format: Country code + number (e.g., `270709400027`)
- Custom message is sent with the product name
- Links to WhatsApp Web or mobile app

### Instagram Integration

- Opens Instagram profile
- User sees a popup to remind them to send DM mentioning the product

## 📊 Product Data Attributes

Each product object requires:

| Field | Type | Description |
|-------|------|-------------|
| `id` | Number | Unique product identifier |
| `name` | String | Product display name |
| `category` | String | Product category (Refrigerators, Hair Dryers, Mixers) |
| `image` | String | Emoji or image file path |
| `price` | String | Price with currency symbol |
| `specs` | Array | List of product specifications/features |

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The website uses CSS media queries for optimal display on:

- **Desktop**: 1200px+ (3-column product grid)
- **Tablet**: 769px - 1199px (2-column grid)
- **Mobile**: 480px - 768px (2-column grid)
- **Small Mobile**: < 480px (1-column grid)

## 🧰 JavaScript Functions

The `script.js` file provides several helper functions:

```javascript
// Add a new product
isortech.addProduct(productObject);

// Search products
isortech.searchProducts("query");

// Filter by category
isortech.getProductsByCategory("Refrigerators");

// Get all products
isortech.getAllProducts();
```

## 💡 Tips & Best Practices

1. **Product Images**: Use high-quality images (800x600px minimum)
2. **Specifications**: Keep specs clear and concise (3-5 items per product)
3. **Pricing**: Include currency symbol in price string
4. **Mobile Testing**: Always test on real mobile devices
5. **Performance**: Optimize images before uploading to reduce load time

## 🔒 Security Notes

- No user data is collected
- All contact links are external (WhatsApp, Instagram, Email)
- No forms or sensitive data processing
- Static website - fully secure

## 📈 Future Enhancement Ideas

1. Product search/filter functionality
2. Product comparison feature
3. Customer testimonials section
4. Newsletter signup
5. FAQ section
6. Product categories dropdown
7. Image gallery per product
8. Dark mode toggle

## 🚢 Deployment

### GitHub Pages (Free)
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Website lives at: `https://yourusername.github.io/isortech`

### Netlify (Free)
1. Drag and drop the folder to Netlify
2. Custom domain available
3. Instant deployment

### Traditional Hosting
1. FTP upload to your hosting provider
2. No server configuration needed
3. Works immediately

## 📄 License

This website template is free to use and modify for your business.

## 🤝 Support

For questions or customizations:
- Email: arazoruc07@mail.ru
- WhatsApp: +27 709 400 027
- Instagram: @isortech

---

**Made with ❤️ for isortech**
