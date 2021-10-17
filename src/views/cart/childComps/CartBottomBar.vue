<template>
  <div class="bottom-bar">
    <div class="check-content" @click="checkedAll" >
      <check-button class="check-button" :is-checked='isSelectAll'/>
      <span>全选</span>
    </div>
    <div class="center">
      <span>合计:￥ {{ totalPrice }} </span>
    </div>
    <div class="right">
      <span>去计算({{ shopnum }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartBottomBar",
  data() {
    return {
      
    };
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          let sum = item.price.substring(1, 6) * item.count + preValue;
          let sum1 = parseFloat(sum.toFixed(2));
          return sum1;
        }, 0);
    },
    shopnum() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return item.count + preValue;
        }, 0);
    },
    isSelectAll() {
        if(!(this.$store.state.cartList.length)) {
            return false;
        }
        return !(this.$store.state.cartList.find((item) =>!item.checked))
    }
  },
  methods: {
    checkedAll() {
      let arrs = this.$store.state.cartList;
      let arr = arrs.map((item) => {
        return item.checked;
      });
      let res = arr.some((arrVal) => false === arrVal);
    
      if (res) {
          arrs.forEach(item => {
              item.checked = true
          })
          
      }else {
          arrs.forEach(item => {
              item.checked = false
          })
          
      }
    
    },
    
  },
};
</script>

<style  scoped>
.bottom-bar {
  height: 40px;
  background-color: rgb(235, 235, 235);
  position: relative;
  bottom: 47px;
  line-height: 40px;
}
.check-content {
  display: flex;
  float: left;
  align-items: center;
  margin-left: 15px;
  font-size: 14px;
}
.check-button {
  display: inline-block;
  line-height: 20px;
}
.center {
  float: left;
  margin-left: 15px;
}
.right {
  width: 25%;
  height: 100%;
  background-color: rgb(254, 82, 0);
  float: right;
  margin-right: 15px;
  color: white;
  font-size: 13px;
  text-indent: 1em;
}
.checkedPink {
    color: pink;
    background-color: #333;
}
</style>
