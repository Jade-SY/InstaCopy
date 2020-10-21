<template>
  <div class="text-container">
    <p>
      <strong>{{ userName }}</strong
      >{{ isMore ? text : text.slice(0, 10) + '...' }}
      <span @click="isMore = true" v-show="!isMore">더보기</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PostText',
  props: ['userName', 'text'],
  data() {
    return {
      isMore: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  padding: 0 16px;
}
</style>
