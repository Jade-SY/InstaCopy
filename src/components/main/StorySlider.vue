<template>
  <div class="story-slider">
    <div class="wrapper">
      <div class="story-item">
        <img :src="myProfile.img" alt="myProfile.name" />
        <v-badge
          class="plus-badge"
          bordered
          bottom
          color="blue"
          icon="mdi-plus"
          overlap
        ></v-badge>
        <p>내 스토리</p>
      </div>
      <div class="story-item" v-for="(story, i) in stories" :key="i">
        <img :src="story.img" alt="story.name" />
        <p>{{ story.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: { ...mapState(['stories', 'myProfile']) },
};
</script>

<style lang="scss" scoped>
.story-slider {
  overflow-x: auto;
  background-color: #fafafa;
  border-bottom: 1px solid #8080807a;
}
.wrapper {
  width: 1000px;
  white-space: nowrap;
  padding: 10px;
}

.story-item {
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  img {
    vertical-align: middle;
    width: 80px;
    height: 80px;
    margin-left: 10px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    text-align: center;
  }
}
</style>
