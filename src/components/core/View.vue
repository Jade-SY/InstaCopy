<template>
  <div>
    <transition name="component-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CoreView',
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
