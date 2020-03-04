<template>
  <main id="new-card">
    <header class="top">
      <Top msg="Add New Card"/> 
      <p>New Card</p>
    </header>
    <Card v-bind:card="card" v-bind:class="card"/>
    <CardForm v-bind:card="card"/>
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
      number: "XXXXXXXXXXXXXXXX",
      cardholder: "",
      month: "YY",
      year: "MM",
      vendor: null,
      color: "#999"
    }
  })


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






</style>
