<template>
  <section class="directory" v-if="directory">
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "directory-info",
  computed: {
    ...mapState(['directory'])
  }
};
</script>
<style>
.directory {
  width: 100%;
  margin: 50px auto;
  max-width: 450px;
  border-radius: 4px;
  border: 1px solid #00c58e;
  box-sizing: border-box;
  padding: 10px 0px;
  font-family: 'Poppins';
}

.directory__name {
  text-align: center;
}

.directory__info {
  padding-left: 10px;
  line-height: 24px;
  padding-right: 10px;
}

</style>