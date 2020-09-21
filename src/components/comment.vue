<template>
  <div class="col-12">
  <h4 class="text-light ">{{commentData.body}}</h4>
  <h5>{{commentData.creator.name}}</h5>
  </div>
</template>

<script>
export default {
  name: "comment",
  props:{
    commentData:{
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>