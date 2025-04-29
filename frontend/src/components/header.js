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
            <a href="#headerLogo" class="homeButton" >HOME</a>
            <a href="#headerLogo" class="homeButton">OUR FLEET</a>
            <a href="#headerLogo" class="homeButton">BOOK</a>
            <a href="#headerLogo" class="homeButton">ABOUT US</a>
        </div>
        <button id="contactButton" href="#headerLogo">Contact us</button>
      </header>
    `
})