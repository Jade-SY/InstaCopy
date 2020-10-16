<template>
  <div>
    <story-slider></story-slider>
    <main-top></main-top>
    <main-area></main-area>
    <swiper-test></swiper-test>
    <main-comment></main-comment>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
    MainTop: () => import('@/components/main/MainTop.vue'),
    MainArea: () => import('@/components/main/MainArea.vue'),
    SwiperTest: () => import('@/components/main/SwiperTest.vue'),
    MainComment: () => import('@/components/main/MainComment.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
