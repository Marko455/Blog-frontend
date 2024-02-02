<template>
  <div>
    <div class="card text-center" v-for="item in blogData" :key="item._id">
      <div class="card-header">
        {{ item.title }}
      </div>
      <div class="card-body p-0">
        <img v-if="item.type === 'image'" class="card-img-top" :src="item.source" alt="Card Image"/>
      </div>
      <div class="card-footer text-muted">
        {{ item.postedAt }}
      </div>
      <div class="card-footer text-muted">
        Created by: {{ item.createdBy }}
      </div>
      <button v-if="isLoggedIn" type="submit" @click="uredi(item._id)" class="btn btn-primary ml-2">Uredi</button>
      <button v-if="isLoggedIn" type="submit" @click="izbrisi(item._id)" class="btn btn-primary ml-2">Izbrisi</button>
    </div> 
  </div>
</template>

<script>
import { getLoggedInUser } from '@/auth.js';
import axios from 'axios';
export default {
  data() {
    return {
      blogData: [],
      isLoggedIn: false
    };
  },
  created() {
    // Check if a user is logged in
    const loggedInUserInfo = getLoggedInUser();
    this.isLoggedIn = loggedInUserInfo !== null;
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/kolekcija')  // Update the URL to match your actual endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Update the component's data with the received collection data
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
    }
  },
  mounted() {
    // Call the fetchData function when the component is mounted
    this.fetchData();
  },
};

</script>

<style scoped lang="scss">
  .card {
    margin-bottom: 30px;
  }
</style>
