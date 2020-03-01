import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data:()=>({
    cards: [
      {
        id:1,
        cardholder: "Max Aakre",
        number: "5555555555555555",
        month: "12",
        year:"21",
        vendor: "evil",
        cvv: "133"
      },
      {
        id:2,
        cardholder: "Svett Jannebanan",
        number: "6666666666666666",
        month: "12",
        year:"21",
        vendor: "ninja",
        cvv: "124"
      },
      {
        id: 3,
        cardholder: "Grisen Grison",
        number: "7777777777777777",
        month: "12",
        year:"21",
        vendor: "bitcoin",
        cvv: "114",
        color:"#ccc"
      },
      {
        id:4,
        cardholder: "Amanda Viberg",
        number: "8888888888888888",
        month: "12",
        year:"21",
        vendor: "blockchain",
        cvv: "541"
      },
    ]
  }),
  mounted() {
    this.$root.$on("new-card", data => {
      this.cards.push(data);
      console.log(data);
    });
  },
  render: h => h(App)
}).$mount('#app')
