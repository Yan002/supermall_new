<!--  -->
<template>
  <div id = 'detail'>
      <detail-nav-bar/>
      <detail-swiper :top-images='topImages' />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"


import { getDetail,Goods} from "network/detail"

export default {
  name:'Detail',
  data () {
    return {
        iid:null,
        topImages:[],
        goods:[],
        a:[]
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data1 = res.data.result
          //1.获取顶部轮播图的图片
          
       console.log(data1.itemInfo.topImages);
      this.topImages = res.data.result.itemInfo.topImages
      this.a = data1.itemInfo
          //获取商品信息
      this.goods = new Goods(data1.itemInfo,data1.columns,data1.shopInfo.services)
      })
  },
  activated () {
      
  },
  
}
</script>

<style  scoped>

</style>
