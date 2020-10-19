<template>
  <div>
    <story-slider></story-slider>
    <main-area></main-area>
    <main-comment></main-comment>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
    MainArea: () => import('@/components/main/MainArea.vue'),
    MainComment: () => import('@/components/main/MainComment.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
