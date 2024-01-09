<template>
  <div class="card text-center">
    <div class="card-header">
      {{ info.title }}
    </div>
    <div class="card-body p-0">
      <div v-if="info.type === 'image'">
        <img class="card-img-top" :src="info.media" alt="Card Image"/>
      </div>
      <div v-else-if="info.type === 'video'">
        <video width="100%" height="auto" controls>
          <source :src="info.media" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
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
