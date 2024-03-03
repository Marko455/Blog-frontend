<template>
  <div class="edit-blog-container">
    <h1>Uredi Blog</h1>
    <form @submit.prevent="updateBlog" class="edit-blog-form">
      <div class="form-group">
        <label for="title">Naslov:</label>
        <input type="text" id="title" class="form-control" v-model="editedBlog.title">
      </div>
      <div class="form-group">
        <label for="source">Slika:</label>
        <input type="text" id="source" class="form-control" v-model="editedBlog.source">
      </div>
      <div class="form-group">
        <label for="video">Video:</label>
        <input type="url" id="video" class="form-control" v-model="editedBlog.video">
      </div>
      <div class="form-group">
        <label for="source">Opis:</label>
        <textarea class="form-control ml-2" v-model="editedBlog.description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Pošalji</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      editedBlog: {
        title: '',
        source: '',
        video: ''
      }
    };
  },
  methods: {
    async fetchBlogData(id) {
      try {
        const response = await axios.get(`http://localhost:3000/kolekcija/${id}`);
        this.editedBlog = response.data;
      } catch (error) { 
        console.error('Error fetching blog data:', error.message);
      }
    },
    async updateBlog() {
      try {
       const { id } = this.$route.params;
        const response = await axios.patch(`http://localhost:3000/kolekcija/${id}`, this.editedBlog);

        if (response.status === 200) {
          console.log('Objava uspijesno azuriran:', response.data.message);
        } else {
          console.error('Pogreska azuriranja objave:', response.data.error);
        }
      } catch (error) {
        console.error('Error updating blog:', error.message);
      }
    }
  },
  created() {
    const blogId = this.$route.params.id;
    this.fetchBlogData(blogId);
  }
};
</script>


<style scoped>
.edit-blog-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.edit-blog-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

</style>
