<template>
  <div>
    <Navbar/>
    <div class="container w-75 bg-primary mt-3 mb-5 rounded shadow">
      <div class="row align-items-stretch">
        <div
          class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
        ></div>
        <div
          class="col bg-white p-4 rounded-end"
          style="padding-right: 45px !important; padding-left: 45px !important"
        >
          <div class="text-center">
            <img
              src="@/assets/logo.png"
              class="text-center"
              width="100"
              alt="UTEZ"
            />
          </div>
          <h3 class="fw-bold text-center">BT-Mujeres</h3>
          <p class="text-center">
            ¡Bienvenida! Inicia sesión para continuar...
          </p>
          <form action="#">
            <div class="mb-4">
              <label for="email" class="form-label"
                ><i class="fas fa-envelope mr"></i>Correo electrónico</label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Ingresa tu correo institucional"
                v-model="email"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label"
                ><i class="fas fa-key mr"></i>Contraseña</label
              >
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                v-model="password"
              />
            </div>
            <div class="d-grid">
              <button class="btn btn-primary" @click="login()">
                <i class="fas fa-sign-in-alt mr"></i>
                Iniciar sesión
              </button>
            </div>
            <div class="mt-3 text-center">
              <span
                >¿No tienes una cuenta?
                <router-link to="/register">Registrate</router-link></span
              ><br />
              <span
                ><router-link to="/recuperar"
                  >Recuperar contraseña</router-link
                ></span
              >
            </div>
          </form>
        </div>
        <div class="alert alert-warning alert-float" role="alert" v-if="alert">
          <i class="fas fa-exclamation-triangle mr"></i>Usuario/Contraseña
          incorrectos
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "Index",
  title: "Iniciar Sesión",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    usuarios: [],
    alert: false,
    email: "",
    password: "",
    logger: false
  }),
  methods: {
    login() {
      this.logger = false;
      this.usuarios.forEach(element => {
        if(element.email == this.email){
          this.logger = true

          if(element.typeUser == "admin"){
            localStorage.setItem("logger", "admin");

          }else if(element.typeUser == "recluta"){
            localStorage.setItem("logger", "recluta");

          }else if(element.typeUser == "usuario"){
            localStorage.setItem("logger", "usuario");

          }else{
            this.logger = false;
          }
          
        }
      });

      if (this.logger) {
        this.$router.push("/");
      }else{
        this.alert = true;
      }
      
    },
    hide_alert() {
      window.setInterval(() => {
        this.alert = false;
      }, 3000);
    },
  },
  mounted() {
    let usuarios = localStorage.getItem("usuarios");
    if (usuarios != null) {
      this.usuarios = JSON.parse(usuarios);
    }

    if (alert) {
      this.hide_alert();
    }
  },
};
</script>

<style scoped >
body {
  background: #ffe259;
  background: linear-gradient(to right, rgb(235, 235, 235), #b9b9b9);
}

.bg {
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/061/047/non_2x/business-working-woman-and-laptop-on-table-vector.jpg");
  background-position: center center;
}
</style>
