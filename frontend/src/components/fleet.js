app.component("fleet-component", {
    data() {
        return {
            contents: [
                "The fleet of Saint-Tropez Limousines is made up of the latest models of the Mercedes range.",
                "You can choose the vehicle that suits you best according to your needs from a V-class mini van for groups to a S-class long for special luxury comfort.",
                " Our vehicles are equipped with leather interiors, phone chargers, bluetooth to broadcast your playlists and bottles of water.",
                "On request, we can personalize your arrival according to your desires."],
            povValue: 0,
            images: [
                "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/214004/804/iris.png?q=COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtxmFtsd2HdcUfpMqXGEu5EJ0lV0fOB2q81bApUdpI5uLoYQC3aCRkzNHUum7jgeFhKVPXh%25vqeIkyLR5cRYaxCaWrH1zMdn8w7VxoiZK%25oM4FvywTg9L6O6PDaSmSeWH0Itsd8kDcUfarRXGEsaYJ0lUoxOB2ZDSbAp5iwI5uC4zQC3zgTkzN7UNm7sDgubYwR9hDvQCt9gj6hVNpLpIZIGwC7Ux0wPfeqYOgzT&BKGND=9&IMGT=P27&POV=BE000%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920",
                "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/223033/803_053/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGeOtsd0YtcUfp8cXGEubYJ0l36xOB2NbcbApRAlI5ux4YQC31gFkzNwtnm7jA6ohKV5Kh%25vqCBkyLRzAHYax75qrH1KMrn8wvQcoiZUbXM4FGIMTg90gE6PDBSqSeWzKUtsd7vNcUfKMjXGE4yXJ0lg0VOB2PQqbApedlI5uscJQC3UX3kzNGJum7j0hohKVB%25Q%25vqAycyLR5i6YaxCtqrH1qJin8wRO3oiZx6YM4Fs4MTg9vQn6PDKuoiQI03M4nQ1NTgodNj6PS6uVSetSdqtsc%25KRcUXnvxXrL%25ejFzAv1LOfv2wUGE10UPbPV7VoztXn5Mzy8YBFN%25cf&BKGND=9&IMGT=P27&POV=BE120%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920",
                "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/447701/805/iris.png?q=COSY-EU-100-1713d0VXq79dqtyO67PobzIr3eWsrrCsdRRzwQZUOpJGE1UHFm9tui9QC%25T4DkzyVDWm7oBBdhKMD3f%25vTWfEyL6AWlYa8Ds2rHiWrpn84gUuoig2F3M4Pa3NTgeCCj6PsztVSeiSQqts4i9RcUg4JxXGPgs1J0e01wOBsqRZbAURaFI5kWF9QCt3HDkzc68Wm7XWVdhKuO3f%25v21sEyLp1BlYau1a2rH3w5pn8NppuoijEA3M4IR7NTgmWpj6PhJWVSeuegqts349RcUNWjxXGjU71J08EiwOBiqGZbAw3EFI5ZN19QCFjmDkz9jpWm7DVFdhKW6Kf%25vdSsEyLfrBlYaEnv2rHfrHpn8EnZuoilfi3Mk5bHlqGeAN5fzQ2AG4FNgiaSa202hGnMms%25GI7QPqEboZ&BKGND=9&IMGT=P27&POV=BE240%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=2500"
              ],
            models: ["Mercedes E Class", "Mercedes S Class", "Mercedes V Class"],
            luggages:[3,4,5],
            passengers:[3,4,5],
            povValue: 0,
        frameId: null
    }
  },
  methods: {

    getImageUrl(index) {
      const povRounded = Math.round(this.povValue / 10) * 10;
      const povStr = String(povRounded).padStart(3, '0');

      if (index === 1) {
        return `https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/223033/803_053/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGeOtsd0YtcUfp8cXGEubYJ0l36xOB2NbcbApRAlI5ux4YQC31gFkzNwtnm7jA6ohKV5Kh%25vqCBkyLRzAHYax75qrH1KMrn8wvQcoiZUbXM4FGIMTg90gE6PDBSqSeWzKUtsd7vNcUfKMjXGE4yXJ0lg0VOB2PQqbApedlI5uscJQC3UX3kzNGJum7j0hohKVB%25Q%25vqAycyLR5i6YaxCtqrH1qJin8wRO3oiZx6YM4Fs4MTg9vQn6PDKuoiQI03M4nQ1NTgodNj6PS6uVSetSdqtsc%25KRcUXnvxXrL%25ejFzAv1LOfv2wUGE10UPbPV7VoztXn5Mzy8YBFN%25cf&BKGND=9&IMGT=P27&POV=BE${povStr}%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920`;
      } else if (index === 2) {
        return `https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/447813/806/iris.webp?q=COSY-EU-100-1713d0VXq7xoqtyO67PobzIr3eWsrrCsdRRzwQZUOpJGE1UHFm93M4%25F6NTgckCj6PXdjVSeI88qtsQj9RcUkVRxXGmiV1J0hf0wOB5OuZbACqaFI5zRI9QC7ZNDkzKBZWm7vAWdhKLBKf%25vassEyLHUrlYa7Yt2rHK7opn8vKZuoiLfx3M4aZ9NTgHNBj6P88zVSecxVqtsrdCRcUnyzxXGoxl1J0MbiwOBd6RZbADbHFI5Wji9QCdjeDkzfjzWm7EVUdhKld4f%25v2ffEyLcwjlYaXNA2rHbZfpn8IZZuoiQWu3M4kd4NTgmfCj6PhEvVSe%25lgqts3sPRcUNWJxXGjU71J08kUwOBil4ZbA4UgFI5ZSP9QCFjmDkz9jpWm7DVFdhKWd3f%25vdfDEyLfEKlYaEWG2rHfrHpn8EnZuoilfi3M4Tn1NTg6HSj6PS8vVSetigqtsc4fRcUvnRxXGLoO1J0aF0wOBHmHZbA8ZEFI5iw19QC4bNDkzCkhWm7zmUdhK7tqf%25vK5sEyLv9KlYap5e2rHuC5pn8KNEuoQAOaEVUPB3AdCIjw8iZ348L6LlGlmUrokehUbzIgVfOnw&BKGND=9&IMGT=W27&POV=BE${povStr},PZM&cp=G1_ByMTvJGWF9_Hf8G5r8A&uni=m`;
      } else if (index === 0) {
        return `https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/214004/804/iris.png?q=COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtxmFtsd2HdcUfpMqXGEu5EJ0lV0fOB2q81bApUdpI5uLoYQC3aCRkzNHUum7jgeFhKVPXh%25vqeIkyLR5cRYaxCaWrH1zMdn8w7VxoiZK%25oM4FvywTg9L6O6PDaSmSeWH0Itsd8kDcUfarRXGEsaYJ0lUoxOB2ZDSbAp5iwI5uC4zQC3zgTkzN7UNm7sDgubYwR9hDvQCt9gj6hVNpLpIZIGwC7Ux0wPfeqYOgzT&BKGND=9&IMGT=P27&POV=BE${povStr}%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920`;
      }
      return "";
    },


    preloadImages() {
      const totalSteps = 36; 
      for (let i = 0; i < totalSteps; i++) {
        const pov = i * 50;
        [0, 1, 2].forEach(idx => {
          const img = new Image();
          img.src = this.getImageUrl(idx, pov);
        });
      }
    },

      startAnimation() {
        let last = performance.now();
        const speed = 360 / 4500;
        const loop = now => {
          const delta = now - last;
          this.povValue = (this.povValue + delta * speed) % 360;
          last = now;
          this.frameId = requestAnimationFrame(loop);
        };
        this.frameId = requestAnimationFrame(loop);
      },

      stopAnimation() {
        cancelAnimationFrame(this.frameId);
      }
    },
    mounted() {
      this.preloadImages();
      this.startAnimation();
    },
    beforeUnmount() {
      this.stopAnimation();
    },
  
  template:
    /*html*/
    `
    <h1>Our Fleet</h1>
    <p class="textContent" v-for="(content, index2) in contents" :key="index2">
        {{content}}
    </p>
    <div class="fleetFlex">
        <div class="FleetBox" v-for="(model, index) in models" :key="index">
            <div class="bg">
                <h2>{{model}}</h2>
                <div class="FleetContent">
                    <div class="imageContainer">
                        <div class="outer-ellipse"></div>
                        <img :src="getImageUrl(index)" class="carImage"/>
                    </div>
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
        </div>
    </div>
    `,
});
