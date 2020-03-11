<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
      this.$store.dispatch('mountLocalStorage');
  },
  watch: {
    cards: {
      handler() {
        this.$store.dispatch('persistance');
      },
      deep: true,
    },
  }, 
  computed:{
    cards(){
      return this.$store.state.cards
    }
  }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    font-family: PT Mono,monospace;
    padding: 1rem;
    height: 100vh;
    max-width: 24rem;
    margin: 0 auto;
    box-sizing: border-box;
}
html {
    display: block;
  
}

.div{
  display: block;
}

</style>
