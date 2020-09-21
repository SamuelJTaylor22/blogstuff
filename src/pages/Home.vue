<template>
  <div class="home container-fluid">
    <h1 class="text-light">Welcome</h1>
    <div class="row">
      <blog v-for="blog in blogs" :key="blog.id" :blogData="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/blog.vue"
export default {
  name: "home",
  computed: {
    blogs(){
      return this.$store.state.blogs
    }
  },
  mounted() {
    this.$store.dispatch('getBlogs')
   
  },
  methods: {
  },
  components: {
    Blog
  }
};
</script>
