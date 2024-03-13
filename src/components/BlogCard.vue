<template>
  <div>
    <div class="card text-center" v-for="item in blogData" :key="item._id">
      <div class="card-header">
        {{ item.title }}
      </div>
      <div class="card-body p-0">
        <img class="card-img-top " :src="item.source" alt="Card Image" @click="toggleFullscreen"/>
      </div>
      <div v-if="item.video" class="card-body">
        <plyr-vue @register="registerFunction">
          <div>
            <iframe width="100%" height="315" :src="item.video" frameborder="0" allowfullscreen allowtransparency allow="autoplay"></iframe>
          </div>
        </plyr-vue>
      </div>
      <div>
        {{ item.description }}
      </div>
      <div class="card-footer text-muted">
        {{ item.postedAt }}
      </div>
      <div class="card-footer text-muted">
        Created by: {{ item.createdBy }}
      </div>
      <button v-if="isLoggedIn" type="submit" @click="uredi(item._id)" class="btn btn-primary ml-2">Uredi</button>
      <button v-if="isLoggedIn" type="submit" @click="izbrisi(item._id)" class="btn btn-danger ml-2">Izbrisi</button>
      <table cellspacing="0">
        <tr>
        <td>
          <button v-if="isLoggedIn" type="submit" @click="like(item._id)" class="btn btn-primary ml-2">Sviđa mi se </button>{{ item.likes }}
        </td>
        <td>
          <button v-if="isLoggedIn" type="submit" @click="dislike(item._id)" class="btn btn-primary ml-2">Ne sviđa mi se </button>{{ item.dislikes }}
        </td>
        </tr>
      </table>
      <div  class="card-footer text-area form-control">
        <form>
          <div>
            <textarea v-model="comment" class="form-control" rows="3" placeholder="Napišite komentar..."></textarea>
          </div>
          <button v-if="isLoggedIn" type="submit" @click="komentiraj(item._id, comment)" class="btn btn-success btn-light-blue">Komentiraj</button>
        </form>
      </div>
    </div> 
  </div>
</template>

<script>
import { getLoggedInUser } from '@/auth.js';
import axios from 'axios';
import { usePlyrVue, PlyrVue } from "plyr-vue";
import { PlyrVueOptions, PlyrVueInstance } from "plyr-vue";
import "plyr-vue/dist/plyr-vue.css";
export default {
  data() {
    return {
      blogData: [],
      isLoggedIn: false,
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
      isExpanded: false,
      comment: ''
    };
  },
  components: {
    PlyrVue
  },
  setup() {
    const options = {};
    const [registerFunction, playerInstance] = usePlyrVue(options);
    return {
      registerFunction,
      playerInstance
    };
    usePlyrVue();
  },
  created() {
    const loggedInUserInfo = getLoggedInUser();
    this.isLoggedIn = loggedInUserInfo !== null;
    
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/kolekcija')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.blogData = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error.message);
        });
    },
    async izbrisi(objavaId) {
      try {
        const response = await axios.delete(`http://localhost:3000/kolekcija/${objavaId}`);
        console.log('Backend response:', response.data);

      } catch (error) {
        console.error('Error during blog deletion:', error.message);
      }
    },
    async like(postId) {
      try {
        if(this.isLiked = true){
          console.log('Vec lajkano');
          alert('Već ste lajkali ovu objavu');
          return;
        }
        const response = await fetch(`http://localhost:3000/like/${postId}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to like post');
      }
      this.likes++;
      this.isLiked = true;
      const data = await response.text();
      console.log(data); 
      } catch (error) {
        console.error('Error liking post:', error.message);
      }
    },
    async dislike(postId) {
      try {
        if(this.isDisliked = true){
          console.log('Vec dislajkano');
          alert('Već ste dislajkali ovu objavu');
          return;
        }
        const response = await fetch(`http://localhost:3000/dislike/${postId}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to like post');
      }
      this.dislikes++;
      this.isDisliked = true;
      const data = await response.text();
      console.log(data); 
      } catch (error) {
        console.error('Error liking post:', error.message);
      }
    },
    uredi(id){
      this.$router.push({ name: 'BlogEdit', params: { id: id } });
    },
    
    async komentiraj(postId, commentText) {
      const url = `http://localhost:3000/komentiraj/${postId}`;

      try {
       const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: commentText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred while adding the comment.');
      }

      const data = await response.json();
      console.log('Success:', data.message);

      } catch (error) {
        console.error('Error:', error.message);

      }
    },

    async fetchComments() {
      try {
        const response = await axios.get(`http://localhost:3000/kolekcija`);
        this.comment = response.data.comment;
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      }
    },

    toggleFullscreen(event) {
      event.target.classList.toggle('fullscreen-image');
    }
  },
  mounted() {
    this.fetchData();
  }
};

</script>


<style scoped lang="scss">
  .card {
    margin: 0 auto;
    width: 30%;
    height: 30%;
    margin-top: 20px;
    margin-bottom: 60px;
  }
  .expandable-image {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  }

  .fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999; 
  cursor: pointer;
}
.card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 0 15px 5px rgba(102, 185, 213, 0.764);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-buttons {
  margin-top: 10px;
}

textarea.form-control {
  margin-top: 1rem;
  border: 1px solid #b9bdc2;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  resize: vertical;
}

button.btn-success {
  margin-top: 0.5rem;
  color: #fff;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-light-blue {
    background-color: #5988cd !important;
    border-color: #5988cd !important; 
}
.card-footer {
  padding: 1rem 1.25rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

textarea.form-control {
  margin-top: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.75rem; 
  padding: 0.375rem 0.75rem;
  resize: vertical; 
}
</style>
