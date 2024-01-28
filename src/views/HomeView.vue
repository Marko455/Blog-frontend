<template>
  <div class="row">
    <div class="col-8">
      <router-link to="/blog-form" class="btn btn-primary btn-lg btn-block mt-3 rounded-pill text-uppercase font-weight-bold">
        Kreiraj Blog
      </router-link>
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
let cards = []

cards = [
  {id:"1", title:"Laptop", type:"image", media:"https://picsum.photos/id/1/400/400", description:"laptop", time:"few minutes ago", author:"Marko"},
  {id:"2" ,title:"Auto", type:"image", media:"https://picsum.photos/id/2/400/400", description:"auto", time:"hour ago", author:"Ivan"},
  {id:"3", title:"Patak", type:"video", media:"video/mp4", description:"patak", time:"few hours ago", author:"Luka"},
  
]

export default {
  name:'home',
  data: function(){
    return {
      cards: cards,
      store: store,
      newImageDescription: "",
      newImageUrl: ""
    }
  },
  mounted(){
    this.getPosts();
  },
  methods: {
    getPosts(){
      console.log("Dohvat iz baze")
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