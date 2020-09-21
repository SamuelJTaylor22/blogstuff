<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <form v-if="loggedIn" @submit.prevent="createBlog" class="form-inline">
          <div class="form-group">
            <label for="" class="text-light">New post</label>
            <input v-model='newBlog.title' type="text" name="" id="" class="form-control" placeholder="Title" aria-describedby="helpId">
            <input v-model='newBlog.body' type="text" name="" id="" class="form-control" placeholder="Content" aria-describedby="helpId">
            <button type="submit" class="btn btn-info">Post!</button>
          </div>
        </form>
      </div>
    </div>
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
    },
    loggedIn(){
      return this.$auth.isAuthenticated
    }
  },
  mounted() {
    this.$store.dispatch('getBlogs')
   
  },
  data(){
    return {newBlog: {}}
  },
  methods: {
        createBlog() {
      this.$store.dispatch("createBlog", this.newBlog)
      console.log(this.newBlog)
      for (let key in this.newBlog) {
        this.newBlog[key] = null
      }

    }
  },
  components: {
    Blog
  }
};
</script>
