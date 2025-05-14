app.component("presentation-component", {
  mounted() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.getAttribute('data-animate');
          if (animation) {
            el.className = el.className.replace('to-animate', '').trim() + ' ' + animation;
            obs.unobserve(el);
          }
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.to-animate[data-animate]').forEach(el => {
      observer.observe(el);
    });
  },
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
    <div class="gradient-border1 to-animate" data-animate="expand-width fade-in duration-700 ease-in">
      <div class="contentBox1" :style="{ backgroundImage: 'url(' + images[1] + ')' }">
          <div class="overlay1"></div>
          <div class="overlay-gradient1"></div>
          <div class="inBoxContent1">
              <div class="titreTxtBox to-animate" data-animate="slide-in-top fade-in delay-300 duration-500 ease">{{titles[1]}}</div>
<div class="button-text">
    <div class="Txt to-animate" data-animate="fade-in delay-500 duration-500 ease" v-for="(content, index2) in contents[1]">{{contents[1][index2]}}</div>
    <button class="contentButton to-animate" data-animate="slide-in-bottom fade-in delay-700 duration-500 ease">{{buttons[1]}}</button>
</div>
          </div>
      </div>
    </div>

    <div class="gradient-border2 to-animate" data-animate="expand-width fade-in duration-700 ease-in">
      <div class="contentBox2" :style="{ backgroundImage: 'url(' + images[0] + ')' }">
          <div class="overlay2"></div>
          <div class="overlay-gradient2"></div>
          <div class="inBoxContent2">
              <div class="titreTxtBox to-animate" data-animate="slide-in-top fade-in delay-300 duration-500 ease">{{titles[0]}}</div>
<div class="button-text">
    <div class="Txt to-animate" data-animate="fade-in delay-500 duration-500 ease" v-for="(content, index2) in contents[0]">{{contents[0][index2]}}</div>
    <button class="contentButton to-animate" data-animate="slide-in-bottom fade-in delay-700 duration-500 ease">{{buttons[0]}}</button>
</div>
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
