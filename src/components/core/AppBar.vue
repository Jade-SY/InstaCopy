<template>
  <div>
    <v-app-bar color="white" elevation="1">
      <router-link to="/">
        <v-btn color="black" depressed icon>
          <v-icon>mdi-camera-outline</v-icon>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/" class="logo">
        <v-img
          src="https://fontmeme.com/images/instagram-new-logo.png"
          max-width="120"
          alt="logo"
        />
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn color="black" depressed icon>
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-application .white {
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important ;
}
.logo {
  width: 150px;
  padding-top: 6px;
}
a {
  text-decoration: none;
}
</style>
