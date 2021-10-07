<!--  -->
<template>
  <div class="recommend">
    <div v-for="(item,id) in recommends" :key='id'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend>div {
  text-align: center;
  font-size:12px;
  flex: 1;
}
.recommend>div img {
  width: 70px;
  height: 70px;
  margin-bottom:6px;

}
</style>
