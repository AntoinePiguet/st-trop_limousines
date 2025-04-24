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
            <a href="#headerLogo" class="homeButton" >Home</a>
            <a href="#headerLogo" class="homeButton">Our fleet</a>
            <a href="#headerLogo" class="homeButton">Book</a>
            <a href="#headerLogo" class="homeButton">About us</a>
        </div>
        <button id="contactButton" href="#headerLogo">Contact us</button>
      </header>
    `
})