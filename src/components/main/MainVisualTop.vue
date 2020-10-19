<template>
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
</template>

<script>
export default {
  props: ['userProfile'],
};
</script>

<style lang="scss" scoped>
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
