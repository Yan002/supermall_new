<!--  -->
<template>
  <div class="cart">
      <nav-bar class="home-nav">
        <div slot="center">购物车({{ cartLength }})</div>
      </nav-bar>
      <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar";


export default {
  name:'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
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
  /* position: relative; */
}
.cart {
  height: 100vh;
}
</style>
