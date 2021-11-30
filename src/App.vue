<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    let admin = {
      userName: "Jean Jairo",
      firstName: "Benitez",
      secondName: "Meza",
      password: "12345678",
      phone: "7775132885",
      email: "admin@gmail.com",
      typeUser: "admin",
    };

    let reclutaDefault = {
      userName: "Alan Jesus",
      firstName: "Carranza",
      secondName: "Vazquez",
      password: "12345678",
      phone: "7772362243",
      email: "alan@gmail.com",
      typeUser: "recluta",
    };

    let usuarioDefault = {
      userName: "Daniela Paola",
      firstName: "Nuño",
      secondName: "Camacho",
      password: "12345678",
      phone: "7773076038",
      email: "paola@gmail.com",
      typeUser: "usuario",
    };

    let usuarios = [
      admin,
      reclutaDefault,
      usuarioDefault
    ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("logger", "default");
  },
};
</script>

<style>
.btn.btn-outline-secondary:hover {
  color: #ffffff !important;
}
.btn.btn-outline-info:hover {
  color: #ffffff !important;
}

.btn.btn-primary {
  color: #ffffff !important;
}

.btn.btn-secondary {
  color: #ffffff !important;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

.alert-float{
	position:fixed;
	width:300px;
	bottom:40px;
	right:40px;
	background-color:black;
	color:#FFF;
	text-align:center;
}

.bg-light{
  background-color: #D98880 !important;
  color: #FFFFFF !important;
}

.navbar-brand{
  color: #FFFFFF !important;
}

.btn.btn-primary{
  background-color: #D98880;
  color: #ffffff !important;
  border-color: #D98880;
}
</style>