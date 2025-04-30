app.component("footer-component", {
    data() 
    {
        return {
            logo: "../public/images/logo.png",
            icons:["../public/images/icons/phone.png","../public/images/icons/mail.png","../public/images/icons/pin.png"],
            texts:["+33 6 09 51 59 09", "book@sainttropezlimousines.com", "Route des Plages, 83990, St Tropez, FRANCE"],
            photos:["../public/images/icons/fb.png","../public/images/icons/insta.png","../public/images/icons/mail.png"],
            links:["https://www.instagram.com/", "https://www.facebook.com", "mailto:book@sainttropezlimousines.com"],
            copyright:"Copyright 2016 - 2025 Saint-Tropez Limousines | All Rights Reserved | Mentions Légales | Charte de confidentialité"
        }
    },

template: 
    /*html*/
    `
    <footer id="footer">
    <div id="footer-component">
        <div class="contact">
            <h3 id="contact">Contact</h3>
            <ul class="contactList">
                <li v-for="(text, index) in texts" :key="index"><img :src="icons[index]" class="contactIcons"/>{{text}}</li>
            </ul>
        </div>
            <img :src="logo" id="footerLogo"/>
        <div class="social">
            <h3 id="social">Social</h3>
            <div class="icons">
                <a v-for="(photo, index) in photos" :key="index" :href="links[index]"><img  :src="photos[index]" class="icon"/></a>
            </div>
        </div>
        </div>
        <p class="copyright">{{copyright}}</p>
    </footer>
    `
})

//
//