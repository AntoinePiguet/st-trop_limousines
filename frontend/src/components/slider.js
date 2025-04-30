app.component("slider-component", {
    data() {
        return {
            timerEnabled: true,
            timerCount: 5, // pour tester plus vite
            imageId: 0,
            images: [
                "../public/images/mercedes_class-S.png",
                "../public/images/mercedes_class-V.png",
                
                "../public/images/mercedes_group.png"
            ],
            logo: "../public/images/logoVariant.png",
            tel: "+33 6 09 51 59 09",
            deco: "../public/images/Deco.png"
        }
    },

    template: 
    /*html*/
    `
    
    <div class="frontTitre">
        <div class=slider>
                <img class="sliderImg" :src="currentImage"/>
                <div class="overlay"></div>
                <img class="deco" :src="deco"/>
        </div>
        <div class="bodySlider">
            <div class="titreDiv">
                <img class="logo" :src="logo"/>
                <div  class="titreTxt">
                    Saint Tropez <br> Limousines
                </div>
                <p class="titreTel">{{tel}}</p>
                <button class="bookbutton">Book</button>
            </div>
            <div class="imageRack">
                <div class="imagePoint" v-for="(image, index) in images" :key="index">
                    <button class="point" :class="{ activePoint: index === imageId }" @click="imageId = index"></button>
                </div>
            </div>
        </div>
    </div>
    `,

    watch: {
        timerEnabled(value) {
            if (value) {
                this.startTimer();
            }
        },

        timerCount: {
            handler(value) {
                if (value > 0 && this.timerEnabled) {
                    this.startTimer();
                } else if (value === 0) {
                    this.changeImage();
                }
            },
            immediate: true
        }
    },

    methods: {
        startTimer() {
            setTimeout(() => {
                this.timerCount--;
            }, 3000);
        },

        changeImage() {
            this.imageId = (this.imageId + 1) % this.images.length;
            this.timerCount = 5; // reset timer
        },

        play() {
            this.timerEnabled = true;
        },

        pause() {
            this.timerEnabled = false;
        },
        clickedImage(index){
            return this.images[index]
        }
    },

    computed: {
        currentImage() {
            return this.images[this.imageId];
        },

    }
});
