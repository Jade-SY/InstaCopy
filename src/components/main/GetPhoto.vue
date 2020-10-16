<template>
  <div class="get-photo">
    <v-img :src="url" alt="photos" class="photo" />
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style lang="scss" scoped></style>
