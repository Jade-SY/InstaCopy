<template>
  <div>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="ssss"
    >
      <swiper-slide>slide1</swiper-slide>
      <swiper-slide>slide2</swiper-slide>
      <swiper-slide>slide3</swiper-slide>
    </swiper>
    <h1>HELLO</h1>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style lang="scss" scoped>
.ssss {
  border: 1px solid red;
}
</style>
