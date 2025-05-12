const app = Vue.createApp({
    data() {
      return {
        bg:["../public/images/BG-logo.png"]
      };
    },
    template:
      /*html*/
`
    <div class="templateContainer" :style="{ backgroundImage: 'url(' + bg[0] + ')' }">
        <header-component></header-component>
        <slider-component></slider-component>
        <presentation-component></presentation-component>
        <footer-component></footer-component>
    </div>
`})