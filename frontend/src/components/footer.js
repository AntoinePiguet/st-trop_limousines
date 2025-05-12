app.component("footer-component", {
    data() 
    {
        return {
            logo: "../public/images/logo.png",
            icons:["../public/images/icons/iconoir_phone-solid.svg","../public/images/icons/iconoir_mail-solid.svg","../public/images/icons/iconoir_pin.svg"],
            texts:["+33 6 09 51 59 09", "book@sainttropezlimousines.com", "Route des Plages, 83990, St Tropez, FRANCE"],
            photos:["../public/images/icons/uil_facebook.svg","../public/images/icons/bi_instagram.svg","../public/images/icons/iconoir_mail-solid.svg"],
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
                <ul class="contactList">
                    <li v-for="(text, index) in texts" :key="index">
                        <img :src="icons[index]" class="contactIcons" width="24" height="24" />
                        {{ text }}
                    </li>
                </ul>
            </div>

            <img :src="logo" id="footerLogo" />

            <div class="social">
                <div class="icons">
                    <a v-for="(photo, index) in photos" :key="index" :href="links[index]">
                        <img :src="photos[index]" class="icon" width="34" height="34" />
                    </a>
                </div>
            </div>
        </div>
        <p class="copyright">{{copyright}}</p>
    </footer>

    `
})

//
//