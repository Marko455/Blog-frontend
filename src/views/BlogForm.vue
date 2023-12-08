<template>
<form @submit.prevent="postNewImage" class="form-inline mb5">
    <div class="form-group">
      <label for="imageTitle">Naslov</label>
      <input v-model="newImageTitle" type="text" class="form-control ml-2" placeholder="Unesi naslov" id="imageTitle"/>
    </div>
    <div class="form-group">
      <label for="imageURL">Image URL</label>
      <input v-model="newImageURL" type="text" class="form-control ml-2" placeholder="Enter the image URL" id="imageUrl"/>
    </div>
    <div class="form-group">
      <label for="imageDescription">Opis</label>
      <input v-model="newImageDescription" type="text" class="form-control ml-2" placeholder="Opis:" id="imageDescription"/>
    </div>
    <div class="form-group">
      <label for="file">File</label>
      <input  type="file" class="form-control ml-2" placeholder="Unesi file" id="imageUrl"/>
    </div>
    <div class="form-group">
      <label for="videoFile">Uploadaj video:</label>
      <input type="file" id="videoFile" accept="video/*" @change="handleVideoChange" />
      <!-- Display Video Preview -->
      <video v-if="videoPreview" width="320" height="240" controls>
      <source :src="videoPreview" type="video/mp4">
      Your browser does not support the video tag.
      </video>
    </div>
    <button type="submit" @click="izrada()" class="btn btn-primary ml-2">Pošalji blog</button>
  </form>
</template>
<script>
export default {
    name:'home',
    data: function(){
      return {
        newImageTitle: "",
        newImageDescription: "",
        newImageUrl: ""
      }
    },
    methods: {
    postNewImage(){
        const imageTitle = this.newImageTitle
        const imageUrl = this.newImageUrl;
        const imageDescription = this.newImageDescription;
      },
    izrada(){
      alert("Post izrađen")
    },
    handleVideoChange(event) {
      const file = event.target.files[0];

      if (file && file.type.startsWith('video/')) {
        this.videoFile = file;
        this.videoPreview = URL.createObjectURL(file);
      } else {
        this.videoFile = null;
        this.videoPreview = null;
        alert('Izaberile validan video file.');
      }
    },
    }
}
</script>