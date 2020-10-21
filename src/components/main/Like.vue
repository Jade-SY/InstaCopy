<template>
  <div class="like">
    <v-dialog fullscreen v-model="dialog">
      <template v-slot:activator="{ on, a }">
        <p>
          <strong>{{ like[0] }}</strong
          >님
          <span style="font-weight:bold;" v-bind="a" v-on="on">여러 명</span>이
          좋아합니다
        </p>
      </template>

      <v-card>
        <v-row class="card-title" justify="center" align="center">
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          <v-spacer></v-spacer>
          <h3>좋아요</h3>
          <v-spacer></v-spacer>
          <v-btn icon disabled style="opacity:0;"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-row>
        <div class="like-user-list">
          <v-row
            class="list-item"
            v-for="(user, i) in like"
            :key="i"
            no-gutters
            align="center"
          >
            <p>{{ user }}</p>
            <v-spacer></v-spacer>
            <v-btn depressed color="blue" dark>팔로우</v-btn>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Like',
  props: ['like'],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.like {
  padding: 10px;
}
.content {
  display: flex;
}

.card-title {
  height: 60px;
  padding: 0 20px;
  border: 1px solid #80808054;
  h3 {
    display: inline-block;
  }
}
.list-item {
  height: 50px;
  padding: 30px 20px;
  p {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
}
</style>
