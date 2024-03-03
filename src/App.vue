<template>
  <div>
    <nav class="navbar">
      <div class="navbar__left">
        <button @click="prebaciPocetnu()" class="nav-button">Blog</button>
      </div>
        <form class="search-form">
          <input v-model="store.searchTerm" type="search" placeholder="Pretraga" class="search-input"/>
        </form>
      
      <div class="navbar__right">
        <button v-if="!isLoggedIn" @click="prebaciNaPrijavu()" class="nav-button">Prijava</button> 
        <button @click="prebaciNaRegistraciju()" class="nav-button">Registracija</button>
        <button @click="logout()" class="nav-button">Odjava</button>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { getLoggedInUser } from '@/auth.js';
import { clearLoggedInUser } from "@/auth.js";
export default {
  name: "app",
  data() {
    return {
      store: store,
      isLoggedIn: false
    };
  },
  created() {
    const loggedInUserInfo = getLoggedInUser();
    this.isLoggedIn = loggedInUserInfo !== null;
  },
  methods: {
    logout() {
      clearLoggedInUser();
      console.log("Logout");
      this.$router.push({ name: "Login" });
    },
    prebaciPocetnu(){
      this.$router.push('/');
    },
    prebaciNaPrijavu() {
      this.$router.push('/login');
    },
    prebaciNaRegistraciju(){
      this.$router.push('/signup');
    }
  },
  mounted(){
    
  }
};
</script>

<style scoped>

body {
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar__left {
  display: flex;
  align-items: center;
}

.navbar__right {
  display: flex;
  align-items: center;
}

.search-form {
  margin-right: 20px;
}

.search-input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.nav-button {
  padding: 8px 12px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #0056b3;
}

.search-form {
  display: flex;
  justify-content: center;
}
</style>