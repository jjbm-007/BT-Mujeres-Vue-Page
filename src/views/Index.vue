<template>
  <div class="index">
    <Navbar />
    <div class="container mt-3">
      <div class="row mb-4 mt-4">
        <div class="col-8">
          <h4>Revisa nuestros trabajos que tenemos para ti</h4> 
        </div>
        <div class="col-3">
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
          <label class="form-label" style="font-size: 18pt"><i class="fas fa-search"></i></label>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 text-center">
        <div class="col" v-for="item in items" v-bind:key="item.id">
          <div class="card h-100">
            <div class="card-header">
              {{item.catalogo}}
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.nombreEmpleo }}</h5>
              <p class="card-text">
                {{ item.descripcion }}
              </p>
            </div>
            <div class="card-footer">
              <div class="d-grid">
                <button class="btn btn-primary">
                  <i class="fas fa-eye mr"></i>Ver empleo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "Index",
  components: {
    Navbar, Footer
  },
  data() {
    return {
      empleos: [
        {
          id: 1,
          nombreEmpleo: "Empleo 1",
          descripcion:
            "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
          catalogo: "Desarrollo"
        },
        {
          id: 2,
          nombreEmpleo: "Empleo 2",
          descripcion:
            "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
          catalogo: "Finanzas",
        },
        {
          id: 3,
          nombreEmpleo: "Empleo 3",
          descripcion:
            "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
          catalogo: "Negocios"
        },
      ],
      buscar: "",
    };
  },
  computed: {
    items() {
      return this.empleos.filter((item) => {
        return item.nombreEmpleo.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
  },
};
</script>

<style>
</style>