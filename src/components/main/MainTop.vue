<template>
  <div class="main-top">
    <v-btn class="mr-12" depressed icon v-for="(el, i) in story" :key="i">
      <div class="story-box">
        <v-avatar size="62"><v-img :src="el.img" alt=""/></v-avatar>
        <p>{{ el.name }}</p>
      </div>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  computed: { ...mapState(['story']) },
};
</script>

<style lang="scss" scoped>
.main-top {
  white-space: nowrap;
  overflow: auto;
  height: 120px;
  padding: 40px 30px;
  display: flex;
  align-items: center;
}
.story-box {
  p {
    font-size: 10px;
  }
}
</style>
