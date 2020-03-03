<template>
  <main id="home">
    <header class="top">
      <Top msg="E-Wallet"/>      
      <p class="card-type">active card</p>
    </header>
    <card v-if="card" v-bind:card="card" />
    <button class="cta"  @click="show = true " >Delete Card</button>
    <DeleteCard v-bind:show="show"
    :card="card"
    @close="show = false"/>
  <CardStack v-bind:card="card" 
  v-on:changeCard="changeCard" />
  <router-link to="/new-card" class="cta">Add New Card</router-link>
  </main>
</template>

<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'
import DeleteCard from '@/components/DeleteCard.vue'
export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack,
    DeleteCard,
    
  },
  data(){
    return{
      card: this.$root.$data.cards[0],
   
      show: false,
    }
  },
  
  methods:{
    changeCard(card){
      this.card = card
    }
  },
  
  computed:{
   
    cards(){
      return this.$root.$data.cards
    }
  },
}
</script>
<style lang="scss">
#app{
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    box-sizing: border-box;
}
main{
  display: block;
}
.top {
   
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  p {
     display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: .8rem;
    font-weight: 600;
    color: rgba(0,0,0,.4);
    padding: .25rem;
}
  h1, p {
    text-align: center;
    margin: 0;
}
}
 .cta, button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
    width: 100%;
    &:hover {
      color: white;
      cursor: pointer;
      background-color: #000;
    
}
}
a{
.remove-item {
    display: block;
    cursor: pointer;
    &:hover {
      color: black;
    }
}
}
</style>