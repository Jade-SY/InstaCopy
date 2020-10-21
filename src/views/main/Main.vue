<template>
  <div>
    <story-slider></story-slider>
    <main-area></main-area>
    <post v-for="(post, i) in posts" :key="i" :post="post" :index="i"></post>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  components: {
    StorySlider: () => import('@/components/main/StorySlider.vue'),
    MainArea: () => import('@/components/main/MainArea.vue'),
    Post: () => import('@/components/main/Post.vue'),
  },
  computed: {
    ...mapState(['posts']),
  },
};
</script>

<style lang="scss" scoped></style>
