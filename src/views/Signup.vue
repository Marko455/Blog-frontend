<template>
  <div class="container">
    <h1>Registracija</h1>
    <form>
      <div class="form-group">
        <label for="email">Ime:</label>
        <input type="string" v-model="ime" class = "form-control" id="email" aria-describedat="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="email">Prezime:</label>
        <input type="string" v-model="prezime" class = "form-control" id="email" aria-describedat="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="email">Email adresa:</label>
        <input type="email" v-model="email" class = "form-control" id="email" aria-describedat="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="password">Lozinka:</label>
        <input type="password" v-model="password" id="password" required>
      </div>
      <button type="button" @click="signup()">Registriraj se</button>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  name: 'Signup',
  data() {
    return {
      ime: '',
      prezime: '',
      email: '',
      password: '',
    };
  },
    
  methods: {
    async signup() {
    try {
      console.log('Podaci registracije:');
      console.log('Ime: ', this.ime);
      console.log('Prezime: ', this.prezime);
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      const response = await axios.post('https://blog-backend-3ut3.onrender.com/signup', {
        ime: this.ime,
        prezime: this.prezime,
        email: this.email,
        password: this.password
      });

      console.log('Backend response:', response.data);

      this.$router.replace({ name: 'home' });
      } catch (error) {
        console.error('Error during login:', error.message);
      }
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
    width: 300px;
    margin: 0 auto;
  }
  
  .container h1 {
    color: #4CAF50; 
  }
  
  .form-group {
    margin: 10px 0;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); 
    transition: box-shadow 0.3s ease; 
  }
  
  .form-group input:focus {
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.8); 
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
  