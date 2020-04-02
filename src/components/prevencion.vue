<template lang="html">
  <md-content>
    <div class="md-layout cabecera">
      <div class="md-layout-item">
        <div class="flecha-hacia-atras" @click="continuar()">
          <font-awesome-icon :icon="['fa', 'angle-left']"/>
        </div>
      </div>
      <div class="md-layout-item">
          <div class="logo-cabecera">
            <img src="../assets/logo.png" alt="SCF">
          </div>
      </div>
    </div>

    <h2>Distanciamiento social</h2>
    <ul id="example-1">
      <li v-for="item in itemsDistanciamiento">
        {{ item.mensaje }}
      </li>
    </ul>

    <h2>Adecuada higiene de manos</h2>
    <p>Una adecuada higiene de manos puede realizarse a través de dos acciones sencillas que requieren de un correcto conocimiento de ambas técnicas:</p>
    <ul id="example-1">
      <li v-for="item in itemsLavadoManos">
        {{ item.mensaje }}
      </li>
    </ul>
    <md-button class="md-raised md-default" @click="evitar_contagiar()" style="width: 100%; height: 10em; color:blue; margin-left: 0;">Evitar contagiar otros</md-button>
    <md-button class="md-raised md-default" @click="viajar_seguridad()" style="width: 100%; height: 10em; color:yellow; margin-left: 0;">Viajar con seguridad</md-button>
    <md-button class="md-raised md-default" @click="factores_riesgo()" style="width: 100%; height: 10em; color:red; margin-left: 0;">Factores riesgo</md-button>
    <md-button class="md-raised md-default" @click="embarazo()" style="width: 100%; height: 10em; color:black; margin-left: 0;">Embarazo</md-button>
  </md-content>
</template>

<script>
export default {
  name: 'prevencion',
    data: () => ({
      itemsDistanciamiento: [
        { mensaje: 'Mantener una distancia de 1 metro entre usted y otros' },
        { mensaje: 'Evitar las multitudes y las reuniones masivas donde sea difícil mantener la distancia adecuada de los demás.' },
        { mensaje: 'Evitar pequeñas reuniones en espacios cerrados, por ejemplo, celebraciones familiares' },
        { mensaje: 'Evitar dar la mano, abrazar o besar a otras personas' },
        { mensaje: 'No compartir el mate, vajilla, y utensilios.' },
        { mensaje: 'Evitar visitar a personas vulnerables, como las que se encuentran en centros de atención para personas mayores u hospitales, bebés o personas con sistemas inmunes comprometidos debido a enfermedades o tratamiento médico.' },
      ],

      itemsLavadoManos:[
        { mensaje: 'Lavado de manos con agua y jabón.'},
        { mensaje: 'Higiene de manos con soluciones a base de alcohol (por ejemplo, alcohol en gel).'}

      ]
    }),
    methods: {
      continuar() {
        this.$router.push("/informacion");
      },
      evitar_contagiar() {
        this.$router.push("/evitar_contagiar_otros");
      },
      viajar_seguridad(){
        this.$router.push("/viajar_con_seguridad");
      },
      factores_riesgo(){
        this.$router.push("/factores_riesgo");
      },
      embarazo(){
        this.$router.push("/embarazo");
      }

    }

}
</script>

<style lang="css">
body {

}
.md-content > .md-content {
    width: 100%;
    max-height: 23em;
    overflow: auto;
    vertical-align: top;
  }
</style>
