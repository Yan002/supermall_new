<!--  -->
<template>
  <div class="wrapper" ref="wrapper">   
      <ul class="content">
        <li>事实上1</li>
        <li>事实上2</li>
        <li>事实上3</li>
        <li>事实上4</li>
        <li>事实上5</li>
        <li>事实上6</li>
        <li>事实上7</li>
        <li>事实上8</li>
        <li>事实上9</li>
        <li>事实上10</li>
        <li>事实上11</li>
        <li>事实上12</li>
        <li>事实上13</li>
        <li>事实上14</li>
        <li>事实上15</li>
        <li>事实上16</li>
        <li>事实上17</li>
        <li>事实上18</li>
        <li>事实上19</li>
        <li>事实上20</li>
        <li>事实上21</li>
        <li>事实上22</li>
        <li>事实上23</li>
        <li>事实上24</li>
        <li>事实上25</li>
        <li>事实上26</li>
        <li>事实上27</li>
        <li>事实上28</li>
        <li>事实上29</li>
        <li>事实上30</li>
        <li>事实上31</li>
        <li>事实上32</li>
        <li>事实上33</li>
        <li>事实上34</li>
        <li>事实上35</li>
        <li>事实上36</li>
        <li>事实上37</li>
        <li>事实上38</li>
        <li>事实上39</li>
        <li>事实上40</li>
        <li>事实上41</li>
        <li>事实上42</li>
        <li>事实上43</li>
        <li>事实上44</li>
        <li>事实上45</li>
        <li>事实上46</li>
        <li>事实上47</li>
        <li>事实上48</li>
        <li>事实上49</li>
        <li>事实上50</li>
        <li>事实上51</li>
        <li>事实上52</li>
        <li>事实上53</li>
        <li>事实上54</li>
        <li>事实上55</li>
        <li>事实上56</li>
        <li>事实上57</li>
        <li>事实上58</li>
        <li>事实上59</li>
        <li>事实上60</li>
        <li>事实上61</li>
        <li>事实上62</li>
        <li>事实上63</li>
        <li>事实上64</li>
        <li>事实上65</li>
        <li>事实上66</li>
        <li>事实上67</li>
        <li>事实上68</li>
        <li>事实上69</li>
        <li>事实上70</li>
        <li>事实上71</li>
        <li>事实上72</li>
        <li>事实上73</li>
        <li>事实上74</li>
        <li>事实上75</li>
        <li>事实上76</li>
        <li>事实上77</li>
        <li>事实上78</li>
        <li>事实上79</li>
        <li>事实上80</li>
        <li>事实上81</li>
        <li>事实上82</li>
        <li>事实上83</li>
        <li>事实上84</li>
        <li>事实上85</li>
        <li>事实上86</li>
        <li>事实上87</li>
        <li>事实上88</li>
        <li>事实上89</li>
        <li>事实上90</li>
        <li>事实上91</li>
        <li>事实上92</li>
        <li>事实上93</li>
        <li>事实上94</li>
        <li>事实上95</li>
        <li>事实上96</li>
        <li>事实上97</li>
        <li>事实上98</li>
        <li>事实上99</li>
        <li>事实上100</li>
      </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多！");
    });
  },
  methods: {},
};
</script>

<style  scoped>
.wrapper {
  height: 200px;
  background-color: #333;
  overflow: hidden;
}

</style>
