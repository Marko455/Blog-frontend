<template>
  <div class="card text-center">
    <div class="card-header">
      {{ info.title }}
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url"/>
    </div>
    <div class="card-footer text-muted">
      {{ info.description }}
    </div>
    <div class="card-footer text-muted">
      {{ info.time }}
      <div>Author: {{ info.author }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["info"],
  name: 'BlogCard',
}
</script>

<style scoped lang="scss">
  .card {
    margin-bottom: 30px;
  }

</style>

