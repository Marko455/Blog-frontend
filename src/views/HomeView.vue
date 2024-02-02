<template>
  <div class="row">
    <div class="col-8">
      <button v-if="isLoggedIn" @click="prebaciNaBlogForm()" class="btn btn-primary btn-lg btn-block mt-3 rounded-pill text-uppercase font-weight-bold">
        Kreiraj Blog
      </button>
      <BlogCard v-for = "card in filteredCards" :key="card.url" :info="card"/>
    </div>
    <div class="col-4">
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
    // Check if a user is logged in
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