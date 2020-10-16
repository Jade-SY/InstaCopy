<template>
  <div class="main-area">
    <section class="visual"></section>
    <div class="icon-box">
      <div class="left">
        <v-btn color="black" depressed icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn color="black" depressed icon>
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <v-btn color="black" depressed icon>
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>
      </div>
      <div class="right">
        <v-btn color="black" depressed icon>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-area {
  width: 100%;
  height: 100%;
}
.visual {
  width: 100%;
  height: 60vh;
  border: 1px solid red;
}
.icon-box {
  display: flex;
  justify-content: space-between;
}
</style>
