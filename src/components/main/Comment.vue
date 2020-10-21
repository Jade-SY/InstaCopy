<template>
  <div class="comment-container">
    <div class="button-wrapper">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ on, a }">
          <button @click="toggle" v-bind="a" v-on="on">
            댓글 {{ comments.length }}개 모두 보기
          </button>
        </template>
        <comment-push
          :comments="comments"
          :user-img="userImg"
          :index="index"
        ></comment-push>
      </v-dialog>
    </div>
    <div class="comments-wrapper" v-show="isShow">
      <!-- <input-comment :input="profile.img"></input-comment> -->
      <v-row
        v-for="(comment, i) in comments"
        :key="i"
        align="center"
        no-gutters
      >
        <p>
          <strong>{{ comment.name }}</strong
          >{{ comment.text }}
        </p>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comments', 'userImg', 'index'],
  components: {
    CommentPush: () => import('@/components/main/CommentPush.vue'),
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-container {
  padding: 0 16px;
}
.button-wrapper {
  button {
    color: gray;
    outline: none;
  }
}
.comments-wrapper {
  p {
    margin: 0;
    strong {
      margin-right: 10px;
    }
  }
}
</style>
