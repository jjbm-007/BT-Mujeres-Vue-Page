<template>
  <div class="personalDetails mt-5">
    <h3>
      <i class="fas fa-id-card mr"></i>Mis Datos Personales
    </h3>

    <ul class="nav nav-tabs mt-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="educacion-tab"
          data-bs-toggle="tab"
          data-bs-target="#educacion"
          type="button"
          role="tab"
          aria-controls="educacion"
          aria-selected="true"
        >
          Educación
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="documentos-tab"
          data-bs-toggle="tab"
          data-bs-target="#documentos"
          type="button"
          role="tab"
          aria-controls="documentos"
          aria-selected="false"
        >
          Documentos
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="domicilio-tab"
          data-bs-toggle="tab"
          data-bs-target="#domicilio"
          type="button"
          role="tab"
          aria-controls="domicilio"
          aria-selected="false"
        >
          Dirección
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="habilidades-tab"
          data-bs-toggle="tab"
          data-bs-target="#habilidades"
          type="button"
          role="tab"
          aria-controls="habilidades"
          aria-selected="false"
        >
          Habilidades
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="experiencia-tab"
          data-bs-toggle="tab"
          data-bs-target="#experiencia"
          type="button"
          role="tab"
          aria-controls="experiencia"
          aria-selected="false"
        >
          Experiencia Laboral
        </button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="educacion"
        role="tabpanel"
        aria-labelledby="educacion-tab"
      >
        <div class="row align-items-stretch mt-4">
          <div class="col-12 mb-3">
            <h5>Educación</h5>
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-graduation-cap mrl"></i>Nivel educativo</label
            >
            <select class="form-select">
              <option>Educación Primaria</option>
              <option>Educación Secundaria</option>
              <option>Educación Media Superior</option>
              <option>Educación Superior</option>
            </select>
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-book mrl"></i>Área de estudios</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-university mrl"></i>Institución</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-map-marker-alt mrl"></i>Ubicación</label
            >
            <input type="text" class="form-control" />
          </div>
          <div class="col-3 mb-3">
            <label class="form-label"
              ><i class="fas fa-calendar-day mrl"></i>Mes de Inicio</label
            >
            <select class="form-select">
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
          </div>
          <div class="col-3 mb-3">
            <label class="form-label"
              ><i class="fas fa-calendar-day mrl"></i>Mes de Conclusión</label
            >
            <select class="form-select">
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
          </div>
          <div class="col-3 mb-3">
            <label class="form-label"
              ><i class="fas fa-calendar-day mrl"></i>Año de Inicio</label
            >
            <input type="number" class="form-control" />
          </div>
          <div class="col-3 mb-3">
            <label class="form-label"
              ><i class="fas fa-calendar-day mrl"></i>Año de Conclusión</label
            >
            <input type="number" class="form-control" />
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-6">
          <button class="btn btn-primary">
            <i class="fas fa-save mr"></i>Guardar
          </button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="documentos"
        role="tabpanel"
        aria-labelledby="documentos-tab"
      >
        <div class="row align-items-stretch mt-4">
          <div class="col-12 mb-3">
            <h5>Mis documentos</h5>
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-file-alt mrl"></i>Curriculum</label
            >
            <input type="file" class="form-control" />
          </div>
          <div class="col-6 mb-3">
            <label class="form-label"
              ><i class="fas fa-file-alt mrl"></i>Carta de presentación</label
            >
            <input type="file" class="form-control" />
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-6">
          <button class="btn btn-primary">
            <i class="fas fa-save mr"></i>Guardar
          </button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="domicilio"
        role="tabpanel"
        aria-labelledby="domicilio-tab"
      >
        <div class="row align-items-stretch mt-4">
          <div class="col-12 mb-3">
            <h5>Domicilio</h5>
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
          <div class="col-12 mb-3">
            <label class="form-label"
              ><i class="fas fa-map-marker-alt mrl"></i>Dirección</label
            >
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-6">
          <button class="btn btn-primary">
            <i class="fas fa-save mr"></i>Guardar
          </button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="habilidades"
        role="tabpanel"
        aria-labelledby="habilidades-tab"
      >
        <div class="row align-items-stretch mt-4">
          <div class="col-12 mb-3">
            <h5>Habilidades</h5>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op1" />
              <label class="form-check-label" for="op1">Liderazgo</label>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op2" />
              <label class="form-check-label" for="op2"
                >Inteligencia emocional</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op3" />
              <label class="form-check-label" for="op3">Comunicación</label>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op4" />
              <label class="form-check-label" for="op4"
                >Resolución de conflictos</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op5" />
              <label class="form-check-label" for="op5">Organización</label>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op6" />
              <label class="form-check-label" for="op6"
                >Atención al detalle</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op7" />
              <label class="form-check-label" for="op7"
                >Administración del tiempo</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op8" />
              <label class="form-check-label" for="op8"
                >Comunicación oral y escrita</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op9" />
              <label class="form-check-label" for="op9">Creatividad</label>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op10" />
              <label class="form-check-label" for="op10"
                >Manejo del tiempo</label
              >
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op11" />
              <label class="form-check-label" for="op11">Adaptabilidad</label>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="op12" />
              <label class="form-check-label" for="op12">Negociación</label>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3 mb-6">
          <button class="btn btn-primary">
            <i class="fas fa-save mr"></i>Guardar
          </button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="experiencia"
        role="tabpanel"
        aria-labelledby="experiencia-tab"
      >
        <div class="row align-items-stretch mt-4">
          <div class="col-6 mb-3">
            <h5>Experiencia Laboral</h5>
          </div>

          <div class="col-6">
            <button class="btn btn-primary float-end" @click="registerJob()">
              <i class="fas fa-pencil mr"></i>Registrar
            </button>
          </div>
          <div class="col-12">
            <table class="table table-hover text-center mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Empleo</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">Mes Inicio</th>
                  <th scope="col">Mes Final</th>
                  <th scope="col">Año Inicio</th>
                  <th scope="col">Año Final</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Programador Junior</td>
                  <td>UTEZ</td>
                  <td>Morelos</td>
                  <td>Junio</td>
                  <td>Enero</td>
                  <td>2019</td>
                  <td>2020</td>
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
        </div>
      </div>
    </div>
    <!-- Modal Registro -->
    <div
      class="modal fade"
      id="modalRegistrar"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fas fa-pencil-alt mr"></i>Registrar Experiencia Laboral
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body row">
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-briefcase mr"></i>Empleo
              </label>
              <input type="text" class="form-control"/>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-building mr"></i>Empresa
              </label>
              <input type="text" class="form-control"/>
            </div>
            <div class="mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-map-marked-alt mr"></i>Ciudad
              </label>
              <select class="form-select" v-model="estadoSeleccionadoExperiencia">
                <option v-for="(item, index) of estadosRepublica" :key="item">
                  {{ index }}
                </option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Mes Inicio
              </label>
              <select class="form-select">
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Mes Final
              </label>
              <select class="form-select">
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Año Inicio
              </label>
              <input type="number" class="form-control"/>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Año Final
              </label>
              <input type="number" class="form-control"/>
            </div>
            <div class="mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-grip-lines mr"></i>Descripción
              </label>
              <textarea rows="2" class="form-control"></textarea>
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
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <i class="fas fa-pencil-alt mr"></i>Modificar Experiencia Laboral
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body row">
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-briefcase mr"></i>Empleo
              </label>
              <input type="text" class="form-control"/>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-building mr"></i>Empresa
              </label>
              <input type="text" class="form-control"/>
            </div>
            <div class="mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-map-marked-alt mr"></i>Ciudad
              </label>
              <select class="form-select" v-model="estadoSeleccionadoExperiencia">
                <option v-for="(item, index) of estadosRepublica" :key="item">
                  {{ index }}
                </option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Mes Inicio
              </label>
              <select class="form-select">
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Mes Final
              </label>
              <select class="form-select">
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
                <option value="Abril">Abril</option>
                <option value="Mayo">Mayo</option>
                <option value="Junio">Junio</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
              </select>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Año Inicio
              </label>
              <input type="number" class="form-control"/>
            </div>
            <div class="col-6 mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-calendar-day mr"></i>Año Final
              </label>
              <input type="number" class="form-control"/>
            </div>
            <div class="mb-2">
              <label for="careerName" class="form-label">
                <i class="fas fa-grip-lines mr"></i>Descripción
              </label>
              <textarea rows="2" class="form-control"></textarea>
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
              <i class="fas fa-pencil-alt mr"></i>Modificar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import estados from "@/plugins/estadosMexico.json";
export default {
  name: "PersonasDetails",
  title: "Mis Datos Personales",
  data() {
    return {
      estadosRepublica: estados,
      estadoSeleccionado: "",
      municipioSeleccionado: "",
      selectOption: "Seleccione...",
      estadoSeleccionadoExperiencia:""
    };
  },
  methods: {
    registerJob(){
      $('#modalRegistrar').modal('show');
    
    },
    modificar(){
      $('#modalModificar').modal('show');
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
.personalDetails {
  margin-bottom: 80px !important;
}
</style>