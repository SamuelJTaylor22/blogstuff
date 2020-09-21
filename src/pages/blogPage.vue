<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-light">
        <h1>{{blog.title}}</h1>
        <h2>{{blog.creator.name}}</h2>
        <p>{{blog.body}}</p>
      </div>
      <div class="row">
      <comment v-for="c in comments" :key="c.id" :commentData="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../components/comment.vue"
export default {
  name: "blogPage",
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    comments(){
      return this.$store.state.comments
    }
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getComments", this.$route.params.blogId)
  },
  components:{
    Comment
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
