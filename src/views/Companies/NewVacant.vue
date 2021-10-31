<template>
  <div class="profile mt-5">
    <h3 class="text-center">
      <i class="fas fa-pencil-alt mr"></i>Nueva Vacante
    </h3>
    <div class="row align-items-stretch mt-3">
      <div class="row align-items-stretch mt-4">
        <div class="col-12 mb-3">
          <label for="tituloTrabajo" class="form-label">
            <i class="fas fa-user mrl"></i>Título del Trabajo
          </label>
          <input
            type="text"
            class="form-control"
            id="tituloTrabajo"
            placeholder="Ingrese el título del trabajo"
          />
        </div>
        <div class="col-6 mb-3">
          <label class="form-label"
            ><i class="fas fa-map-marked-alt mrl"></i>Estado</label
          >
          <select class="form-select" v-model="estadoSeleccionado">
            <option v-for="(item, index) of estadosRepublica" :key="item">
              {{ index }}
            </option>
          </select>
        </div>
        <div class="col-6 mb-3">
          <label class="form-label"
            ><i class="fas fa-map-marked-alt mrl"></i>Municipio</label
          >
          <select class="form-select" v-model="municipioSeleccionado">
            <option v-for="item of municipios" :key="item">
              {{ item }}
            </option>
          </select>
        </div>

        <div class="col-3 mb-3">
          <label for="empleoRemoto" class="form-label">
            <i class="fas fa-laptop-code mrl"></i>Empleo Remoto
          </label>
          <select id="empleoRemoto" class="form-select">
            <option>Empleo Presencial</option>
            <option>Empleo Remoto</option>
          </select>
        </div>
        <div class="col-3 mb-3">
          <label for="numeroContrataciones" class="form-label">
            <i class="fas fa-hashtag mrl"></i>Número de Contrataciones
          </label>
          <input
            type="number"
            class="form-control"
            id="numeroContrataciones"
            placeholder="Ingrese el número de contrataciones"
          />
        </div>
        <div class="col-3 mb-3">
          <label for="tipoEmpleo" class="form-label">
            <i class="fas fa-briefcase mrl"></i>Tipo de Empleo
          </label>
          <input
            type="text"
            class="form-control"
            id="tipoEmpleo"
            placeholder="Ingrese el tipo de empleo"
          />
        </div>
        <div class="col-3 mb-3">
          <label for="beneficios" class="form-label">
            <i class="fas fa-star mrl"></i>Beneficios
          </label>
          <input
            type="text"
            class="form-control"
            id="beneficios"
            placeholder="Ingrese los beneficios"
          />
        </div>

        <div class="col-4 mb-3">
          <label for="fechaInicio" class="form-label">
            <i class="fas fa-calendar-day mrl"></i>Fecha Inicio
          </label>
          <input
            type="text"
            class="form-control"
            id="fechaInicio"
            placeholder="Ingrese la fecha de inicio"
          />
        </div>
        <div class="col-4 mb-3">
          <label for="salario" class="form-label">
            <i class="fas fa-money-bill-wave mrl"></i>Salario
          </label>
          <input
            type="number"
            class="form-control"
            id="salario"
            placeholder="Ingrese el salario"
          />
        </div>
        <div class="col-4 mb-3">
          <label for="periodoPago" class="form-label">
            <i class="fas fa-th-list mrl"></i>Periodo de Pago
          </label>
          <input
            type="text"
            class="form-control"
            id="periodoPago"
            placeholder="Ingrese el periodo de pago"
          />
        </div>

        <div class="col-12 mb-2">
          <label for="descripcion" class="form-label">
            <i class="fas fa-grip-lines mr"></i>Descripción
          </label>
          <textarea
            rows="2"
            id="descripcion"
            class="form-control"
            placeholder="Ingrese la descripción del trabajo"
          ></textarea>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-5">
          <router-link to="/vacant-companies" class="btn btn-secondary">
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
import estados from "@/plugins/estadosMexico.json";
export default {
  data: () => ({
    usuario: {},
    estadosRepublica: estados,
    estadoSeleccionado: "",
    municipioSeleccionado: "",
    selectOption: "Seleccione...",
    estadoSeleccionadoExperiencia: "",
  }),
  mounted() {
    let datos = localStorage.getItem("usuarioLoggeado");
    if (datos != null) {
      this.usuario = JSON.parse(datos);
    }
  },
  computed: {
    municipios() {
      return this.estadosRepublica[this.estadoSeleccionado];
    },
  },
};
</script>

<style scoped>
.profile {
  margin-bottom: 80px !important;
}
</style>