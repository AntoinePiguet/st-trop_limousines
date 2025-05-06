app.component("fleet-component", {
    data() {
        return {
            contents: [
                "The fleet of Saint-Tropez Limousines is made up of the latest models of the Mercedes range.",
                "You can choose the vehicle that suits you best according to your needs from a V-class mini van for groups to a S-class long for special luxury comfort.",
                " Our vehicles are equipped with leather interiors, phone chargers, bluetooth to broadcast your playlists and bottles of water.",
                "On request, we can personalize your arrival according to your desires."],
            images: [
            "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/214004/804/iris.png?q=COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtxmFtsd2HdcUfpMqXGEu5EJ0lV0fOB2q81bApUdpI5uLoYQC3aCRkzNHUum7jgeFhKVPXh%25vqeIkyLR5cRYaxCaWrH1zMdn8w7VxoiZK%25oM4FvywTg9L6O6PDaSmSeWH0Itsd8kDcUfarRXGEsaYJ0lUoxOB2ZDSbAp5iwI5uC4zQC3zgTkzN7UNm7sDgubYwR9hDvQCt9gj6hVNpLpIZIGwC7Ux0wPfeqYOgzT&BKGND=9&IMGT=P27&POV=BE340%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920&quot",
            "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/223033/803_053/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGeOtsd0YtcUfp8cXGEubYJ0l36xOB2NbcbApRAlI5ux4YQC31gFkzNwtnm7jA6ohKV5Kh%25vqCBkyLRzAHYax75qrH1KMrn8wvQcoiZUbXM4FGIMTg90gE6PDBSqSeWzKUtsd7vNcUfKMjXGE4yXJ0lg0VOB2PQqbApedlI5uscJQC3UX3kzNGJum7j0hohKVB%25Q%25vqAycyLR5i6YaxCtqrH1qJin8wRO3oiZx6YM4Fs4MTg9vQn6PDKuoiQI03M4nQ1NTgodNj6PS6uVSetSdqtsc%25KRcUXnvxXrL%25ejFzAv1LOfv2wUGE10UPbPV7VoztXn5Mzy8YBFN%25cf&BKGND=9&IMGT=P27&POV=BE340%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=1920&quot",
            "https://media.oneweb.mercedes-benz.com/images/dynamic/europe/FR/447701/805/iris.png?q=COSY-EU-100-1713d0VXq79dqtyO67PobzIr3eWsrrCsdRRzwQZUOpJGE1UHFm9tui9QC%25T4DkzyVDWm7oBBdhKMD3f%25vTWfEyL6AWlYa8Ds2rHiWrpn84gUuoig2F3M4Pa3NTgeCCj6PsztVSeiSQqts4i9RcUg4JxXGPgs1J0e01wOBsqRZbAURaFI5kWF9QCt3HDkzc68Wm7XWVdhKuO3f%25v21sEyLp1BlYau1a2rH3w5pn8NppuoijEA3M4IR7NTgmWpj6PhJWVSeuegqts349RcUNWjxXGjU71J08EiwOBiqGZbAw3EFI5ZN19QCFjmDkz9jpWm7DVFdhKW6Kf%25vdSsEyLfrBlYaEnv2rHfrHpn8EnZuoilfi3M42E5NTg6lNj6PS8PVSe7h5qtsK%25qRcUvnJxXGLZW1J0a1dwOBHxRZbA8luFI5iX19QC5QmDkzCksWm7zRidhK7Z4f%25vlBgEyL2ABlYap5v2rHFQopn8KNRuoivEi3Mk5bHlqGeAN5fzQ2AG4FNgiaSa202hGnMms%25GI7QPqEboZ&BKGND=9&IMGT=P27&POV=BE340%2CPZM&cp=UYiGBM9Qfw0VG3jbnu1OMA&uni=m&width=2500&quot"
            ],
            models: ["Mercedes E Class", "Mercedes S Class", "Mercedes V Class"],
            luggages:[3,4,5],
            passengers:[3,4,5],
    }
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
                        <img :src="images[index]" class="carImage"/>
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
