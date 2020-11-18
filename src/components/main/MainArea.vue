<template>
  <div class="main-area">
    <section class="visual" v-for="(content, i) in post" :key="i">
      <main-visual-top
        :img="content.userProfile.img"
        :name="content.userProfile.name"
      ></main-visual-top>
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
        <p>
          {{ content.like[0] }}님
          <router-link to="../main/Like.vue"><span>여러명</span></router-link
          >이 좋아합니다
        </p>
        <div class="comment-box" v-for="(el, i) in content" :key="i">
          <h3>{{ el.name }}</h3>
          <h3>{{ el.text }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MainArea',
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
.like-box {
  padding: 10px;
  font-size: 14px;
  span {
    font-weight: bold;
  }
}
</style>
