<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-light">
        <h1>{{blog.title}}</h1>
        <h2>{{blog.creator.name}}</h2>
        <p>{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPage",
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
