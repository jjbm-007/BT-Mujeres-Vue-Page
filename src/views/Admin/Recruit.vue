<template>
  <div class="catalog mt-5">
    <h3 class="text-center"><i class="fas fa-user mr"></i>Reclutas</h3>

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

    <!-- Modal Registro -->
    <div
      class="modal fade"
      id="modalRegistrar"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fas fa-pencil-alt mr"></i>Registrar Recluta
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-user mrl"></i>Nombre(s)
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-user mrl"></i>Apellidos
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-envelope mrl"></i>Correo electrónico
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-phone-alt mrl"></i>Teléfono
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i class="fas fa-times mr"></i>
              Cancelar
            </button>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-pencil-alt mr"></i>Registrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Modificar -->
    <div
      class="modal fade"
      id="modalModificar"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fas fa-edit mr"></i>Modificar Recluta
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-user mrl"></i>Nombre(s)
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-user mrl"></i>Apellidos
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-envelope mrl"></i>Correo electrónico
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-2">
              <label for="" class="form-label">
                <i class="fas fa-phone-alt mrl"></i>Teléfono
              </label>
              <input type="number" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i class="fas fa-times mr"></i>
              Cancelar
            </button>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-edit mr"></i>Modificar
            </button>
          </div>
        </div>
      </div>
    </div>
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