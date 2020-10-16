<template>
  <div class="story-slider">
    <div class="wrapper">
      <div class="story-item" v-for="(el, i) in story" :key="i">
        <v-avatar size="70"
          ><v-img :src="el.img" cover alt="profile photo"
        /></v-avatar>
        <p>{{ el.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: { ...mapState(['story']) },
};
</script>

<style lang="scss" scoped>
.story-slider {
  overflow-x: auto;
}
.wrapper {
  width: 1000px;
  white-space: nowrap;
}
.story-item {
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-right: 10px;
  border: 1px solid red;
  text-align: center;
}
</style>
