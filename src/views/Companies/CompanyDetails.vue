<template>
  <div class="profile mt-5">
    <h3 class="text-center"><i class="fas fa-building mr"></i>Datos de la Empresa</h3>
    <div class="row align-items-stretch mt-4">
      <div class="row align-items-stretch mt-4">
        <div class="col-12 mb-3">
          <label for="companyName" class="form-label">
           <i class="fas fa-building mrl"></i>Nombre de la Empresa
          </label>
          <input
            type="text"
            class="form-control"
            id="companyName"
            placeholder="Ingresa tu nombre"
            v-model="usuario.userName"
          />
        </div>
        <div class="col-4 mb-3">
          <label for="direction" class="form-label">
            <i class="fas fa-map-marker-alt mrl"></i>Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="direction"
            placeholder="Ingresa tu primer apellido"
            v-model="usuario.firstName"
          />
        </div>
        <div class="col-4 mb-3">
          <label for="companyLine" class="form-label">
            <i class="fas fa-box mrl"></i>Giro de la Empresa
          </label>
          <input
            type="text"
            class="form-control"
            id="companyLine"
            placeholder="Ingresa tu segundo apellido"
            v-model="usuario.secondName"
          />
        </div>

        <div class="col-4 mb-3">
          <label for="noWorkers" class="form-label">
            <i class="fas fa-hashtag mrl"></i>Número de Empleados
          </label>
          <input
            type="email"
            class="form-control"
            id="noWorkers"
            placeholder="Ingresa tu correo electrónico"
            v-model="usuario.email"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="description" class="form-label">
            <i class="fas fa-grip-lines mrl"></i>Descripción
          </label>
          <textarea
            type="number"
            class="form-control"
            id="description"
            placeholder="Ingresa tu teléfono"
            v-model="usuario.phone"
          ></textarea>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-5">
          <router-link to="/" class="btn btn-secondary mr">
            <i class="fas fa-times mr"></i>Cancelar
          </router-link>
          <button class="btn btn-primary">
            <i class="fas fa-pencil-alt mr"></i>Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    usuario:{},

  }),
  mounted(){
    let datos = localStorage.getItem("usuarioLoggeado");
    if (datos != null) {
      this.usuario = JSON.parse(datos);
    }
  },
};
</script>

<style scoped>
.profile {
  margin-bottom: 80px !important;
}
</style>