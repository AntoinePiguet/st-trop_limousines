app.component("presentation-component", {
    props: {},
    data() 
    {
        return {
            images: ["../public/images/mercedes_group.png","../public/images/mercedes_class-S.png"],
            titles: ["Our Fleet", "Since 2016"],
            contents: [["The latest models of the Mercedes range.", "From a V-class mini van for groups to a S-class long.", " They all have leather interiors, phone chargers, bluetooth and bottles of water."],
            ["Saint-Tropez Limousines organizes your business and leisure travels throughout the French Riviera. ","We built our reputation over many years on the loyalty of Saint-Tropez's visitors and business partners.", "Our service will surpass your expectations."],
            ]
        }
    },

template: 
    /*html*/
    `
    <div v-for="(image, index) in images" class="contentBox">
        <img :src="image"/>
        <div class="inBoxContent">
            <div class="titreTxt">{{titles[index]}}</div>
            <div class="button-text">
            <div class="Txt" v-for="(content, index2) in contents[index]" :key="index2">
                {{ contents[index][index2] }}
                <br v-if="index2 < contents[index].length - 1">
            </div>
            <button class="bookbutton">Book</button>
            </div>
        </div>
    </div>
    `
})