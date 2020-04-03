<template lang="html">
  <div class="page-container">
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
  <md-content>
    <div class="tamanoPantalla marginGlobal">
      <div v-show='isHiddenZona1'>
        <div @click="isHidden=!isHidden" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">El virus COVID-19 puede transmitirse en zonas con climas cálidos y húmedos</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden'>
            <p class="marginParrafo">Las pruebas científicas obtenidas hasta ahora indican que el virus de la COVID-19 puede transmitirse en CUALQUIER ZONA, incluidas las de clima cálido y húmedo. Con independencia de las condiciones climáticas, hay que adoptar medidas de protección si se vive en una zona donde se hayan notificado casos de COVID-19 o si se viaja a ella. La mejor manera de protegerse contra la COVID-19 es lavarse las manos con frecuencia. De esta manera se eliminan los virus que puedan estar en las manos y se evita la infección que podría producirse al tocarse los ojos, la boca y la nariz. 
            </p>
          </div>
        </div>
        <div @click="isHidden1=!isHidden1" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">El frío y la nieve NO PUEDEN matar el nuevo coronavirus (2019-nCoV)</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden1' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden1' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden1'>
            <p class="marginParrafo">La temperatura normal del cuerpo humano se mantiene en torno a 36,5° y 37°, con independencia de la temperatura exterior o de las condiciones meteorológicas. Por lo tanto, no hay razón para creer que el frío pueda matar el nuevo coronavirus o acabar con otras enfermedades. La forma más eficaz de protegerse contra el 2019-nCoV es limpiarse las manos frecuentemente con un desinfectante a base de alcohol o con agua y jabón.
            </p>
          </div>
        </div>
        <div @click="isHidden2=!isHidden2" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">Bañarse en agua caliente no previene la infección por el nuevo coronavirus</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden2' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden2' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden2'>
            <p class="marginParrafo">Bañarse en agua caliente no proporciona ninguna protección contra la COVID-19. Con independencia de la temperatura del agua de la bañera o la ducha, la temperatura corporal continuará siendo de 36,5 °C a 37 °C. De hecho, si el agua está muy caliente puede uno quemarse. Lo mejor que se puede hacer para protegerse de la COVID-19 es lavarse las manos con frecuencia para eliminar los virus que pueda haber en su superficie y no contagiarnos al tocarnos los ojos, la boca y la nariz. 
            </p>
          </div>
        </div>
        <div @click="isHidden3=!isHidden3" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">El nuevo coronavirus NO PUEDE transmitirse a través de picaduras de mosquitos</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden3' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden3' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden3'>
            <p class="marginParrafo">El nuevo coronavirus es un virus respiratorio que se propaga principalmente por contacto con una persona infectada a través de las gotículas respiratorias que se generan cuando esta persona tose o estornuda, por ejemplo, o a través de gotículas de saliva o secreciones de la nariz. Hasta la fecha no hay información ni pruebas que indiquen que el 2019-nCoV pueda transmitirse por medio de mosquitos. Para protegerse, evite el contacto cercano con cualquier persona que tenga fiebre y tos, y practique una buena higiene de las manos y de las vías respiratorias.
            </p>
          </div>
        </div>
      </div>
      <div v-show='isHiddenZona2'>
        <div @click="isHidden4=!isHidden4" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Se puede matar el nuevo coronavirus con un secador de manos?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden4' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden4' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden4'>
            <p class="marginParrafo">No. Los secadores de manos no matan el 2019-nCoV. Para protegerse contra el nuevo coronavirus (2019-nCoV), lávese las manos frecuentemente con un gel hidroalcohólico o con agua y jabón. Una vez limpias, séqueselas bien con toallitas de papel o con un secador de aire caliente.
            </p>
          </div>
        </div>
        <div @click="isHidden5=!isHidden5" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Se puede matar el 2019-nCoV con una lámpara ultravioleta para desinfección?</p>
          </div>
          <div class="rightFlecha">
           <font-awesome-icon v-show='!isHidden5' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden5' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden5'>
            <p class="marginParrafo">No se deben utilizar lámparas ultravioletas para esterilizar las manos u otras partes del cuerpo, ya que la radiación ultravioleta puede causar eritemas (irritación de la piel). 
              Para protegerse contra el nuevo coronavirus, infórmese de todas las medidas que puede tomar, que se pueden consultar en el sitio web de la
              <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public">OMS</a>.
            </p>
          </div>
        </div>
        <div @click="isHidden6=!isHidden6" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Se puede matar el nuevo coronavirus rociando el cuerpo con alcohol o con cloro?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden6' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden6' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden6'>
            <p class="marginParrafo">No. Rociar todo el cuerpo con alcohol o cloro no sirve para matar los virus que ya han entrado en el organismo. Pulverizar estas sustancias puede dañar la ropa y las mucosas (es decir, los ojos, la boca, etc.). Tanto el alcohol como el cloro pueden servir para desinfectar las superficies, siempre que se sigan las recomendaciones pertinentes. 
              Hay varias medidas que se pueden aplicar para protegerse del nuevo coronavirus. Empiece por limpiarse las manos con frecuencia con un gel hidroalcohólico o con agua y jabón. Puede consultar otras medidas de protección recomendadas por la OMS en la 
              <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public">página</a>.
            </p>
          </div>
        </div>
        <div @click="isHidden7=!isHidden7" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">Las vacunas contra la neumonía, ¿protegen contra el nuevo coronavirus?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden7' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden7' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden7'>
            <p class="marginParrafo">No. Las vacunas contra la neumonía, como la neumocócica y la vacuna contra Haemophilus influenzae de tipo B (Hib), no protegen contra el nuevo coronavirus.
              El 2019-nCoV es tan nuevo y diferente que es necesario desarrollar una vacuna específica, en la que ya se está trabajando con el apoyo de la OMS.
              Aunque las vacunas contra la neumonía no son eficaces contra el 2019 nCoV, es muy conveniente vacunarse contra las enfermedades respiratorias para mantener una buena salud.
            </p>
          </div>
        </div>
      </div>
      <div v-show='isHiddenZona3'>
        <div @click="isHidden8=!isHidden8" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Conviene enjuagarse regularmente la nariz con una solución salina para prevenir la infección por el nuevo coronavirus?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden8' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden8' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden8'>
            <p class="marginParrafo">No. No hay pruebas que indiquen que esta práctica proteja de la infección por el nuevo coronavirus.
              Aunque algunas pruebas indican que enjuagarse la nariz regularmente con solución salina puede acelerar la recuperación tras un resfriado común, no se ha demostrado que prevenga las infecciones respiratorias.
            </p>
          </div>
        </div>
        <div @click="isHidden9=!isHidden9" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Comer ajo puede ayudar a prevenir la infección por el nuevo coronavirus?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden9' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden9' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden9'>
            <p class="marginParrafo">
              El ajo es un alimento saludable que puede tener algunas propiedades antimicrobianas. Sin embargo, no se han obtenido pruebas de que comerlo proteja contra el virus que causa el brote actual.
            </p>
          </div>
        </div>
        <div @click="isHidden10=!isHidden10" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">El nuevo coronavirus, ¿afecta solo a las personas de edad o también puede afectar a las más jóvenes?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden10' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden10' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden10'>
            <p class="marginParrafo">El nuevo coronavirus (2019-nCoV) puede infectar a personas de todas las edades, si bien se ha observado que las personas mayores y las que padecen algunas enfermedades (como el asma, la diabetes o las cardiopatías) tienen más probabilidades de enfermarse gravemente cuando adquieren la infección.
              La OMS aconseja a las personas de todas las edades que tomen medidas para protegerse del virus, por ejemplo, mediante una buena higiene de manos y respiratoria.
            </p>
          </div>
        </div>
        <div @click="isHidden11=!isHidden11" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Son eficaces los antibióticos para prevenir y tratar la infección por el nuevo coronavirus?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden11' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden11' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden11'>
            <p class="marginParrafo">
              No. Los antibióticos son eficaces contra las bacterias, pero no contra los virus.
              Puesto que el nuevo coronavirus (2019-nCoV) es un virus, no deben utilizarse antibióticos ni para prevenir ni para tratar la infección.
              Sin embargo, si resulta usted infectado por este virus y le hospitalizan, es posible que le administren antibióticos para que no contraiga infecciones bacterianas.

            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="centrado">
      <md-button class="md-icon-button sinMargin1">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona1}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin1">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona2}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin1">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona3}" :icon="['fa', 'circle']"/>
      </md-button>
    </div>
    <div class="marginGlobal">
      <md-button class="md-raised botonFull2" @click="comprobarEstado()">Continuar</md-button>
    </div>
    
  </md-content>
  </div>
</template>

<script>
/** 
 * Copyright 2020, Ingenia, S.A.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * @author jamartin@ingenia.es
 */
export default {
  name: 'mitos',
    data: () => ({
      isHidden: false,
      isHidden1: false,
      isHidden2: false,
      isHidden3: false,
      isHidden4: false,
      isHidden5: false,
      isHidden6: false,
      isHidden7: false,
      isHidden8: false,
      isHidden9: false,
      isHidden10: false,
      isHidden11: false,
      isHiddenZona1: true,
      isHiddenZona2: false,
      isHiddenZona3: false,
    }),
    methods: {
      continuar() {
        this.$router.push("/info_cartas");
      },
      comprobarEstado(){
        if(this.isHiddenZona1){
          this.isHiddenZona1=!this.isHiddenZona1
          this.isHiddenZona2=!this.isHiddenZona2
        }else if(this.isHiddenZona2){
          this.isHiddenZona2=!this.isHiddenZona2
          this.isHiddenZona3=!this.isHiddenZona3
        }else if(this.isHiddenZona3){
          this.isHiddenZona3=!this.isHiddenZona3
          this.isHiddenZona1=!this.isHiddenZona1
        }
      }
    }
}
</script>

<style lang="css" scoped>

.negrita {
  font-weight:bold;
  margin: 10px;
}
.relativo{
  position: relative;
  margin-bottom: 6px;
}
.left{
    float: left;
}
.naranjaCabecera{
  background-color: #FCCA75;
}
.right{
    float: right;
    margin-right: 20px;
    margin-top:10px;
    margin-bottom: 5px;
}

.clearfix{
    clear: both;
}
.botonFull{
  width: 100%;
   margin: 0 auto;
  padding: 0px;
  background-color:#FCCA75 !important;
}
.centrado{
  text-align: center;
}
.iconoSize1{
  font-size: 8px !important;
}
.sinMargin1{
  margin:-8px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.vertical-centerDown {
  margin: 0;
  position: absolute;
  top: 22px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.flechaSinColor{
  font-size: 20px;
}
.botonFull2{
  width: 96%;
  margin: 6px;
  background-color:#FCCA75 !important;
  text-transform:none !important;
  justify-content: end !important;
}
.marginTitulo{
  margin-left: 9px;
  max-width: 85%;
  line-height: 20px;
}
.naranjaParrafo{
  background-color: #FFFBF1 !important;
  margin-top: -12px;
}
.marginParrafo{
  margin:6px;
  padding-bottom: 10px;
  padding: 6px;
}
.sinMargin{
  margin:0px;
}
.orange{
  color:#ffa500 !important;
}
.iconoFoto{
  font-size: 8px;
  color:gray;
}
</style>
