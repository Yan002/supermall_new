<template>
  <div class="goodslistitem" @click="itemClick">
    <img :src="showImage" @load="imageLoad" />
    <div class="goodstext">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ parseInt(goodsItem.price) }} </span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      if (!(this.$route.path.indexOf("/home"))) {
        // console.log(!(this.$route.path.indexOf("/home")));
        // console.log('这是home');
        this.$bus.$emit("homeimgLoad");
      } else if (!(this.$route.path.indexOf("/detail"))) {
        // console.log('这是detail详情页');
        this.$bus.$emit("detailimgLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
};
</script>

<style  scoped>
.goodslistitem {
  position: relative;
  /* padding-bottom: 40px; */
  width: 48%;
  float: left;
  text-align: center;
  margin-left: 1%;
}

.goodslistitem img {
  width: 98%;
  border-radius: 7px;
}

.goodstext p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
}
.price {
  color: var(--color-tint);
  font-size: 16px;
}
.price img {
  width: 100%;
}
.collect {
  position: relative;
  left: 20px;
}
.goodstext .collect::before {
  content: "";
  position: absolute;
  clear: both;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
