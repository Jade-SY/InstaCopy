<template>
  <div>
    <v-card class="comments">
      <v-row class="card-title" justify="center" align="center">
        <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        <v-spacer></v-spacer>
        <h3>댓글</h3>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-send-outline</v-icon></v-btn>
      </v-row>
      <v-row align="center" no-gutters class="comment-text-field-wrapper">
        <v-avatar><v-img :src="userImg"></v-img></v-avatar>
        <v-text-field
          solo
          flat
          rounded
          placeholder="댓글 달기..."
          class="add-comment-text-field"
          v-model="myComment"
          @keyup.enter="pushComment"
        >
          <template v-slot:append>
            <v-btn text color="blue" @click="pushComment">게시</v-btn>
          </template>
        </v-text-field>
      </v-row>
      <div class="like-user-list">
        <v-row
          class="list-item"
          v-for="(comment, i) in comments"
          :key="i"
          no-gutters
          align="start"
        >
          <p>
            <strong>{{ comment.name }}</strong> {{ comment.text }}
          </p>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CommentPush',
  props: ['comments', 'userImg', 'index'],
  data() {
    return {
      myComment: '',
    };
  },
  methods: {
    pushComment() {
      this.$store.commit('pushComment', {
        index: this.index,
        name: 'me',
        text: this.myComment,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-title {
  padding: 10px 16px;
}
.card-title {
  border-bottom: 1px solid #80808054;
}
.comment-text-field-wrapper {
  padding: 10px 15px;
  background: #eee;
}
.add-comment-text-field {
  height: 50px;
  margin-left: 10px;
}
.list-item {
  padding: 10px;
  p {
    max-width: 90%;
    margin: 0;
  }
}
</style>
