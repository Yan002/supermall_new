<!--  -->
<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goodsItem="item"
      :key="index"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
  }
</style>
