<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  data() {
    return {
        i:{}
    };
  },
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    cartList() {
        this.i = this.$store.state.cartList
      return this.$store.state.cartList;
    },
  },
};
</script>

<style  scoped>
.cart-list {
  position: relative;
  height: calc(100vh - 49px);
  overflow: hidden;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 0px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
