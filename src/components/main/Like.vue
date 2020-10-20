<template>
  <div class="like">
    <div class="text-center">
      <v-dialog fullscreen v-model="dialog">
        <template v-slot:activator="{ on, a }">
          <p>
            <strong>{{ like[0] }}</strong
            >님
            <span style="font-weight:bold;" v-bind="a" v-on="on">여러 명</span
            >이 좋아합니다
          </p>
        </template>

        <v-card>
          <v-row no-gutters align="center">
            <v-card-actions>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-spacer></v-spacer>
            <p style="font-size:20px; margin:0;">
              좋아요
            </p>
            <v-spacer></v-spacer>
          </v-row>
          <v-divider></v-divider>
          <div class="content" v-for="(el, i) in like" :key="i">
            <p>
              {{ el }}
            </p>
            <v-btn depressed color="primary">팔로우</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
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
.content {
  display: flex;
}
</style>
