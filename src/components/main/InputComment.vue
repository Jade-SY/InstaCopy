<template>
  <v-row class="input-comment" justify="center" align="center">
    <v-avatar size="40" class="mr-4"><v-img :src="input"></v-img></v-avatar>
    <form action="">
      <input
        v-model="newComment"
        @keyup.enter="addComment"
        type="text"
        class="comment-box"
        placeholder="댓글 달기..."
      />
      <button class="submit" @click="addComment">게시</button>
    </form>
  </v-row>
</template>

<script>
export default {
  name: 'InputComment',
  props: ['input'],
  data() {
    return {
      newComment: '',
    };
  },
  methods: {
    addComment() {
      this.$store.comments.setItem(this.newComment, this.newComment);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-comment {
  height: 80px;
  background: #eee;
}
.comment-box {
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-radius: 40px;
  background: #fff;
  border: none;
  outline: none;
}
form {
  position: relative;
  width: 80%;
  .submit {
    position: absolute;
    right: 20px;
    top: 13px;
    color: #2196f3;
  }
}
</style>
