<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 30px;
  line-height:30px;
  background-color: white;
}
.tab-control-item {
  flex: 1;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
  padding: 1px;
}
</style>
