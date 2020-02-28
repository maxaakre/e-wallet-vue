<template>
    <article class="card" v-bind:class="vendorClass">
        <header class="cardheader">
        <img src="@/assets/chip-dark.svg" alt="chip" class="chip">
        <img 
            v-bind:src="require('@/assets/vendor-' + card.vendor + '.svg')" 
            v-bind:class="vendorClass" alt="light"
        >

        </header>
        <section class="number">{{card.number}}</section>
        <section class="info"> 
            <aside class="holder">
                <span>Cardholder Name</span> 
               <p>{{card.cardholder}}</p></aside>
            <aside class="valid">
                <span> Valid Until</span>
                <p>{{card.month}}/{{card.year}}</p>
            </aside>
            </section>
            
    </article>
</template>

<script>
    export default {
       props:{
           card: Object
       },
       computed:{
           vendorClass(){
               return this.card.vendor
           }
       }
    }
</script>

<style lang="scss" scoped>
body {
    display: block;
    margin: 8px;
}
header{
    display: block;
}
.card header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.card section.number {
    font-size: 1.6rem;
    letter-spacing: .05rem;
    padding: .5rem 0 0;
    text-transform: uppercase;
}
.card section.info aside.holder {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
aside {
    display: block;
}
.card section.info, .card section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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
.card section aside span {
    display: block;
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0 .25rem;
}
.blockchain {
    background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
    color: #222;
}
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
    color: #222;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}
.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
    color: #222;
}
.blank {
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0));
    color: #222;
}

</style>