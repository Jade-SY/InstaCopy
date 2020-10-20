<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
* {
  color: #333;
}
#app {
  overflow: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
// 뷰티파이의 기능적인 css를 무시하고 최우선순위로 적용해야하는 css의 경우
// !important와 함께 이곳에 작성하되 주의를 요한다.
.plus-badge > span > span {
  left: calc(100% - 20px) !important;
  top: calc(100% + 20px) !important;
}
</style>
