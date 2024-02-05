<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-md navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <form id="search" class="form-inline my-2 my-lg-0">
          <input
            v-model="store.searchTerm"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
          />
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button @click="prebaciPocetnu()" class="nav-link">Blog</button>
          </li>
          <li class="nav-item">
            <button v-if="!isLoggedIn" @click="prebaciNaPrijavu()" class="nav-link">Prijava</button> 
          </li>
          <li class="nav-item">
            <button @click="prebaciNaRegistraciju()" class="nav-link">Registracija</button>
          </li>
          <li class="nav-item">
            <button v-if="isLoggedIn" @click="logout()" class="nav-link">Odjava</button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
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
    // Check if a user is logged in
    const loggedInUserInfo = getLoggedInUser();
    this.isLoggedIn = loggedInUserInfo !== null;
  },
  methods: {
    logout() {
      // Clear user information on logout
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
}

#nav:hover {
  background-color: #f8f9fa; /* Lighter background on hover */
}

#search {
  display: block;
  text-align: center;
}

.navbar-nav .nav-item .nav-link {
  transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #007bff; /* Change color on hover */
}

.navbar-toggler {
  border-color: #007bff; /* Set the border color of the toggler button */
}

.navbar-toggler-icon {
  background-color: #007bff; /* Set the color of the toggler icon */
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  background-color: #0056b3; /* Darker color on hover or focus */
  border-color: #0056b3;
}

.navbar-nav .nav-item {
  margin-right: 10px;
}

.navbar-nav .nav-item:last-child {
  margin-right: 0;
}
</style>
