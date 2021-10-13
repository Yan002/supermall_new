<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar class="top-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <text1 :a="a" />
      <detail-comment-info
        :comment-info="commentInfo"
        :param-info="paramInfo"
        :a="a"
      />
    </scroll>
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
import text1 from "./childComps/text1";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
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
      a:{a:1}
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
    text1,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;
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
      const qq ={
        canExplain: 1
      }
      // console.log();
      if (data.rate.cRate !== 0) {
        this.a = qq;
        this.commentInfo = data.rate.list[0];

      }
      console.log(this.commentInfo);
      console.log(this.a);
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
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
