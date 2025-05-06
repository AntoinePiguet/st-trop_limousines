app.component("book-component", {
    data() {
        return {
    }
  },

  template:
    /*html*/
    `
    <h1>Booking</h1>
    <form type="Submit" class="BookBox">
        <input type="textArea" v-model="Name" placeholder="Name" class="BookForm-Name"/>
        <input type="textArea" v-model="Email" placeholder="Email" class="BookForm-Email"/>
        <input type="textArea" v-model="Message" placeholder="Message" class="BookForm-Message"/>
    </form>
    `,
});
