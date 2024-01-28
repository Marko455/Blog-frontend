<template>
  <div class="container">
    <h1>Prijava</h1>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="username" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Lozinka" required>
      <button type="button" @click="login()">Prijavi se</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Submitted data:');
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.$router.replace({name: 'home'})
      
    }
  }
};
</script>

<style scoped>
.container {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.container h1 {
  color: #4CAF50; /* Green header text color */
}

.container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Green shadow effect */
  transition: box-shadow 0.3s ease; /* Smooth transition for the shadow */
}

.container input:focus {
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.8); /* Bigger shadow on focus */
}

.container button {
  width: 100%;
  padding: 10px;
  background: #4CAF50; /* Green button background color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

