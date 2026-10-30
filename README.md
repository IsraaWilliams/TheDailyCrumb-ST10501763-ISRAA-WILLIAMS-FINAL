# 🍞 The Daily Crumb Bakery - Cape Town
**Student:** Israa Williams - ST10501763  
**Module:** WEDE5020 Part 1, 2, 3  
**Date:** 27 Oct 2026

A responsive bakery website for a small business with 3 branches in Cape Town - Woodstock HQ, Claremont, Sea Point. Built for WEDE5020 assignment.

### 🔗 Live Links
- **Live Site (Netlify):** https://thedailycrumb-st10501763-finals.netlify.app
- **GitHub Repo:** https://github.com/IsraaWilliams/TheDailyCrumb-ST10501763-ISRAA-WILLIAMS-FINAL
- **Figma Sitemap:** https://write-depth-95415566.figma.site

> Replace the links above with your real Netlify + GitHub links after deploying

---

### ✨ Features - Part 3 Requirements Met

**1. Mobile Responsive**
- Hamburger menu `id="mobileToggle"` toggles `class="show"` on `#mainNav`
- Works on 1920px desktop, 768px tablet, 375px mobile
- Media queries in `css/style.css`

**2. Active Link Highlight**
- JS auto-detects `window.location.pathname` and adds `.active` class
- No hardcoded active

**3. Product Filtering - `products.html`**
- Live search: `id="searchInput"` filters by name/description
- Category filter: `id="categoryFilter"` - bread, pastry, coffee, cake
- Sort: `id="sortSelect"` - price low-high, high-low, name A-Z
- 15 products in `js/products.js` - all images `.jpeg`
- Dynamic injection into `id="productList"`

**4. Enquiry Validation - `enquiry.html`**
- Fields: `nameInput`, `emailInput`, `phoneInput`, `categorySelect`, `quantityInput`, `dateInput`, `branchSelect`, `msgInput`, `termsCheck`
- Regex:
    - Name: `/^[A-Za-z ]{2,50}$/` - letters only
    - Email: `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/`
    - Phone: `/^[0-9]{10}$/`
- Date cannot be in past
- Message min 20 chars
- Errors show next to field in `span.error` / `small#nameError` - not alert()
- Success shows cost & availability: e.g. Cake R350/R550/R850, Bread R55 bulk R50
- Uses `event.preventDefault()` - no page reload

**5. Contact Validation - `contact.html`**
- `id="contactForm"` with `cName`, `cEmail`, `cPhone`, `cType`, `cMsg`
- Opens `mailto:hello@thedailycrumb.co.za` on success

**6. Maps - 3 Locations**
- Leaflet map `id="map"` with 3 markers:
    - Woodstock HQ: -33.9249, 18.4241 - 12 Albert Rd
    - Claremont: -33.981, 18.460 - 45 Main Rd
    - Sea Point: -33.917, 18.389 - 8 Regent Rd
- Plus 3 Google Maps iframes

**7. Lightbox Gallery**
- All images `class="lightbox-img"` - click to enlarge
- `id="lightbox"` with `id="lightbox-img"` and `.close-lightbox`
- Works on all `.jpeg` images

**8. Tabs & Accordion**
- Tabs: `.tab-btn` with `data-tab` shows `.tab-content`
- Accordion: `.acc-header` toggles `.acc-body`
- Used for FAQ, Our Story, Team, Values

**9. Modal**
- Special offer modal `id="myModal"` opened by `id="openModal"`

---

### 📁 Folder Structure - Lowercase Fixed for GitHub Pages

TheDailyCrumb/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js (all interactive features)
│   └── products.js (15 products array)
├── images/
│   ├── hero.jpeg
│   ├── bread.jpeg
│   ├── croissant.jpeg
│   ├── coffee.jpeg
│   ├── cake.jpeg
│   └── sourdough.jpeg
├── docs/
│   └── screenshots/
│       ├── desktop-1920.png
│       ├── tablet-768.png
│       └── mobile-375.png
├── sitemap.xml
├── robots.txt
├── CHANGELOG.md
└── README.md


**Critical Fix:** Old uppercase `CSS/ JS/ IMAGES/` broke GitHub Pages (Linux is case-sensitive). Now all lowercase `css/ js/ images/` - works on Netlify + GitHub Pages.

---

### 🛠️ Tech Stack
- HTML5 semantic
- CSS3 with :root variables, grid, flexbox
- Vanilla JavaScript - no frameworks
- Leaflet 1.9.4 for interactive map
- Google Fonts: Poppins (headings) + Lora (body)
- Google Maps iframes

---

### 🖼️ Images - All .jpeg Single Extension
Old bug: `bread.jpg.jpeg` double extension caused 404.  
Fixed to:
- `images/hero.jpeg`
- `images/bread.jpeg`
- `images/croissant.jpeg`
- `images/coffee.jpeg`
- `images/cake.jpeg`
- `images/sourdough.jpeg`

All HTML uses `<picture><source srcset="images/X.jpeg" type="image/jpeg"><img src="images/X.jpeg" class="lightbox-img responsive-img" loading="lazy">`

---

### 🚀 How to Run Locally
1. Clone: `git clone https://github.com/ST10501763/TheDailyCrumb.git`
2. Open in VS Code
3. Install Live Server extension
4. Right-click `index.html` → Open with Live Server
5. Or use: `npx serve .` or `python -m http.server`

Test:
- Mobile menu ☰ → ✕
- Products search "sourdough"
- Enquiry form validation with wrong email
- Map shows 3 markers
- Lightbox click on any bread image

---

### 🔍 SEO
- Meta description, keywords, author, canonical on all 5 pages
- `sitemap.xml` with all pages
- `robots.txt`
- Alt text on all images
- Internal linking in footer
- Prices include R55, R28, R350 for keyword ranking
- Lazy loading `loading="lazy"` + width/height

---

### 📱 Responsive Screenshots
Located in `docs/screenshots/` - taken with Chrome DevTools:
- Desktop 1920px
- Tablet 768px
- Mobile 375px

---

### 📝 Part 2 Fixes Done
- [x] Folders lowercase css/js/images
- [x] hero.jpg missing fixed - now hero.jpeg exists
- [x] Google Fonts added to all pages
- [x] picture element with .jpeg
- [x] Code comments added
- [x] More commits (from 2 to 32+)
- [x] Responsive screenshots

### ✅ Part 3 Done
- [x] Mobile nav toggle
- [x] Active link JS
- [x] Menu filtering live
- [x] Enquiry extended validation with regex + errors next to field + date future check
- [x] 3 working maps (Leaflet 3 markers + 3 Google iframes)
- [x] robots.txt + sitemap.xml
- [x] Page speed - compressed images, lazy loading

---

### 👩‍💻 Author
Israa Williams - ST10501763 - WEDE5020 - Cape Town  
The Daily Crumb Bakery - Woodstock, Claremont, Sea Point
