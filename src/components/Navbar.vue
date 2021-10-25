<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img src="@/assets/logo.png" width="40" alt="UTEZ" />
      <router-link to="/" class="navbar-brand" href="#">BT-Mujeres</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- Perfil Reclutas | Empresa -->
          <li class="nav-item" v-if="companies | recruit">
            <router-link
              :to="directionProfile"
              class="nav-link"
              style="border: none !important"
              ><i class="fas fa-user-circle mr"></i>Mi Perfil</router-link
            >
          </li>

          <!-- ############### Sección Administrador ###############-->     
          <!-- Opciones de Administrador -->     
          <li class="nav-item dropdown" v-if="sesion & admin">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-cog mr"></i>Administrador
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/catalog-admin" class="dropdown-item">
                  <i class="fas fa-book mr"></i>Categoría</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/companies-admin" class="dropdown-item">
                  <i class="fas fa-user-tie mr"></i>Empresas</router-link
                >
              </li>
              <li>
                <router-link to="/recruit-admin" class="dropdown-item">
                  <i class="fas fa-user mr"></i>Reclutas</router-link
                >
              </li>
            </ul>
          </li>

          <!-- ############### Sección Reclutas ###############-->
          <!-- Datos Personales-->
          <li class="nav-item" v-if="recruit">
            <router-link
              to="/personal-details-recruit"
              class="nav-link"
              style="border: none !important"
              ><i class="fas fa-id-card mr"></i>Datos Personales</router-link
            >
          </li>
          <!-- Catálogos -->
          <li class="nav-item dropdown" v-if="sesion & recruit">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-book mr"></i>Catálogos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/catalogo" class="dropdown-item"
                  ><i class="fas fa-angle-right mr"></i>Desarrollo</router-link
                >
              </li>
              <li>
                <router-link to="/catalogo" class="dropdown-item"
                  ><i class="fas fa-angle-right mr"></i>Negocios</router-link
                >
              </li>
              <li>
                <router-link to="/catalogo" class="dropdown-item"
                  ><i class="fas fa-angle-right mr"></i>Finanzas</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Botones de sesión -->
        <div class="navbar-text">
          <router-link
            v-if="sesion"
            to="/login"
            type="button"
            class="btn btn-outline-secondary"
          >
            <i class="fas fa-sign-out-alt"></i>
            Cerrar sesión
          </router-link>

          <router-link
            v-if="!sesion"
            to="/login"
            type="button"
            class="btn btn-primary mr"
          >
            <i class="fas fa-sign-out-alt"></i>
            Iniciar sesión
          </router-link>

          <router-link
            v-if="!sesion"
            to="/register"
            type="button"
            class="btn btn-outline-secondary"
          >
            <i class="fas fa-sign-out-alt"></i>
            Registrate
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sesion: true,
      admin: true,
      companies: false,
      recruit: false,

      directionProfile: "",
    };
  },
  mounted() {
    if (this.companies) {
      this.directionProfile = "/profile-companies";
    }
    if (this.recruit) {
      this.directionProfile = "/profile-recruit";
    }
  },
};
</script>