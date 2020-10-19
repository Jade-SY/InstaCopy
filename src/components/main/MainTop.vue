<template>
  <div class="main-top">
    <v-btn class="mr-12" depressed icon>
      <div class="story-box">
        <v-avatar size="62"
          ><v-img :src="myProfile.img" alt="myProfile.name" />
        </v-avatar>
        <v-badge
          bottom
          overlap
          offset-x="15"
          offset-y="-10"
          color="blue"
        ></v-badge>
        <p>내 스토리</p>
      </div>
    </v-btn>
    <v-btn class="mr-12" depressed icon v-for="(el, i) in stories" :key="i">
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
  computed: { ...mapState(['stories', 'myProfile']) },
};
</script>

<style lang="scss" scoped>
.main-top {
  white-space: nowrap;
  overflow-x: auto;
  height: 120px;
  padding: 0 30px;
  display: flex;
  align-items: center;
}
.story-box {
  p {
    font-size: 12px;
  }
}
</style>
