<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-light">
        <div v-if="!editing">
        <h1>{{blog.title}}</h1>
        <h2>{{blog.creator.name}}</h2>
        <p>{{blog.body}}</p>
        </div>
        <button @click="deleteBlog"  v-if="user.email == blog.creatorEmail" type="button" class="btn btn-danger">Delete</button>
        <button @click="editBlog" v-if="user.email == blog.creatorEmail" type="button" class="btn btn-danger">Edit</button>
        <form v-if="editing" class="form-inline" @submit="finishEdit">
          <div class="form-group">
            <label for=""></label>
            <input v-model="eBlog.title" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            <input v-model="eBlog.body" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            <button type="submit" class="btn btn-primary">Done</button>
          </div>
        </form>

      </div>
    </div>
    <div class="row">
      <div class="col-12"> 
        <form @submit.prevent='addComment' class="form-inline">
          <div class="form-group">
            <label for="">New Comment</label>
            <input v-model="newComment.body" type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
            <button type="submit" class="btn btn-primary">Post!</button>
          </div>
        </form>
      </div>
      <comment v-for="c in comments" :key="c.id" :commentData="c"/>
    </div>
  </div>
</template>

<script>
import Comment from "../components/comment.vue"
export default {
  name: "blogPage",
  data(){return {editing:false, eBlog:{}, newComment:{} }},
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    comments(){
      return this.$store.state.comments
    },
    user(){
      return this.$auth.userInfo
    }
  },
  mounted() {
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getComments", this.$route.params.blogId)
    this.$auth.userInfo
  },
  methods:{
    editBlog(){
      this.editing = true
      this.eBlog = this.blog
    },
    deleteBlog(){
      this.$store.dispatch("deleteBlog", this.blog.id)
    },
    finishEdit(){
      this.$store.dispatch("editBlog", this.eBlog)
      this.editing=false
    },
    addComment(){
      this.$store.dispatch(`addComment`,{body:this.newComment.body, blog: this.blog.id, creatorEmail:this.user.email} )
    }
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
