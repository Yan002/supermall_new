<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
      //   probeType:3,
      //   pullUpLoad:true
    });
    // this.scroll.on('scroll',(position) => {
    //   // console.log(position);
    // })
    // this.scroll.on('pullingUp', () => {
    //   console.log('上拉加载更多！');
    // })
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style  scoped>
</style>
