<template>
  <article class="card" v-bind:class="vendorClass">
    <header class="cardheader">
      <img src="@/assets/chip-dark.svg" alt="chip" class="chip" />
      <img
        v-if="card.vendor"
        v-bind:src="require('@/assets/vendor-' + card.vendor +  '.svg')"
        v-bind:class="vendorClass"
        alt="light"
      />
    </header>
    <section v-if="card.number" class="number">{{ splitStr }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder Name</span>
        <p maxlength="16">{{card.cardholder}}</p>
      </aside>
      <aside class="valid">
        <span>Valid Until</span>
        <p>{{card.month}}/{{card.year}}</p>
      </aside>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  computed: {
    vendorClass() {
      return this.card.vendor;
    },
    splitStr() {
      let spaceNum = this.card.number;
      let ccNumSpaces = spaceNum.match(/.{1,4}/g);
      return ccNumSpaces.join(" ");
    },
  },
};
</script>

<style lang="scss" >
body {
  display: block;
  margin: 8px;
  margin: auto;
}
header {
  display: block;
}
.card {
  header {
    display: flex;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    justify-content: space-between;
    align-items: flex-start;
  }
  section.number {
    font-size: 1.6rem;
    justify-items: center;
    align-self: center;
    letter-spacing: 0.05rem;
    padding: 0.5rem 0 0;
    margin: auto;
    text-transform: uppercase;
    min-width: 375px;
  }

  section.info aside.holder {
    flex: 1;
    display: block;
  }
  p {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
}

.card section.info,
.card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: flex;
}
.card {
  max-width: 24rem;
  height: 15rem;
  border-radius: 0.6rem;
  background: #eee;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 2fr;
  font-size: 1.3rem;
  grid-auto-rows: 2.8rem;
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
  }
  section aside span {
    display: block;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0 0 0.25rem;
  }
  img {
    background-color: transparent;
  }
}

.blockchain {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #222;
}
.bitcoin {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}
.ninja {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}
.evil {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #222;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>