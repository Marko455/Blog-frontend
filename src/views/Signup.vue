<template>
  <div class="container">
    <h1>Registracija</h1>
    <form>
      <div class="form-group">
        <label for="email">Email adresa:</label>
        <input type="text" v-model="username" class = "form-control" id="email" aria-describedat="emailHelp" required>
      </div>
      <div class="form-group">
        <label for="password1">Lozinka:</label>
        <input type="password" v-model="password" id="password1" required>
      </div>
      <div class="form-group">
        <label for="password2">Lozinka:</label>
        <input type="password" v-model="passwordRepeat" class ="form-control" id="password2" required>
      </div>
      <button type="button" @click="signup">Registriraj se</button>
    </form>
  </div>
</template>
  
<script>
  export default {
    name: 'Signup',
    data() {
      return {
        username: '',
        password: '',
        passwordRepeat: ''
      };
    },
    /*
    methods: {
      signup(){
        app.auth().createUserWithEmailAndPassword(this.username, this.password).then(
          function(){
            console.log('Uspijesna registracija');
          }
        ).catch(function(error){
          console.error("Doslo je do greske", error)
        });
        console.log('Nastavak');
      }
    }*/
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
  
  