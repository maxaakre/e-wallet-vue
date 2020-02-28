<template>
  <main id="new-card">
    <header class="top">
      <Top msg="Add New Card"/> 
      <p>New Card</p>
    </header>
    <Card v-bind:card="card" v-bind:class="card"/>
    <CardForm v-bind:card="card" @select="changeBgVendor"/>
  </main>
</template>
<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'
import Card from '@/components/Card.vue'
export default {
name: 'Newcard',
components:{
  Top,
  CardForm,
  Card,
  },
 data: () => ({
    card: {
      id: Date.now(),
      chip: require("../assets/chip-light.svg"),
      number: "XXXX XXXX XXXX XXXX",
      cardholder: "",
      month: "YY",
      year: "MM",
      vendor: "bitcoin",
      color: "#ccc"
    }
  }),
 methods: {
    changeBgVendor(vendor) {
      if (vendor === "ninja-bank") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "evil-corp") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "blockchain-inc") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
      if (vendor === "bitcoin-inc") {
        this.card.vendor = require('@/assets/vendor-' + vendor );
      }
    }
  }


}
</script>
<style lang="scss" >
header{
  display: block;
}
.top h1, .top p {
    text-align: center;
    margin: 0;
}

.top h1 {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    line-height: 2rem;
    font-size: 2rem;
    padding: 1.5rem 0;
}
.blank {
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0;
}
.card{
    max-width: 24rem;
    height: 14rem;
    border-radius: .6rem;
    background: #eee;
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
    display: grid;
    gap: .5rem 0;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2.8rem;
    transition: 0.3s;
    &:hover{
        transform: scale(1.03)
    }
 

}

</style>
