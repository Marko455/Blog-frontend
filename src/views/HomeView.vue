<template>
  <div class="row main-content-container">
    <div >
      <button v-if="isLoggedIn" @click="prebaciNaBlogForm()" class="btn btn-lg btn-block mt-3 rounded-pill text-uppercase font-weight-bold btn-custom">
        Kreiraj Blog
      </button>
      <BlogCard v-for = "card in filteredCards" :key="card.url" :info="card"/>
    </div>
    <div >
      Sidebar
    </div>
  
  </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
import store from '@/store';
import { getLoggedInUser } from '@/auth.js';
let cards = []

cards = [
  {id:"1", title:"Laptop", type:"image", media:"https://picsum.photos/id/1/400/400", description:"laptop", time:"few minutes ago", author:"Marko"}
]

export default {
  name:'home',
  data: function(){
    return {
      cards: cards,
      store: store,
      newImageDescription: "",
      newImageUrl: "",
      isLoggedIn: false
    }
  },
  created() {
    const loggedInUserInfo = getLoggedInUser();
    this.isLoggedIn = loggedInUserInfo !== null;
  },
  mounted(){
    
  },
  methods: {
    prebaciNaBlogForm() {
    this.$router.push('/blog-form');
  },
    
  },
  computed:{
    filteredCards(){
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.description.includes(termin));
    }
  },
  components:{
    BlogCard,
  },
 
};
</script>
<style>
.btn-custom {
  color: #fff; 
  background-color: #007bff; 
  border-color: #007bff; 
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
  margin-bottom: 40px;
}

.btn-custom:hover {
  color: #000; 
  background-color: #fff; 
  border-color: #fff; 
  text-decoration: none;
  border-bottom: 2px solid #007bff; 
}
.main-content-container {
  background-color: #34404b; 
}
</style>