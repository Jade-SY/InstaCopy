<template>
  <div class="main-area">
    <section class="visual" v-for="(content, i) in post" :key="i">
      <main-visual-top></main-visual-top>
      <div class="visual-userProfile">
        <v-avatar size="40">
          <v-img :src="content.userProfile.img"></v-img>
        </v-avatar>
        <p class="user-name">{{ content.userProfile.name }}</p>
        <v-spacer></v-spacer>
        <v-btn class="triple-dots" color="black" depressed icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </div>
      <div class="img-box">
        <v-img :src="content.content.img"></v-img>
      </div>
      <div class="icon-box">
        <div class="left">
          <v-btn
            v-for="(name, i) in icons"
            :key="i"
            color="black"
            depressed
            icon
          >
            <v-icon>{{ name }}</v-icon>
          </v-btn>
        </div>
        <div class="right">
          <v-btn color="black" depressed icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="like-box">
        <p>{{ content.like[0] }}님 외 <span>여러명</span>이 좋아합니다</p>
      </div>
      <p></p>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
    MainVisualTop: () => import('../main/MainVisualTop.vue'),
  },
  data() {
    return {
      icons: ['mdi-heart-outline', 'mdi-comment-outline', 'mdi-send-outline'],
    };
  },
  computed: { ...mapState(['post']) },
};
</script>

<style lang="scss" scoped>
.main-area {
  width: 100%;
  height: 100%;
}

.icon-box {
  display: flex;
  justify-content: space-between;
}
.visual-userProfile {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  p {
    font-weight: bold;
    margin-left: 5px;
  }
}
</style>
