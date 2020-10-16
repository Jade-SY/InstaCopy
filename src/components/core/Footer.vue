<template>
  <v-footer absolute height="60" padless>
    <v-row justify="center" align="center">
      <v-col cols="2" v-for="(el, i) in tabs" :key="i">
        <ronter-link :to="el.to">
          <v-btn color="black" depressed icon>
            <v-icon>{{ el.icon }}</v-icon>
          </v-btn>
        </ronter-link>
      </v-col>
      <v-col cols="2">
        <v-btn depressed icon>
          <v-avatar size="28">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></v-avatar>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreFooter',
  data() {
    return {
      tabs: [
        { to: '/', icon: 'mdi-home' },
        { to: '/', icon: 'mdi-magnify' },
        { to: '/', icon: 'mdi-plus-box-outline' },
        { to: '/', icon: 'mdi-heart-outline' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-box {
  width: 98%;
  display: flex;
  justify-content: space-around;
}
</style>
