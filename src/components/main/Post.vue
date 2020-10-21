<template>
  <div class="post-component">
    <v-row class="post-head" align="center" no-gutters>
      <v-avatar class="head-avatar" size="40">
        <v-img :src="post.userProfile.img"></v-img>
      </v-avatar>
      <h3>{{ post.userProfile.name }}</h3>
      <v-spacer></v-spacer>
      <v-btn color="black" depressed icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-row>
    <div class="img-container">
      <v-img
        :src="post.content.img"
        max-height="597"
        min-height="479"
        contain
      ></v-img>
    </div>
    <post-icon></post-icon>
    <like :like="post.like"></like>
    <post-text
      :userName="post.userProfile.name"
      :text="post.content.text"
    ></post-text>
    <comment
      :comments="post.comments"
      :user-img="post.userProfile.img"
      :index="index"
    ></comment>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post', 'index'],
  components: {
    PostIcon: () => import('@/components/main/PostIcon.vue'),
    Like: () => import('@/components/main/Like.vue'),
    PostText: () => import('@/components/main/PostText.vue'),
    Comment: () => import('@/components/main/Comment.vue'),
  },
  data() {
    return {
      dialog: false,
      icons: ['mdi-heart-outline', 'mdi-comment-outline', 'mdi-send-outline'],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-component {
  padding-bottom: 60px;
}
.post-head {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #80808054;
  .head-avatar {
    margin-left: 10px;
  }
  h3 {
    font-size: 1rem;
    display: inline-block;
    margin: 0 20px;
  }
}
</style>
