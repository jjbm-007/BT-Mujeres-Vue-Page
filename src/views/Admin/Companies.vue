<template>
  <div class="catalog mt-5">
    <h3 class="text-center"><i class="fas fa-user mr"></i>Empresas</h3>

    <table class="table table-hover text-center mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre completo</th>
          <th scope="col">Correo electrónico</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Jean Jairo Benitez Meza</td>
          <td>20183ti129@utez.edu.mx</td>
          <td>7775132885</td>
          <td>
            <button
              @click="modificar()"
              class="btn btn-outline-warning btn-sm mr"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Modificar"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Eliminar"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  methods: {
    registrar() {
      $("#modalRegistrar").modal("show");
    },
    modificar() {
      $("#modalModificar").modal("show");
    },
  },
};
</script>

<style>
</style>