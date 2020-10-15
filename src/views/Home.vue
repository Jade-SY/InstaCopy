<template>
  <div class="home">
    <div class="home-content">
      <core-app-bar></core-app-bar>
      <core-view></core-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/View.vue'),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: row;
  justify-content: center;
  background-color: #e7e7e7;
  .home-content {
    min-width: 560px;
    min-height: 100vh;
    background-color: #fff;
  }
}
</style>
