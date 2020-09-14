import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    addCard(state, card) {
      state.cards.push(card);
    },
    delete(state, id) {
      const index = state.cards.findIndex((card) => card.id == id);
      this.state.cards.splice(index, 1);
    },
    localStorage(state) {
      if (localStorage.getItem("cards")) {
        state.cards = JSON.parse(localStorage.getItem("cards"));
      }
    },
  },
  actions: {
    persistance(context) {
      localStorage.setItem("cards", JSON.stringify(context.state.cards));
    },
    addCardList(constext, card) {
      constext.commit("addCard", card);
    },
    removeThisCard(context, id) {
      context.commit("delete", id);
    },
    mountLocalStorage(context) {
      context.commit("localStorage");
    },
  },
});
