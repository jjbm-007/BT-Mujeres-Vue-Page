<template>
  <div class="register">
    <Navbar/>
    <div class="container mt-4 p-4 card shadow">
      <h1><i class="fas fa-pencil-alt mr"></i> Registro</h1>
      <div class="row align-items-stretch mt-4">
        <div class="col-4 mb-4">
          <label for="firstName" class="form-label">
            <i class="fas fa-user mrl"></i>Nombre(s)
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Ingresa tu nombre"
            v-model="userName"
          />
        </div>
        <div class="col-4 mb-4">
          <label for="lastName" class="form-label">
            <i class="fas fa-user mrl"></i>Primer Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Ingresa tu primer apellido"
            v-model="firstName"
          />
        </div>
        <div class="col-4 mb-4">
          <label for="lastName2" class="form-label">
            <i class="fas fa-user mrl"></i>Segundo Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName2"
            placeholder="Ingresa tu segundo apellido"
            v-model="secondName"
          />
        </div>

        <div class="col-6 mb-4">
          <label for="password1" class="form-label">
            <i class="fas fa-key mrl"></i>Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="password1"
            placeholder="Ingresa tu contraseña"
            v-model="password"
          />
        </div>
        <div class="col-6 mb-4">
          <label for="password2" class="form-label">
            <i class="fas fa-key mrl"></i>Repita contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="password2"
            placeholder="Repita su contraseña"
            v-model="passwordRepit"
          />
        </div>

        <div class="col-4 mb-4">
          <label for="phone" class="form-label">
            <i class="fas fa-phone-alt mrl"></i>Teléfono
          </label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="Ingresa tu teléfono"
            v-model="phone"
          />
        </div>
        <div class="col-4 mb-4">
          <label for="email" class="form-label">
            <i class="fas fa-envelope mrl"></i>Correo electrónico
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            v-model="email"
          />
        </div>
        <div class="col-4 mb-4">
          <label for="typeUser" class="form-label">
            <i class="fas fa-users mrl"></i>¿Quien eres?
          </label>
          <select id="typeUser" class="form-select" v-model="typeUser">
            <option selected disabled>Seleccione...</option>
            <option value="recluta">Empresa</option>
            <option value="usuario">Recluta</option>
          </select>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
          <router-link to="/" class="btn btn-secondary mr">
            <i class="fas fa-times mr"></i>Cancelar
          </router-link>
          <button class="btn btn-primary" @click="register()">
            <i class="fas fa-pencil-alt mr"></i>Registrar
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Register",
  components: {
    Navbar,Footer
  },
  data:()=>({
    userName:"",
    firstName:"",
    secondName:"",
    password:"",
    passwordRepit:"",
    phone:"",
    email:"",
    typeUser:"",
    usuarios:[]
  }),
  methods:{
    register(){
      //if (this.userName != "" && this.firstName != "" && this.secondName != "" && this.password != "" != this.passwordRepit && this.phone != "" && this.email != "" && this.typeUser == "") {
        if (this.password == this.passwordRepit) {
          let user = {
            userName: this.userName,
            firstName: this.firstName,
            secondName: this.secondName,
            password: this.password,
            phone: this.phone,
            email: this.email,
            typeUser: this.typeUser
          }
          
          let datos = localStorage.getItem("usuarios");
          if (datos != null) {
            this.usuarios = JSON.parse(datos);
            this.usuarios.push(user)
            localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
            console.log(this.usuarios);
            this.$router.push("/login");
          }
          
        }
      //}
      
    }
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
</style>