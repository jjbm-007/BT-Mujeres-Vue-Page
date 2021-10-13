<template>
  <div class="register">
    <Navbar />
    <div class="container mt-3 p-4">
      <h1> <i class="fas fa-pencil-alt mr"></i> Registro</h1>
      <div class="row align-items-stretch mt-4">

        <div class="col-6 mb-3">
          <label for="firstName" class="form-label">
            <i class="fas fa-user mrl"></i>Nombre(s)
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="lastName" class="form-label">
            <i class="fas fa-user mrl"></i>Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Ingresa tu apellido"
          />
        </div>

        <div class="col-6 mb-3">
          <label for="phone" class="form-label">
            <i class="fas fa-phone-alt mrl"></i>Teléfono
          </label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="Ingresa tu teléfono"
          />
        </div>

        <div class="col-6 mb-3">
          <label for="email" class="form-label">
            <i class="fas fa-envelope mrl"></i>Correo electrónico
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        <div class="col-6 mb-3">
          <label for="password1" class="form-label">
            <i class="fas fa-key mrl"></i>Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="password1"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="password1" class="form-label">
            <i class="fas fa-key mrl"></i>Repita contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="password1"
            placeholder="Repita su contraseña"
          />
        </div>

        <div class="col-6 mb-3">
          <label for="direction" class="form-label">
            <i class="fas fa-map-marker-alt mrl"></i>Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="direction"
            placeholder="Ingrese su dirección"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="typeUser" class="form-label">
            <i class="fas fa-users mrl"></i>¿Quien eres?
          </label>
          <select id="typeUser" class="form-select">
              <option selected disabled>Seleccione...</option>
              <option value="1">Empresa</option>
              <option value="2">Recluta</option>
          </select>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <router-link to="/" class="btn btn-secondary mr">
                <i class="fas fa-times mr"></i>Cancelar
            </router-link>
            <button class="btn btn-primary">
                <i class="fas fa-pencil-alt mr"></i>Registrar
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Register",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none !important; 
        margin: 0 !important; 
    }
</style>