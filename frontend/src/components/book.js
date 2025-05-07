app.component("book-component", {
  data() {
    return {};
  },

  template:
    /*html*/
    `
    <h1>Booking</h1>
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
      <div class="book-content">
          <h3>Don’t hesitate to contact us for questions & collaborations.</h3>
          <p>
          We offer high-end limousine service all year long. We collaborate with touristic partners in the region to plan and personalize your holidays. Take advantage of our services, whether for your airport transfers, shuttles to the beach, to the village or to organize a day trip at the Côte d'Azur. We also take care of any kind of event such as business trips or weddings according to your needs. Already present on the Cannes Film Festival, the Monaco Grand Prix or the Longines Athina Onassis Horse Show event we will be your direct point of contact for setting up your projects.</p>
      </div>
    </div>
    `,

  methods: {
    onSubmit() {
      if (this.name === "" || this.email === "" || this.message === "") {
        alert(
          "your booking order is incomplete please fill out every field from the form"
        );
        return;
      }
      let bookOrder = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.$emit("booking-submitted", bookOrder);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
});
