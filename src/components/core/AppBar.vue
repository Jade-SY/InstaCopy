<template>
  <div>
    <v-app-bar color="white" elevation="0">
      <h1 class="logo">
        <img
          src="https://fontmeme.com/images/instagram-new-logo.png"
          width="100%"
          alt="logo"
        />
      </h1>
      <v-spacer></v-spacer>
      <div class="icon-box">
        <v-btn color="black" depressed icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn color="black" depressed icon>
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>
        <v-btn color="black" depressed icon>
          <v-icon>mdi-compass-outline</v-icon>
        </v-btn>
        <v-btn color="black" depressed icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn depressed icon>
          <v-avatar size="28">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></v-avatar>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-application .white {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important ;
}
.logo {
  width: 150px;
  padding-top: 6px;
}
</style>
