<template>
  <main id="new-card">
    <header class="top">
      <Top msg="Add New Card"/> 
      <p>New Card</p>
    </header>
    <article class="card blank">
      <card />
    </article>

  </main>
</template>
<script>
import Card from '@/components/Card.vue'
import Top from '@/components/Top.vue'
export default {
name: 'Newcard',
components:{
  Top,
  Card
}  



}
</script>
<style lang="scss">
header{
  display: block;
}
.top h1, .top p {
    text-align: center;
    margin: 0;
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

</style>
