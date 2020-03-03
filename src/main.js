import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data:()=>({
    cards: [

    ]
  }),
  mounted() {
    this.$root.$on("new-card", data => {
      this.cards.push(data)
      console.log(data)
      console.log('App mounted!');
    })
    this.$root.$on("delete", id => {
      this.cards = JSON.parse(localStorage.getItem("cards"));
      this.cards = this.cards.filter(card => card.id != id);
      localStorage.setItem("cards", JSON.stringify(this.cards));
    });
    
  },
  created(){
    if (localStorage.getItem('cards')) this.cards = JSON.parse(localStorage.getItem('cards'));
  },
  watch: {
    cards: {
      handler() {
        console.log('Cards changed!');
        localStorage.setItem('cards', JSON.stringify(this.cards));
      },
      deep: true,
    },
  },
  render: h => h(App)
}).$mount('#app')
