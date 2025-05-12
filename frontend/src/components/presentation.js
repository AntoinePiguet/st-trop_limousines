app.component("presentation-component", {
  props: {},
  data() {
    return {
      images: [
        "../public/images/mercedes_group.png",
        "../public/images/mercedes_class-S.png",
      ],

      titles: ["Our Fleet", "About us"],
      contents: [
        [
          "The latest models of the Mercedes range.",
          "From a V-class mini van for groups to a S-class long.",
          " They all have leather interiors, phone chargers, bluetooth and bottles of water.",
        ],
        [
          "Since 2006, Saint-Tropez Limousines organizes your business and leisure travels throughout the French Riviera. ",
          "We built our reputation over many years on the loyalty of Saint-Tropez’s visitors and business partners.",
          "Our service will surpass your expectations.",
        ],
      ],
      buttons: ["Our fleet", "About us"],
    };
  },

  template:
    /*html*/
    `
    <div class="gradient-border1">
      <div class="contentBox1" :style="{ backgroundImage: 'url(' + images[1] + ')' }">
          <div class="overlay1"></div>
          <div class="overlay-gradient1"></div>
          <div class="inBoxContent1">
              <div class="titreTxtBox">{{titles[1]}}</div>
              <div class="button-text">
                  <div class="Txt" v-for="(content, index2) in contents[1]">{{contents[1][index2]}}</div>
                  <button class="contentButton">{{buttons[1]}}</button>
              </div>
              
          </div>
      </div>
    </div>

    <div class="gradient-border2">
      <div class="contentBox2" :style="{ backgroundImage: 'url(' + images[0] + ')' }">
          <div class="overlay2"></div>
          <div class="overlay-gradient2"></div>
          <div class="inBoxContent2">
              <div class="button-text">
                  <div class="Txt" v-for="(content, index2) in contents[0]">{{contents[0][index2]}}</div>
                  <button class="contentButton">{{buttons[0]}}</button>
              </div>
              <div class="titreTxtBox">{{titles[0]}}</div>
          </div>
      </div>
    </div>
    <div class="home-booking">
      <h2>Booking</h2>
      <div class="book-box">
        <form class="BookForm" method="POST" action="/bookRequest">
            <div class="name-form, form">
                <label for="name" class="BookFormTitle">Name<span>*</span></label>
                <input type="text" name="name" id="BookForm-Name"/>
            </div> 
            <div class="mail-form, form">
                <label for="email" class="BookFormTitle">Email<span>*</span></label>
                <input type="text" name="email" id="BookForm-Email"/>
            </div> 
            <div class="message-form, form">
                <label for="message" class="BookFormTitle">Message<span>*</span></label>
                <textarea type="text" name="message" id="BookForm-Message"/>
            </div> 
            <button class="submitButton">Submit</button>
        </form>
      </div>
    </div>
    `,
});
