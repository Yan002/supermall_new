<!--  -->
<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabbar',
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
#tab-bar {
  display: flex;
  background-color: rgb(244,244,244);
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}



</style>
