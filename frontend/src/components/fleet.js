app.component("fleet-component", {
  data() {
    return {
      contents: [
        "The fleet of Saint-Tropez Limousines is made up of the latest models of the Mercedes range.",
        "You can choose the vehicle that suits you best according to your needs from a V-class mini van for groups to a S-class long for special luxury comfort.",
        " Our vehicles are equipped with leather interiors, phone chargers, bluetooth to broadcast your playlists and bottles of water.",
        "On request, we can personalize your arrival according to your desires.",
      ],
      images: [
        "../public/images/3Dmodel_class_E.png",
        "../public/images/3Dmodel_class_S.png",
        "../public/images/3Dmodel_class_V.png",
      ],
      models: ["Mercedes E Class", "Mercedes S Class", "Mercedes V Class"],
      luggages: [3, 4, 5],
      passengers: [3, 4, 5],
    };
  },

  template:
    /*html*/
    `
    <h1>Our Fleet</h1>
    <p class="textContent" v-for="(content, index2) in contents" :key="index2">
        {{content}}
    </p>
    <div class="FleetBox" v-for="(model, index) in models" :key="index">
        <h1>{{model}}</h1>
        <div class="FleetContent">
            <img :src="images[index]" class="carImage"/>
            <div class="luggage-passenger">
                <div class="passenger">
                    <img src="../public/images/icons/passenger.png" class="FleetIcon"/>
                    <p>{{passengers[index]}} passengers</p>
                </div>
                <div class="luggage">
                    <img src="../public/images/icons/luggage.png" class="FleetIcon"/>
                    <p>{{luggages[index]}} luggages</p>
                </div>
            </div>
            <a href="Book.html"><button class="bookButton">Book</button></a>
        </div>
    </div>
    `,
});
