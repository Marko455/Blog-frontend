<template>
<form @submit.prevent="postNewImage" class="form-inline mb5">
    <div class="form-group">
      <label for="title">Naslov</label>
      <input v-model="title" type="text" class="form-control ml-2" placeholder="Unesi naslov" id="title"/>
    </div>
    <div class="form-group">
      <label for="source">Image URL</label>
      <input v-model="source" type="text" class="form-control ml-2" placeholder="Unesi URL slike" id="source"/>
    </div>
    <div class="form-group">
      <label for="source">Video URL</label>
      <input v-model="video" type="url" class="form-control ml-2" placeholder="Unesi URL videa" id="source"/>
    </div>
    <div class="form-group">
      <label for="source">Opis</label>
      <textarea v-model="description" class="form-control ml-2" placeholder="Opis bloga" id="description"></textarea>
    </div>
    <div class="form-group">
      <label for="createdBy">Autor</label>
      <input v-model="createdBy" type="text" class="form-control ml-2" placeholder="Autor:" id="createdBy"/>
    </div>
    
    <div class="form-group">
      <label for="image">Slika</label>
      <input type="file" @change="onFileChange()" class="form-control-file ml-2" id="image" accept="image/*">
    </div>
    <button type="submit" @click="kreiraj()" class="btn btn-primary ml-2">Pošalji blog</button>
  </form>
</template>
<script>
import axios from 'axios';
export default {
    name:'home',
    data: function(){
      function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }
      return {
        title: "",
        source: "",
        video: "",
        description: "",
        postedAt: formatDate(new Date()),
        createdBy: ""
      }
    },
    methods: {
      async kreiraj() {
      try {
        console.log('Podaci objave:');
        console.log('Title:', this.title);
        console.log('Source:', this.source);
        console.log('Video:', this.video);
        console.log('Description:', this.description);
        console.log('Posted at:', this.postedAt);
        console.log('Created by:', this.createdBy);

        const response = await axios.post('http://localhost:3000/kolekcija', {
          title: this.title,
          source: this.source,
          video: this.video,
          description: this.description,
          postedAt: this.postedAt,
          createdBy: this.createdBy
        });

        console.log('Backend response:', response.data);

        this.$router.replace({ name: 'home' });
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      },
      onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
    }
    }
}
</script>