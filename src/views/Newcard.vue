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
      color: "#999"
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
<style lang="scss" scoped >
header{
  display: block;
}
.top {
    h1 , p{
    text-align: center;
    margin: 0;
}

   h1 {
    
    flex: 2;
    line-height: 2rem;
    font-size: 2rem;
    padding: 1.5rem 0;
}
}
.card{
  background-color:#999; 
  
.blank {
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)#999);
    color: #222;
}
}




</style>
