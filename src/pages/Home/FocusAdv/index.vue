<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FocusAdv",
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.$store.dispatch('adv/getFocusAdvAsync')
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          // 切换的间隔时间为3秒
          delay: 2000,
          // 如果设置为true，当切换到最后一个slide时停止自动切换
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          // 操作包括触碰(touch)，拖动，点击pagination等。
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
})
</script>

<template>

  <div class="center">
    <!--banner轮播-->

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in $store.state.adv.advList" :key="item.id">
        <img :src="item.imgUrl"/>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<style scoped lang="less">
.center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;

  .swiper {
    height: 100%;
    img{
      width: 100%;
    }
  }
}
</style>