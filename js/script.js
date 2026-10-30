// The Daily Crumb - Part 3 JS - FIXED TO WORK WITH ALL 5 PAGES
// Student: Israa Williams - ST10501763 - WEDE5020
// Handles mobile nav, tabs, accordion, modal, lightbox, maps, enquiry + contact validation

console.log("main.js loaded - ST10501763 - all pages");

// ===================== MOBILE NAV TOGGLE - works on all pages =====================
var mobileBtn = document.getElementById("mobileToggle") || document.getElementById("navToggle");
var navBar = document.getElementById("mainNav") || document.getElementById("navMenu");

if(mobileBtn && navBar){
    mobileBtn.addEventListener("click", function(){
        if(navBar.classList.contains("show")){
            navBar.classList.remove("show");
            mobileBtn.innerHTML = "☰";
        } else {
            navBar.classList.add("show");
            mobileBtn.innerHTML = "✕";
        }
    });
}

// close nav when link clicked on mobile
var navLinks = document.querySelectorAll("#mainNav a, #navMenu a");
navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        if(navBar && navBar.classList.contains("show")){
            navBar.classList.remove("show");
            if(mobileBtn) mobileBtn.innerHTML = "☰";
        }
    });
});

// ===================== ACTIVE LINK HIGHLIGHT =====================
var current = window.location.pathname.split("/").pop();
if(current === "" || current === undefined){
    current = "index.html";
}
var allNavLinks = document.querySelectorAll("nav a, #mainNav a, #navMenu a");
for(var i=0; i<allNavLinks.length; i++){
    var href = allNavLinks[i].getAttribute("href");
    if(href === current){
        allNavLinks[i].classList.add("active");
    }
}

// ===================== TABS - works for index, about, products =====================
var tabButtons = document.querySelectorAll(".tab-btn");
for(let j=0; j<tabButtons.length; j++){
    tabButtons[j].addEventListener("click", function(){
        // remove active from all buttons
        for(let k=0;k<tabButtons.length;k++){
            tabButtons[k].classList.remove("active");
        }
        var allContents = document.querySelectorAll(".tab-content");
        for(let l=0;l<allContents.length;l++){
            allContents[l].classList.remove("active");
            allContents[l].style.display = "none"; // for about.html inline style version
        }
        // add active to clicked
        this.classList.add("active");
        var tabId = this.getAttribute("data-tab");
        var content = document.getElementById(tabId);
        if(content){
            content.classList.add("active");
            content.style.display = "block"; // fix for about.html
        }
    });
}

// ===================== ACCORDION FAQ - all pages =====================
var accHeaders = document.querySelectorAll(".acc-header");
accHeaders.forEach(function(header){
    header.addEventListener("click", function(){
        var body = this.nextElementSibling;
        if(!body) return;
        if(body.style.display === "block"){
            body.style.display = "none";
            this.innerHTML = this.innerHTML.replace("−", "+").replace("-", "+");
        } else {
            body.style.display = "block";
        }
    });
});

// ===================== MODAL - index.html special offer =====================
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModal");
if(modal && openBtn){
    openBtn.onclick = function(){
        modal.style.display = "block";
    }
    var closeBtn = document.querySelector(".close");
    if(closeBtn){
        closeBtn.onclick = function(){
            modal.style.display = "none";
        }
    }
    window.addEventListener("click", function(e){
        if(e.target == modal){
            modal.style.display = "none";
        }
    });
}

// ===================== LIGHTBOX GALLERY - all pages .jpeg =====================
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var galleryImages = document.querySelectorAll(".lightbox-img");

if(lightbox && lightboxImg){
    galleryImages.forEach(function(img){
        img.style.cursor = "pointer";
        img.addEventListener("click", function(){
            lightboxImg.src = this.src;
            lightbox.style.display = "flex";
        });
    });
    var closeLight = document.querySelector(".close-lightbox");
    if(closeLight){
        closeLight.addEventListener("click", function(){
            lightbox.style.display = "none";
        });
    }
    lightbox.addEventListener("click", function(e){
        if(e.target === lightbox){
            lightbox.style.display = "none";
        }
    });
}

// ===================== LEAFLET MAP - 3 locations - index + contact =====================
var mapDiv = document.getElementById("map");
if(mapDiv){
    if(typeof L !== 'undefined'){
        var myMap = L.map('map').setView([-33.9249, 18.4241], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap - The Daily Crumb'
        }).addTo(myMap);

        var woodstock = L.marker([-33.9249, 18.4241]).addTo(myMap);
        woodstock.bindPopup("<b>Woodstock HQ - Main Bakery</b><br>12 Albert Road<br>021 123 4567<br>Open 6AM-4PM<br><b>Bakes at 4AM</b>").openPopup();

        var claremont = L.marker([-33.981, 18.460]).addTo(myMap);
        claremont.bindPopup("<b>Claremont Branch</b><br>45 Main Road<br>021 765 4321<br>Mon-Sat 6AM-3PM");

        var seaPoint = L.marker([-33.917, 18.389]).addTo(myMap);
        seaPoint.bindPopup("<b>Sea Point Branch</b><br>8 Regent Road<br>021 555 0001<br>Mon-Sun 6AM-5PM");

        // fit all markers
        var group = new L.featureGroup([woodstock, claremont, seaPoint]);
        myMap.fitBounds(group.getBounds().pad(0.2));
    } else {
        console.log("Leaflet not loaded - check CDN");
    }
}

// ===================== ENQUIRY FORM - FIXED IDS - enquiry.html =====================
var enquiryForm = document.getElementById("enquiryForm");
if(enquiryForm){
    enquiryForm.addEventListener("submit", function(event){
        event.preventDefault();
        var isValid = true;

        // get new IDs - works with your longer enquiry.html
        var nameField = document.getElementById("nameInput") || document.getElementById("eName");
        var emailField = document.getElementById("emailInput") || document.getElementById("eEmail");
        var phoneField = document.getElementById("phoneInput") || document.getElementById("ePhone");
        var categoryField = document.getElementById("categorySelect") || document.getElementById("eType");
        var qtyField = document.getElementById("quantityInput") || document.getElementById("eQty");
        var dateField = document.getElementById("dateInput") || document.getElementById("eDate");
        var msgField = document.getElementById("msgInput");
        var branchField = document.getElementById("branchSelect");
        var termsField = document.getElementById("termsCheck");

        // clear old errors
        document.querySelectorAll(".error, small").forEach(function(el){
            if(el.id.includes("Error")) el.textContent = ""; 
        });
        var nameErr = document.getElementById("nameError");
        var emailErr = document.getElementById("emailError");
        var msgErr = document.getElementById("msgError");
        if(nameErr) nameErr.style.display = "none";
        if(emailErr) emailErr.style.display = "none";
        if(msgErr) msgErr.style.display = "none";

        // name - at least 2 letters, no numbers - regex lecturer requirement
        if(!nameField || nameField.value.trim().length < 2){
            if(nameErr){ nameErr.textContent = "Name must be 2+ letters only, no numbers"; nameErr.style.display = "block"; }
            isValid = false;
        } else {
            var namePat = /^[A-Za-z ]{2,50}$/;
            if(!namePat.test(nameField.value.trim())){
                if(nameErr){ nameErr.textContent = "Name must be letters only, min 2 chars"; nameErr.style.display = "block"; }
                isValid = false;
            }
        }

        // email - regex
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailField || !emailPattern.test(emailField.value.trim())){
            if(emailErr){ emailErr.textContent = "Please enter valid email like name@gmail.com"; emailErr.style.display = "block"; }
            var eEmailErr = document.getElementById("eEmailError");
            if(eEmailErr) eEmailErr.textContent = "Please enter valid email like name@gmail.com";
            isValid = false;
        }

        // phone - optional but if filled must be 10 digits
        if(phoneField && phoneField.value.trim() !== ""){
            var phonePat = /^[0-9]{10}$/;
            var cleanPhone = phoneField.value.replace(/\s/g, "");
            if(!phonePat.test(cleanPhone)){
                var ePhoneErr = document.getElementById("ePhoneError") || document.getElementById("cPhoneError");
                if(ePhoneErr) ePhoneErr.textContent = "Phone must be 10 digits, eg 0821234567";
                isValid = false;
            }
        }

        // category selected
        if(categoryField && (categoryField.value === "" || categoryField.value === "-- Select Product --")){
            var eTypeErr = document.getElementById("eTypeError") || document.getElementById("cTypeError");
            if(eTypeErr) eTypeErr.textContent = "Please select what you want to order";
            isValid = false;
        }

        // quantity
        if(qtyField){
            if(qtyField.value.trim() === "" || qtyField.value.trim().length < 2){
                var eQtyErr = document.getElementById("eQtyError");
                if(eQtyErr) eQtyErr.textContent = "Please select quantity/size";
                isValid = false;
            }
        }

        // date not in past
        if(dateField){
            if(dateField.value === ""){
                var eDateErr = document.getElementById("eDateError");
                if(eDateErr) eDateErr.textContent = "Please select a future date";
                isValid = false;
            } else {
                var selected = new Date(dateField.value);
                var today = new Date();
                today.setHours(0,0,0,0);
                selected.setHours(0,0,0,0);
                if(selected < today){
                    var eDateErr2 = document.getElementById("eDateError");
                    if(eDateErr2) eDateErr2.textContent = "Date cannot be in the past";
                    isValid = false;
                }
            }
        }

        // message - at least 20 chars for enquiry.html
        if(msgField && msgField.value.trim().length < 20){
            if(msgErr){ msgErr.textContent = "Please give more detail - at least 20 characters"; msgErr.style.display = "block"; }
            isValid = false;
        }

        // terms checkbox
        if(termsField && !termsField.checked){
            alert("Please agree to 48hr notice and 50% deposit required");
            isValid = false;
        }

        if(!isValid){
            console.log("Enquiry form validation failed");
            return;
        }

        // if valid - show cost and availability
        var costText = "";
        var availText = "";
        var catVal = categoryField ? categoryField.value : "custom-cake";

        if(catVal.includes("cake") || catVal === "cake"){
            costText = "Small R350 (6 ppl), Medium R550 (12 ppl), Large R850 (20 ppl)";
            availText = "Need 48 hours notice, Halaal option available";
        } else if(catVal.includes("bread") || catVal === "sourdough" || catVal === "bulk-bread"){
            costText = "R55 per loaf, Bulk 20+ loaves R50 each (R5 off)";
            availText = "Available daily, baked at 4AM, needs 48hr fermentation";
        } else if(catVal.includes("pastry") || catVal === "catering-box"){
            costText = "R28 to R38 each, Box of 12 R300 - perfect for office";
            availText = "Same day if ordered before 10AM, otherwise next day";
        } else if(catVal.includes("coffee")){
            costText = "250g R95, 1kg R320 - single origin Ethiopian";
            availText = "Beans roasted weekly, available daily";
        } else if(catVal.includes("class")){
            costText = "R450 per person, 3 hours, take home starter";
            availText = "Sundays 9AM Woodstock HQ, booking required";
        } else {
            costText = "Quote on enquiry - we reply within 2hrs";
            availText = "48hr notice generally required";
        }

        var branchName = branchField ? branchField.options[branchField.selectedIndex].text : "Woodstock HQ";
        var qtyName = qtyField ? (qtyField.options ? qtyField.options[qtyField.selectedIndex].text : qtyField.value) : "1";

        // response div - new + old support
        var responseDiv = document.getElementById("enquiryResponse") || document.getElementById("formSuccess");
        if(!responseDiv){
            responseDiv = document.createElement("div");
            responseDiv.id = "enquiryResponse";
            responseDiv.style.cssText = "background:#e8f5e9; padding:20px; border-radius:12px; margin-top:20px; border:1px solid #a5d6a7;";
            enquiryForm.parentNode.appendChild(responseDiv);
        }
        responseDiv.style.display = "block";
        responseDiv.innerHTML = "<h3>Thank you " + nameField.value + "! ✅</h3>" +
            "<p><strong>Order:</strong> " + catVal + " - " + qtyName + "</p>" +
            "<p><strong>Branch:</strong> " + branchName + "</p>" +
            "<p><strong>Date needed:</strong> " + (dateField ? dateField.value : "ASAP") + "</p>" +
            "<p><strong>Cost:</strong> " + costText + "</p>" +
            "<p><strong>Availability:</strong> " + availText + "</p>" +
            "<p><strong>Details:</strong> " + (msgField ? msgField.value.substring(0,100) : "") + "...</p>" +
            "<p>We will email you at " + emailField.value + " within 2 hours. Deposit 50% to confirm.</p>" +
            "<p style='font-size:12px; color:#555;'>Demo for assignment - no real email sent. Validation works! ST10501763</p>";

        responseDiv.scrollIntoView({behavior: "smooth"});

        // save to localStorage - extra feature
        localStorage.setItem("lastEnquiry", JSON.stringify({
            name: nameField.value,
            email: emailField.value,
            product: catVal,
            date: dateField ? dateField.value : ""
        }));

        console.log("Enquiry submitted OK:", nameField.value, catVal);
        // enquiryForm.reset(); // keep data for marking
    });
}

// ===================== CONTACT FORM - FIXED =====================
var contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        var valid = true;
        document.querySelectorAll(".error").forEach(function(el){ el.textContent=""; });

        var cName = document.getElementById("cName");
        var cEmail = document.getElementById("cEmail");
        var cType = document.getElementById("cType");
        var cMsg = document.getElementById("cMsg");
        var cPhone = document.getElementById("cPhone");

        if(!cName || cName.value.trim().length < 3){
            var err = document.getElementById("cNameError");
            if(err) err.textContent = "Name must be at least 3 characters, letters only";
            valid = false;
        }
        var emailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!cEmail || !emailPat.test(cEmail.value.trim())){
            var err2 = document.getElementById("cEmailError");
            if(err2) err2.textContent = "Enter valid email like name@gmail.com";
            valid = false;
        }
        if(!cType || cType.value === ""){
            var err3 = document.getElementById("cTypeError");
            if(err3) err3.textContent = "Select message type";
            valid = false;
        }
        if(!cMsg || cMsg.value.trim().length < 15){
            var err4 = document.getElementById("cMsgError");
            if(err4) err4.textContent = "Message must be at least 15 characters";
            valid = false;
        }
        if(cPhone && cPhone.value.trim() !== ""){
            var phonePat2 = /^[0-9]{10}$/;
            if(!phonePat2.test(cPhone.value.replace(/\s/g,""))){
                var err5 = document.getElementById("cPhoneError");
                if(err5) err5.textContent = "Phone 10 digits eg 0821234567";
                valid = false;
            }
        }

        if(!valid){
            console.log("Contact validation failed");
            return;
        }

        // mailto - works for assignment demo
        var subj = encodeURIComponent("[" + cType.value + "] Message from " + cName.value + " - The Daily Crumb");
        var bod = encodeURIComponent("Name: " + cName.value + "\nEmail: " + cEmail.value + "\nPhone: " + (cPhone ? cPhone.value : "not given") + "\nType: " + cType.value + "\n\nMessage:\n" + cMsg.value + "\n\n---\nSent from contact.html ST10501763");
        window.location.href = "mailto:hello@thedailycrumb.co.za?subject=" + subj + "&body=" + bod;

        var status = document.getElementById("contactStatus");
        if(status){
            status.textContent = "✅ Email app opened - please send. Thank you! We reply within 2hrs. (Demo for assignment)";
            status.style.color = "green";
            status.style.background = "#e8f5e9";
            status.style.padding = "10px";
            status.style.borderRadius = "6px";
        }
        console.log("Contact form OK - mailto opened");
    });
}

console.log("main.js fully loaded - all features ready - .jpeg images");
