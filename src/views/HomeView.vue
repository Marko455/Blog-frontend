
<template>
  <div class="row">
    <div class="col-8">
      <form @submit.prevent="postNewImage" class="form-inline mb5">
        <div class="form-group">
          <label for="imageURL">Image URL</label>
          <input v-model="newImageURL" type="text" class="form-control ml-2" placeholder="Enter the image URL" id="imageUrl"/>
        </div>
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input v-model="newImageDescription" type="text" class="form-control ml-2" placeholder="Enter image description" id="imageDescription"/>
        </div>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>
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
  {'url':"https://picsum.photos/id/1/400/400", description:"laptop", time:"few minutes ago"},
  {'url':"https://picsum.photos/id/2/400/400", description:"auto", time:"hour ago"},
  {'url':"https://picsum.photos/id/3/400/400", description:"patak", time:"few hours ago"},
  
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
    postNewImage(){
      const imageUrl = this.newImageUrl;
      const imageDescription = this.newImageDescription;
    }
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