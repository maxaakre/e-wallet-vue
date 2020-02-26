<template>
  <main id="home">
    <header class="top">
      <Top msg="E-Wallet"/>      
      <p class="card-type">active card</p>
    </header>
    <card v-bind:card="card"/>
  <CardStack v-bind:cards="cards" v-on:changeCard="changeCard"/>
  
  

  <a href="#" class="cta">Add New Card</a>
  </main>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack,
    
  },
  data(){
    return{
      card: this.$root.$data.cards[1]
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
  }
}
</script>
<style lang="scss">
#app{
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
main{
  display: block;
}
.top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-transform: uppercase;
}
.top p {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: .8rem;
    font-weight: 600;
    color: rgba(0,0,0,.4);
    padding: .25rem;
}
.top h1, .top p {
    text-align: center;
    margin: 0;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
a.cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 4rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    border: .125rem solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .5rem;
    margin: 2rem 0;
}
a:hover {
    color: white;
    cursor: pointer;
    background-color: #000;
    
}
</style>
