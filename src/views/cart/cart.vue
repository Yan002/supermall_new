<!--  -->
<template>
  <div class="cart">
      <nav-bar class="home-nav">
        <div slot="center">购物车({{ cartLength }})</div>
      </nav-bar>
      <cart-list/>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList"


export default {
  name:'Cart',
  components: {
    NavBar,
    CartList,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style  scoped>
/* .cart {
  height: 100vh;
} */
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
