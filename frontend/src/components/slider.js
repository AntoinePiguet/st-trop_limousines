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
<div class="frontTitre":style="{ backgroundImage: 'url(' + currentImage + ')' }">
    <div class="slider" >
        <div class="overlay"></div>
    </div>

    <div class="bodySlider">
        <div class="titreDiv">
            <img class="logo slide-in-top delay-150 duration-500 ease-in" :src="logo" />
<div class="titreTxt slide-in-bottom fade-in delay-300 duration-500 ease-in">Saint-Tropez <br> Limousines</div>
<p class="titreTel slide-in-right fade-in delay-450 duration-500 ease-in">{{ tel }}</p>
<button class="bookbutton slide-in-top fade-in delay-600 duration-500 ease-out ">Book</button>
        </div>

        <div class="imageRack">
            <div class="imagePoint" v-for="(image, index) in images" :key="index">
                <button
                    class="point"
                    :class="{ activePoint: index === imageId }"
                    @click="imageId = index"
                ></button>
            </div>
        </div>
    </div>
</div>
<img class="deco" :src="deco" />
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
