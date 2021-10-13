<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img
        src="@/assets/logo.png"
        width="40"
        alt="UTEZ"
      />
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
                <router-link to="jefes-academicos-administrador" class="dropdown-item"
                  ><i class="fas fa-user-tie mr"></i>Jefes académicos</router-link 
                >
              </li>
              <li>
                <router-link to="personal-academico-administrador" class="dropdown-item"
                  ><i class="fas fa-chalkboard-teacher mr"></i>Personal académico</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  to="asignatura-administrador"
                  class="dropdown-item"
                  ><i class="fas fa-book mr"></i>Asignaturas</router-link
                >
              </li>
              <li>
                <router-link
                  to="carreras-administrador"
                  class="dropdown-item"
                  ><i class="fas fa-university mr"></i>Carreras</router-link
                >
              </li>
              <li>
                <router-link
                  to="departamentos-administrador"
                  class="dropdown-item"
                  ><i class="fas fa-building mr"></i>Departamentos</router-link
                >
              </li>
              <li>
                <router-link
                  to="periodo-administrador"
                  class="dropdown-item"
                  ><i class="fas fa-external-link-square-alt mr"></i>Periodo</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown" v-if="sesion & usuarios">
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
        <div class="navbar-text">
          <router-link v-if="sesion" to="/login" type="button" class="btn btn-outline-secondary">
            <i class="fas fa-sign-out-alt"></i>
            Cerrar sesión
          </router-link>

          <router-link v-if="!sesion" to="/login" type="button" class="btn btn-primary mr">
            <i class="fas fa-sign-out-alt"></i>
            Iniciar sesión
          </router-link>

          <router-link v-if="!sesion" to="/register" type="button" class="btn btn-outline-secondary">
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
  data(){
    return{
      sesion: false,
      admin: false,
      empresa: false,
      usuarios: true,
      buscar: ''
    }
  }
  
}
</script>