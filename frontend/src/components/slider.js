app.component("slider-component", {
    data() {
        return {
            timerEnabled: true,
            timerCount: 5, // pour tester plus vite
            imageId: 0,
            images: [
                "../public/images/mercedes_class-S.png",
                "../public/images/mercedes_class-V.png",
                "../public/images/mercedes_class-E.png",
                "../public/images/mercedes_group.png"
            ]
        }
    },

    template: 
    /*html*/
    `
    
    <div>
        <img class="sliderImg" :src="currentImage"/>
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
            }, 1000);
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
        }
    },

    computed: {
        currentImage() {
            return this.images[this.imageId];
        }
    }
});
