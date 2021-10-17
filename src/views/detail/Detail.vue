<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar class="top-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info
        ref="comments"
        :comment-info="commentInfo"
        :param-info="paramInfo"
      />
      <good-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>


<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";

// import {getDetail, getRecommend, Goods,} from "network/detail";

import Scroll from "components/common/scroll/Scroll";
import GoodList from "components/content/goods/GoodsList";
import { debounce } from "common/utils";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
// import DetailBaseInfo from './childComps/DetailBaseInfo.vue'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [0],
      currentIndex: 0,
      isShowBackTop: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    BackTop,
    Scroll,
    GoodList,
  },
  created() {
    this.iid = this.$route.params.iid;
    //请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      //1.获取顶部轮播图的图片

      // console.log(data);
      this.topImages = res.data.result.itemInfo.topImages;
      // this.a = data1.itemInfo
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);
      //创建店铺信息
      this.shop = new Shop(data.shopInfo);

      //保存商品的详情数据
      this.detailInfo = data.detailInfo;
      //获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //取出评论
      // this.commentInfo = data.rate.list[0]

      // console.log();
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res, error) => {
      if (error) return;
      this.recommends = res.data.data.list;
      // console.log(res.data.data.list[0].image);
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("detailimgLoad", () => {
      refresh();
    });
  },
  updated() {},
  //请求推荐数据

  methods: {
    getY() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop + 10);

      // console.log(this.themeTopYs);
    },
    imageLoad() {
      const refresh = debounce(this.$refs.scroll.refresh, 100);
      refresh();
      const aa = debounce(this.getY, 100);
      aa();
    },
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0, 100);
          break;
        case 1:
          this.$refs.scroll.scrollTo(0, -this.themeTopYs[1], 300);
          break;
        case 2:
          this.$refs.scroll.scrollTo(0, -this.themeTopYs[2], 300);
          break;
        case 3:
          this.$refs.scroll.scrollTo(0, -this.themeTopYs[3], 300);
          break;
      }
    },
    contentScroll(position) {
      //判断backTop是否显示
      this.isShowBackTop = position.y < -1000;

      const positionY = -position.y;
      let length = this.themeTopYs.length;
      // console.log();
      for (let i = 0; i < this.themeTopYs.length; i++) {
        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     positionY >= this.themeTopYs[i] &&
        //     positionY < this.themeTopYs[i + 1]) ||
        //     (i === length - 1 && positionY >= this.themeTopYs[i]))
        // ) {
        //   this.currentIndex = i;
        //   // console.log(i);
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          // console.log(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // for(let i in this.themeTopYs){

      // }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      //将商品添加到购物车中
      this.$store.dispatch('addCart',product)
    },
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
.top-nav {
  position: relative;
  z-index: 2;
  background-color: #fff;
}
</style>
