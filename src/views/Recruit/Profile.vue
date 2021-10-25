<template>
  <div class="profile mt-5">
    <h3 class="text-center"><i class="fas fa-user-circle mr"></i>Mi perfil</h3>
    <div class="row align-items-stretch mt-4">
      <div class="row align-items-stretch mt-4">
        <div class="col-4 mb-3">
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
        <div class="col-4 mb-3">
          <label for="lastName" class="form-label">
            <i class="fas fa-user mrl"></i>Primer Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Ingresa tu primer apellido"
          />
        </div>
        <div class="col-4 mb-3">
          <label for="lastName2" class="form-label">
            <i class="fas fa-user mrl"></i>Segundo Apellido
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName2"
            placeholder="Ingresa tu segundo apellido"
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

        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-5">
          <button class="btn btn-primary">
            <i class="fas fa-pencil-alt mr"></i>Guardar
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div class="row align-items-stretch mt-4">
      <h3 class="text-center m-4">
        <i class="fas fa-sync mr"></i>Cambiar contraseña
      </h3>
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

      <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-6">
        <button class="btn btn-primary">
          <i class="fas fa-sync mr"></i>Cambiar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile {
  margin-bottom: 80px !important;
}
</style>