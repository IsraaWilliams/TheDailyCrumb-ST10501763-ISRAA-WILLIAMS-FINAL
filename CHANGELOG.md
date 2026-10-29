# CHANGELOG - The Daily Crumb Bakery
# Student: Israa Williams - ST10501763
# Module: WEDE5020 Part 1, 2, 3

# ----------------------------------------------------
# Part 1 - Initial Build - 10 Aug 2026
# ----------------------------------------------------
- Created 5 core HTML pages: index.html, about.html, products.html, enquiry.html, contact.html
- Created basic folder structure: CSS/ JS/ IMAGES/ (uppercase - caused issue later)
- Added header nav with logo The Daily Crumb 🍞
- Added placeholder images: hero-400.jpg, bread.jpg etc - many missing
- Added Figma sitemap link: https://www.figma.com/board/DailyCrumb-ST10501763-Is-Your-Link-Here
- Added initial sitemap.xml and robots.txt basic
- First commit - only 2 commits total (lecturer flagged this)

# ----------------------------------------------------
# Part 2 Feedback Fixes - 18 Sept 2026 - Lecturer Feedback Implementation
# ----------------------------------------------------
- CRITICAL FIX: Lecturer said uppercase folders CSS/ JS/ IMAGES/ breaks GitHub Pages Linux server
  → Fixed to lowercase css/ js/ images/ - tested on Netlify + GitHub Pages now works
  → Renamed all file paths in HTML from CSS/style.css to css/style.css etc

- CRITICAL FIX: hero.jpg missing - was referencing hero-400.jpg and hero-800.jpg that didnt exist
  → Deleted fake srcset hero-400.jpg reference
  → Now only hero.jpeg / hero.jpg which actually exist in images/ folder
  → Added <picture> element with <source srcset="images/hero.jpeg"> fallback for .jpeg + .jpg

- CRITICAL FIX: Fonts not loaded - forgot Google Fonts link in some pages
  → Added to ALL pages: <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Lora:wght@400;700&display=swap">
  → Poppins for headings (lecturer requirement), Lora for body

- FIX: Added picture element with type="image/jpeg" for all gallery images
  → Now supports both .jpeg and .jpg: <source srcset="images/bread.jpeg"><img src="images/bread.jpeg">
  → Fixes .jpg.jpeg double extension bug that broke all images

- FIX: Added code comments in css/style.css and js/main.js - student name, student number, date, what function does
- FIX: Added responsive screenshots for marking
  → Used Chrome DevTools: 1920px desktop, 768px tablet, 375px mobile
  → Saved in docs/screenshots/ - desktop.png, tablet.png, mobile.png
- FIX: Added more commits - from 2 commits to 18+ commits with clear messages
  → Example: "fix: rename IMAGES to images lowercase", "fix: add google fonts to all pages", "feat: add picture element jpeg"

# ----------------------------------------------------
# Part 3 - Final Build - 27 Oct 2026 - Lecturer Requirements Part 3
# ----------------------------------------------------

# 1. MOBILE NAV TOGGLE - Requirement: Hamburger menu on mobile
- Added button id="mobileToggle" with class="mobile-toggle" ☰ in ALL 5 pages header
- JS in js/main.js: mobileBtn.addEventListener("click") toggles navBar.classList.add("show")
- Changes icon ☰ to ✕ when open
- CSS in css/style.css: nav{display:none} @media(max-width:768px) and nav.show{display:flex} - so it shows/hides
- Also closes when link clicked - mobile UX fix
- Works on index, about, products, enquiry, contact - same IDs hand in hand

# 2. ACTIVE LINK HIGHLIGHT - Requirement: Show current page
- Old code hardcoded class="active" - broke when navigating
- New JS: window.location.pathname.split("/").pop() gets current file name
- Loops document.querySelectorAll("nav a") and adds active class if href === current
- CSS: nav a.active{border-bottom:3px solid var(--primary); background:var(--light)}
- Works on all pages automatically

# 3. MENU FILTERING - Requirement: Dynamic product filtering (products.html)
- Added filter bar: input id="searchInput", select id="categoryFilter", select id="sortSelect"
- Created js/products.js with array of 15 products - all images .jpeg: images/bread.jpeg, croissant.jpeg, coffee.jpeg, cake.jpeg, sourdough.jpeg, hero.jpeg
- Live filtering: searchInput keyup filters by name/desc/category
- Category filter: all, bread, pastry, coffee, cake
- Sort: price-low, price-high, name A-Z
- Shows p id="noResults" if no match
- Injected into div id="productList" class="services-grid" - JS creates cards dynamically
- Part 3 requirement met: no page reload, JS DOM manipulation

# 4. ENQUIRY VALIDATION - Requirement: Extended validation, errors next to fields, not alert
- Old enquiry.html had only 3 fields, no regex, used alert()
- New enquiry.html: 8 fields - nameInput, emailInput, phoneInput, categorySelect, quantityInput, dateInput, branchSelect, msgInput, halaalCheck, termsCheck
- IDs FIXED to work with main.js: nameInput, emailInput, msgInput kept for compatibility
- Validation in js/main.js:
  → Name: /^[A-Za-z ]{2,50}$/ - 2+ letters only, no numbers - regex requirement
  → Email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ - checks format name@gmail.com
  → Phone: optional but if filled must be 10 digits /^[0-9]{10}$/
  → Category: must select not empty
  → Quantity: must select
  → Date: cannot be empty, cannot be in past - new Date() compare - future check
  → Message: min 20 chars for enquiry, 15 for contact
  → Terms checkbox must be checked
- Errors show in span.error or small#nameError next to field - not alert - lecturer requirement
- On success: shows div id="enquiryResponse" / #formSuccess with cost and availability
  Example: if cake selected → "Small R350, Medium R550, Large R850 - Need 48hrs notice"
  Example: if bread → "R55 per loaf, Bulk 20+ R50 each - Available daily baked 4AM"
- Scrolls to response, saves to localStorage lastEnquiry
- Prevents default submit with event.preventDefault() - ajax requirement

# 5. CONTACT FORM VALIDATION - Similar to enquiry
- Form id="contactForm" with cName, cEmail, cPhone, cType, cMsg
- Regex same as enquiry
- On valid: opens mailto:hello@thedailycrumb.co.za?subject=[Type] Message... - assignment demo
- Shows p id="contactStatus" green success message

# 6. MAPS - Requirement: 3 working maps - Lecturer said fix maps
- Leaflet interactive map: div id="map" height 420px
- JS checks if L !== undefined, then L.map('map').setView([-33.9249, 18.4241],12)
- 3 markers:
  → Woodstock HQ -33.9249,18.4241 popup "12 Albert Rd 021 123 4567"
  → Claremont -33.981,18.460 popup "45 Main Rd 021 765 4321"
  → Sea Point -33.917,18.389 popup "8 Regent Rd 021 555 0001"
- fitBounds to show all 3 markers
- Plus 3 Google Maps iframes - one per branch - detailed maps
  → src="https://www.google.com/maps?q=12+Albert+Road+Woodstock+Cape+Town&output=embed"
  → Claremont and Sea Point same
- Maps work on index.html and contact.html - same main.js code

# 7. LIGHTBOX GALLERY - Requirement: Click to enlarge
- All images class="lightbox-img" cursor pointer
- div id="lightbox" with img id="lightbox-img" and span.close-lightbox
- JS: galleryImages.forEach click → lightboxImg.src = this.src, lightbox.style.display="flex"
- Close on X, close on clicking outside, close on Esc - UX
- Works on all pages, all .jpeg images: bread.jpeg, croissant.jpeg, coffee.jpeg, cake.jpeg, sourdough.jpeg, hero.jpeg

# 8. TABS & ACCORDION - Requirement: Interactive components
- Tabs: button.tab-btn data-tab="story/team/values/timeline" - JS removes active from all, adds to clicked, shows div id=tabId
- Fixed to work with both class and inline style display:block/none - about.html uses inline
- Accordion: div.accordion with .acc-header and .acc-body - click toggles display block/none
- Used in index FAQ, about FAQ, enquiry FAQ, contact FAQ

# 9. MODAL - Special offer popup
- div id="myModal" modal with button id="openModal" Today's Special
- Close on X, close on outside click

# 10. IMAGES FIX - .jpeg as well
- Old bug: images/bread.jpg.jpeg double extension - broke all images
- Fixed to images/bread.jpeg - single extension
- Added fallback <picture><source srcset="images/bread.jpeg" type="image/jpeg"><img src="images/bread.jpeg">
- Folder images/ now contains: hero.jpeg, bread.jpeg, croissant.jpeg, coffee.jpeg, cake.jpeg, sourdough.jpeg
- All HTML files reference .jpeg - works hand in hand

# 11. SEO & PERFORMANCE - Part 3
- Added meta description, keywords, author, canonical to ALL pages
- Added robots.txt and sitemap.xml for SEO - lecturer requirement
- Added lazy loading loading="lazy" to all images
- Added width height attributes to hero images to prevent layout shift
- Compressed hero.jpeg etc - page speed improved
- Added internal links in footer for SEO
- Added structured data: 3 branches, prices R55 etc

# 12. CSS FIXES - style.css longer and compatible
- :root variables --primary #8B4513 etc
- Added styles for .filter-bar, .gallery-grid, .lightbox, .modal, .tabs, .accordion, #map, .error, #formSuccess
- Added support for both #mainNav and #navMenu IDs
- Added @media max-width 768px and 480px - responsive for mobile
- Added nav.show rule so JS toggle actually works
- Added focus-visible for accessibility, print hide
- Added animations fadeIn for tabs

# 13. COMMITS & TESTING - Final
- Tested all 5 pages on localhost:5500 and Netlify https://thedailycrumb.netlify.app
- Tested mobile nav, tabs, accordion, lightbox, modal, maps 3 markers, enquiry validation with regex, contact mailto, product filter search
- All images load .jpeg, no 404
- Folder structure lowercase: css/, js/, images/, docs/
- Total commits now 32+ with clear messages
- Ready for submission 27 Oct 2026

# Figma & Live Links
- Figma Sitemap: https://www.figma.com/board/DailyCrumb-ST10501763-Is-Your-Link-Here
- Live Site: https://thedailycrumb-st10501763-final.netlify.app 
- GitHub: https://github.com/ST10501763/TheDailyCrumb

# Student
- Israa Williams ST10501763 WEDE5020
