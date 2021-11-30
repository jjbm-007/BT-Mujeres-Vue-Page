<template>
  <div class="index">
    <div class="container mt-3">

      <!-- Titulos -->
      <div class="row mb-2 mt-4">
        <div class="col-4">
          <h3><i class="fas fa-briefcase" style="margin-right: 20px;"></i>Mis vacantes</h3>
        </div>
        <div class="col-4">
          <div class="d-flex">
            <input
              class="form-control"
              v-model="buscar"
              type="search"
              placeholder="Buscar"
            />
          </div>
        </div>
        <div class="col-1">
          <label class="form-label" style="font-size: 18pt"
            ><i class="fas fa-search"></i
          ></label>
        </div>
        <div class="col-3">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link to="/new-vacant-companies" class="btn btn-primary" type="button">
                    <i class="fas fa-pencil-alt mr"></i>Registrar Vacante
                </router-link>
            </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 text-center">
        <div class="col" v-for="item in items" v-bind:key="item.id">
          <div class="card h-100">
            <img :src="item.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.nombreEmpleo }}</h5>
              <p class="card-text">
                {{ item.descripcion }}
              </p>
            </div>
            <div class="card-footer">
              <div class="d-grid">
                <button class="btn btn-primary" @click="abrirVacante(item)">
                  <i class="fas fa-eye mr"></i>Ver empleo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="abrirVacante"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Carrusel -->
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://s03.s3c.es/imag/_v0/770x420/8/8/9/490x_mujeres-trabajando-dreams.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.larepublica.ec/wp-content/uploads/2015/12/mujeres-trabajando.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://semanariovoz.com/wp-content/uploads/2015/05/21/Mujeres-trabajando-pag-62.jpg  "
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- Body card -->
          <div class="modal-body" style="padding: 15px 30px 15px 30px;">
            <div class="mb-3">
              <h3 class="modal-title" id="exampleModalLabel">
                <b>{{ vacante.nombreEmpleo }} </b>- {{ vacante.catalogo }}
              </h3>
              <span> <b>{{ vacante.salario }} ( {{ vacante.periodoPago }} )</b> - {{ vacante.remoto ? "Home Office" : "Presencial" }}</span> <br />
              <span>Ubicado en {{ vacante.municipio }}</span> -
              <span>{{ vacante.estadoRepublica }}</span><br/>
              <span>{{ vacante.empresa }} </span> - <span>{{ vacante.fechaInicio }}</span><br/>
              <span>{{ vacante.tipoEmpleo }} - Se de los primeros {{ vacante.noContrataciones }} solicitantes</span>
            </div>
            <span><b>Descripción</b></span>
            <p>{{ vacante.descripcion }}</p>
            <span><strong>Beneficios </strong></span><br />
                <span>{{ vacante.beneficios }}</span>

            <!-- <div class="mt-3" >
              <span style="font-size:10pt;"
                ><strong>Publicado por {{ vacante.propietario }}</strong></span
              >
            </div> -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i class="fas fa-times mr"></i>
              Cerrar
            </button>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-check-square"></i>
              Solicitar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Index",
  title: "BT-Mujeres",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      empleos: [
        {
          id: 1,
          nombreEmpleo: "Empleo 4",
          descripcion:
            "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
          catalogo: "Desarrollo",
          estadoRepublica: "Morelos",
          municipio: "Emiliano Zapata",
          remoto: true,
          noContrataciones: 5,
          tipoEmpleo: "Planta",
          fechaInicio: "13/Octubre/2021",
          salario: "$ 5,000",
          periodoPago: "Mensual",
          beneficios: "Seguro social",
          empresa: "Empresa 1",
          propietario: "Ing. Reynel Flores Brito",
          img:
            "https://www.consumotic.mx/wp-content/uploads/2021/04/0405_mujeres-trabajando.jpg",
        },
        {
          id: 2,
          nombreEmpleo: "Empleo 1",
          descripcion:
            "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
          catalogo: "Finanzas",
          estadoRepublica: "Morelos",
          municipio: "Jiutepec",
          remoto: true,
          noContrataciones: 5,
          tipoEmpleo: "Planta",
          fechaInicio: "13/Octubre/2021",
          salario: "$ 5,000",
          periodoPago: "Mensual",
          beneficios: "Seguro social",
          empresa: "Empresa 2",
          propietario: "Lic. Noemi Catalán Nava",
          img:
            "https://i0.wp.com/magis.iteso.mx/wp-content/uploads/2014/10/Magis-442-equidad-salario-mujeres-2.jpg?resize=620%2C354",
        },
      ],
      buscar: "",
      vacante: {
        id: 0,
        nombreEmpleo: "",
        descripcion: "",
        catalogo: "",
        estadoRepublica: "",
        municipio: "",
        remoto: "",
        noContrataciones: 0,
        tipoEmpleo: "",
        fechaInicio: "",
        salario: "",
        periodoPago: "",
        beneficios: "",
      },
    };
  },
  methods: {
    abrirVacante(empleo) {
      this.vacante = Object.assign({}, empleo);
      $("#abrirVacante").modal("show");
    },
  },
  computed: {
    items() {
      return this.empleos.filter((item) => {
        return item.nombreEmpleo
          .toLowerCase()
          .includes(this.buscar.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
</style>