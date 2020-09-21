<template>
  <div class="col-6 my-2">
    <router-link :to="{name: 'blog-page', params:{blogId:blogData.id}}">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{blogData.title}}</h4>
        <p class="card-text">By: {{blogData.creator.name}}</p>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "blog",
props:{
  blogData: {
    type: Object,
    required: true
  }
}
}
</script>

<style>

</style>