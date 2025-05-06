app.component("header-component", {
    props: {},
    data() 
    {
        return {
            logo: "../public/images/logo.png"
        }
    },

template: 
    /*html*/
    `
      <header id="header">
        <img :src="logo" id="headerLogo"/>
        <div id="headerButtons">
            <a href="Home.html" class="homeButton" >HOME</a>
            <a href="Fleet.html" class="homeButton">OUR FLEET</a>
            <a href="Book.html" class="homeButton">BOOK</a>
            <a href="AboutUs.html" class="homeButton">ABOUT US</a>
        </div>
        <button id="contactButton" href="#headerLogo">Contact us</button>
      </header>
    `
})