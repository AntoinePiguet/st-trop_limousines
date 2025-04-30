app.component("presentation-component", {
  props: {},
  data() {
    return {
      images: [
        "../public/images/mercedes_group.png",
        "../public/images/mercedes_class-S.png",
      ],
      titles: ["Our Fleet", "Since 2016"],
      contents: [
        [
          "The latest models of the Mercedes range.",
          "From a V-class mini van for groups to a S-class long.",
          " They all have leather interiors, phone chargers, bluetooth and bottles of water.",
        ],
        [
          "Saint-Tropez Limousines organizes your business and leisure travels throughout the French Riviera. ",
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
    <div class="contentBox1">
        <img :src="images[0]"/>
        <div class="inBoxContent1">
            <div class="titreTxt">{{titles[0]}}</div>
            <div v-for="(content, index2) in contents[0]">{{contents[0][index2]}}</div>
            <button class="contentButton">{{buttons[0]}}</button>
        </div>
    </div>

    <div class="contentBox2">
      <img :src="images[1]"/>
    <div class="inBoxContent2">
      <div v-for="(content, index2) in contents[1]">{{contents[1][index2]}}</div>
        <div class="titreTxt">{{titles[1]}}</div>
        <button class="contentButton">{{buttons[1]}}</button>
      </div>
    </div>
    `,
});
