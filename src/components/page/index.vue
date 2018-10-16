<template>
  <b-row style="margin-top:30px">
    <b-col  cols="8">
      <v-carousel></v-carousel>
      <div class="container">
        <h2>项目上线出现Bug产品经理却开除程序员! 网友: 销售转过来的?</h2>
      </div>
    </b-col>
    <b-col cols="4">
      <b-img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" />
      <b-img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" />
      <b-img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" />
      <b-img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" />
      <b-img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" />
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';

  export default {
    name: "index",
    components: {
      vCarousel
    }
  }
</script>

<style scoped>
  img {
    width: 280px;
    height: 50px;
    margin-bottom: 10px;
  }
</style>
