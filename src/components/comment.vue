<template>
  <div class="col-12">
    <h4 class="text-light ">{{commentData.body}}</h4>
    <h5>{{commentData.creator.name}}</h5>
    <button @click="deleteC"  v-if="user.email == commentData.creatorEmail" type="button" class="btn btn-danger">Delete</button>
    <button @click="editC" v-if="user.email == commentData.creatorEmail" type="button" class="btn btn-danger">Edit</button>
    <form v-if="editing" @submit.prevent="finishEdit" class="form-inline">
      <div class="form-group">
        <label for=""></label>
        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Help text</small>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "comment",
  data(){return{editing:false, eComment:{}} },
  props:{
    commentData:{
      type: Object,
      required: true
    }
  },
  computed: {
    user(){
      return this.$auth.userInfo
    }
  },
  methods: {
    editC(){
      this.editing= true
      this.eComment=commentData
    }
  }
}
</script>

<style>

</style>