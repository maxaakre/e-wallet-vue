import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){return{
    cards: [
      {
        id:1,
        cardholder: "Max Aakre",
        number: "5555 5555 5555 5555",
        valid: "12/21",
        vendor: "bitcoin",
        cvv: "133"
      },
      {
        id:2,
        cardholder: "Svett Jannebanan",
        number: "6666 6666 6666 6666",
        valid: "12/21",
        vendor: "ninja",
        cvv: "124"
      },
      {
        id:3,
        cardholder: "Grisen Grison",
        number: "7777 7777 7777 7777",
        valid: "12/21",
        vendor: "evil",
        cvv: "114"
      },
      {
        id:4,
        cardholder: "Amanda Viberg",
        number: "8888 8888 8888 8888",
        valid: "12/21",
        vendor: "blockchain",
        cvv: "541"
      },
    ]
  }},
  render: h => h(App)
}).$mount('#app')
