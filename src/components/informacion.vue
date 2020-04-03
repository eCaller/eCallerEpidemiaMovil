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
    <div class="marginGlobal" v-show='isHiddenZona1'>
      <div @click="isHidden=!isHidden" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Qué es un coronavirus?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden'>
            <p class="marginParrafo">Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. En los humanos, se sabe que varios coronavirus causan infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus COVID-19.
            </p>
          </div>
      </div>
      <div @click="isHidden1=!isHidden1" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Qué es la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden1' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden1' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden1'>
            <p class="marginParrafo">La COVID-19 es la enfermedad infecciosa causada por el coronavirus que se ha descubierto más recientemente. Tanto el nuevo virus como la enfermedad eran desconocidos antes de que estallara el brote en Wuhan (China) en diciembre de 2019.</p>
          </div>
      </div>  
      <div @click="isHidden2=!isHidden2" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Cuáles son los síntomas de la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden2' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden2' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden2'>
            <p class="marginParrafo">
              Los síntomas más comunes de la COVID-19 son fiebre, cansancio y tos seca. Algunos pacientes pueden presentar dolores, congestión nasal, rinorrea, dolor de garganta o diarrea. Estos síntomas suelen ser leves y aparecen de forma gradual. Algunas personas se infectan, pero no desarrollan ningún síntoma y no se encuentran mal. La mayoría de las personas (alrededor del 80%) se recupera de la enfermedad sin necesidad de realizar ningún tratamiento especial. Alrededor de 1 de cada 6 personas que contraen la COVID-19 desarrolla una enfermedad grave y tiene dificultad para respirar. Las personas mayores y las que padecen afecciones médicas subyacentes, como hipertensión arterial, problemas cardiacos o diabetes, tienen más probabilidades de desarrollar una enfermedad grave. En torno al 2% de las personas que han contraído la enfermedad han muerto. Las personas que tengan fiebre, tos y dificultad para respirar deben buscar atención médica.
            </p>
          </div>
      </div>
      <div @click="isHidden3=!isHidden3" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Cómo se propaga la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden3' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden3' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden3'>
            <p class="marginParrafo">
              Una persona puede contraer la COVID-19 por contacto con otra que esté infectada por el virus. La enfermedad puede propagarse de persona a persona a través de las gotículas procedentes de la nariz o la boca que salen despedidas cuando una persona infectada tose o exhala. Estas gotículas caen sobre los objetos y superficies que rodean a la persona, de modo que otras personas pueden contraer la COVID-19 si tocan estos objetos o superficies y luego se tocan los ojos, la nariz o la boca. También pueden contagiarse si inhalan las gotículas que haya esparcido una persona con COVID-19 al toser o exhalar. Por eso es importante mantenerse a más de 1 metro (3 pies) de distancia de una persona que se encuentre enferma.
              La OMS está estudiando las investigaciones en curso sobre las formas de propagación de la COVID-19 y seguirá informando sobre los resultados actualizados.
            </p>
          </div>
      </div>
    </div>
    <div class="marginGlobal" v-show='isHiddenZona2'>
      <div @click="isHidden4=!isHidden4" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Puede transmitirse a través del aire el virus causante de la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden4' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden4' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden4'>
            <p class="marginParrafo">
              Los estudios realizados hasta la fecha apuntan a que el virus causante de la COVID-19 se transmite principalmente por contacto con gotículas respiratorias, más que por el aire. Véase la respuesta anterior a la pregunta «¿Cómo se propaga la COVID-19?»
            </p>
          </div>
      </div>
      <div @click="isHidden5=!isHidden5" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Es posible contagiarse de COVID-19 por contacto con una persona que no presente ningún síntoma?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden5' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden5' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden5'>
            <p class="marginParrafo">
              La principal forma de propagación de la enfermedad es a través de las gotículas respiratorias expelidas por alguien al toser. El riesgo de contraer la COVID-19 de alguien que no presente ningún síntoma es muy bajo. Sin embargo, muchas personas que contraen la COVID-19 solo presentan síntomas leves. Esto es particularmente cierto en las primeras etapas de la enfermedad. Por lo tanto, es posible contagiarse de alguien que, por ejemplo, solamente tenga una tos leve y no se sienta enfermo. La OMS está estudiando las investigaciones en curso sobre el periodo de transmisión de la COVID-19 y seguirá informando sobre los resultados actualizados.
            </p>
          </div>
      </div>
      <div @click="isHidden6=!isHidden6" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Es posible contagiarse de COVID-19 por contacto con las heces de una persona que padezca la enfermedad?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden6' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden6' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden6'>
            <p class="marginParrafo">
              El riesgo de contraer la COVID-19 por contacto con las heces de una persona infectada parece ser bajo. Aunque las investigaciones iniciales apuntan a que el virus puede estar presente en algunos casos en las heces, la propagación por esta vía no es uno de los rasgos característicos del brote. La OMS está estudiando las investigaciones en curso sobre las formas de propagación de la COVID-19 y seguirá informando sobre los nuevos resultados. No obstante, se trata de un riesgo y por lo tanto es una razón más para lavarse las manos con frecuencia, después de ir al baño y antes de comer.
            </p>
          </div>
      </div>
      <div @click="isHidden7=!isHidden7" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Qué probabilidades hay de que contraiga la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden7' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden7' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden7'>
            <p class="marginParrafo">
              El riesgo depende del lugar donde se encuentre usted y, más concretamente, de si se está produciendo un brote de COVID-19 en dicho lugar.
              Para la mayoría de las personas que se encuentran en la mayor parte de los lugares, el riesgo de contraer esta enfermedad continúa siendo bajo. Sin embargo, sabemos que hay algunos lugares (ciudades o zonas) donde se está propagando y donde el riesgo de contraerla es más elevado, tanto para las personas que viven en ellas como para las que las visitan. Los gobiernos y las autoridades sanitarias están actuando con determinación cada vez que se detecta un nuevo caso de COVID-19. Es importante que todos respetemos las restricciones relativas a los viajes, los desplazamientos y las concentraciones multitudinarias de personas aplicables a cada lugar en concreto. Si cooperamos con las medidas de lucha contra la enfermedad, reduciremos el riesgo que corremos cada uno de nosotros de contraerla o de propagarla.
              Como se ha comprobado en China y en otros países, es posible detener los brotes de COVID-19 y poner fin a su transmisión. No obstante, la gran rapidez con que pueden aparecer nuevos brotes nos obliga a ser conscientes de la situación en los lugares donde nos encontramos o donde tengamos intención de ir. La OMS publica cada día actualizaciones sobre la situación de la COVID-19 en el mundo, que se pueden consultar, en inglés, en esta
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/">página</a>.
            </p>
          </div>
      </div>
    </div>
    <div class="marginGlobal" v-show='isHiddenZona3'>
      <div @click="isHidden8=!isHidden8" class="relativo md-elevation-2 naranjaCabecera">
      
        <div class="left marginTitulo">
          <p class="negrita">¿Debo preocuparme por la COVID-19?</p>
        </div>
        <div class="rightFlecha">
          <font-awesome-icon v-show='!isHidden8' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden8' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
        </div>
        <div class="clearfix"></div>
        <div class=" naranjaParrafo" v-show='isHidden8'>
          <p class="marginParrafo">
            Por lo general, los síntomas de la COVID-19 son leves, sobre todo en los niños y los adultos jóvenes. No obstante, también pueden ser graves y obligan a hospitalizar a alrededor de uno de cada cinco infectados. Por consiguiente, es bastante normal preocuparse por los efectos que el brote de COVID-19 puede tener en nosotros y en nuestros seres queridos.
            Esta preocupación debe servirnos para adoptar medidas de protección para nosotros, nuestros seres queridos y las comunidades donde vivimos. La medida principal y más importante es la higiene regular y completa de las manos y de las vías respiratorias. En segundo lugar, es importante mantenerse informado y seguir los consejos de las autoridades sanitarias locales, como los relativos a los viajes, los desplazamientos y los eventos donde se pueda concentrar un gran número de personas. Puede consultar los consejos sobre protección en esta
            <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public">página</a>.
          </p>
        </div>
      </div>
      <div @click="isHidden9=!isHidden9" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Quién corre riesgo de desarrollar una enfermedad grave?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden9' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden9' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden9'>
            <p class="marginParrafo">
              Todavía tenemos mucho por aprender sobre la forma en que la COVID-2019 afecta a los humanos, pero parece que las personas mayores y las que padecen afecciones médicas preexistentes (como hipertensión arterial, enfermedades cardiacas o diabetes) desarrollan casos graves de la enfermedad con más frecuencia que otras.
            </p>
          </div>
      </div>
      <div @click="isHidden10=!isHidden10" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Son eficaces los antibióticos para prevenir o tratar la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden10' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden10' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden10'>
            <p class="marginParrafo">
              No. Los antibióticos no son eficaces contra los virus, solo contra las infecciones bacterianas. La COVID-19 está causada por un virus, de modo que los antibióticos no sirven frente a ella. No se deben usar antibióticos como medio de prevención o tratamiento de la COVID-19. Solo deben usarse para tratar una infección bacteriana siguiendo las indicaciones de un médico.
            </p>
          </div>
      </div>
      <div @click="isHidden11=!isHidden11" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Existen medicamentos o terapias que permitan prevenir o curar la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden11' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden11' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden11'>
            <p class="marginParrafo">
              Aunque algunos remedios occidentales, tradicionales o caseros pueden proporcionar confort y aliviar los síntomas de la COVID-19, no hay pruebas de que los medicamentos actuales puedan prevenir o curar la enfermedad. La OMS no recomienda la automedicación, en particular con antibióticos, para prevenir o curar la COVID-19. Hay varios ensayos clínicos en curso con medicamentos occidentales y tradicionales. La OMS facilitará información actualizada tan pronto como los resultados de los ensayos clínicos estén disponibles.
            </p>
          </div>
      </div>
      
    </div>
    <div class="marginGlobal" v-show='isHiddenZona4'>
      <div @click="isHidden12=!isHidden12" class="relativo md-elevation-2 naranjaCabecera">
        
          <div class="left marginTitulo">
            <p class="negrita">¿Existe alguna vacuna, medicamento o tratamiento para la COVID-19?</p>
          </div>
          <div class="rightFlecha">
            <font-awesome-icon v-show='!isHidden12' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
            <font-awesome-icon v-show='isHidden12' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
          </div>
          <div class="clearfix"></div>
          <div class=" naranjaParrafo" v-show='isHidden12'>
            <p class="marginParrafo">
              Todavía no. Hasta la fecha, no hay ninguna vacuna ni medicamento antiviral específico para prevenir o tratar la COVID-2019. Sin embargo, los afectados deben recibir atención de salud para aliviar los síntomas. Las personas que presentan casos graves de la enfermedad deben ser hospitalizadas. La mayoría de los pacientes se recuperan con la ayuda de medidas de apoyo.
              Se están investigando posibles vacunas y distintos tratamientos farmacológicos específicos. Hay ensayos clínicos en curso para ponerlos a prueba. La OMS está coordinando los esfuerzos dirigidos a desarrollar vacunas y medicamentos para prevenir y tratar la COVID-19.
              Las formas más eficaces de protegerse a uno mismo y a los demás frente a la COVID-19 son: lavarse las manos con frecuencia, cubrirse la boca con el codo o con un pañuelo de papel al toser y mantener una distancia de al menos 1 metro (3 pies) con las personas que tosen o estornudan. (Véase ¿Qué puedo hacer para protegerme y prevenir la propagación de la enfermedad?).
            </p>
          </div>
      </div>
      <div @click="isHidden13=!isHidden13" class="relativo md-elevation-2 naranjaCabecera">
      
        <div class="left marginTitulo">
          <p class="negrita">¿Son lo mismo la COVID-19 y el SRAS?</p>
        </div>
        <div class="rightFlecha">
          <font-awesome-icon v-show='!isHidden13' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
          <font-awesome-icon v-show='isHidden13' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
        </div>
        <div class="clearfix"></div>
        <div class=" naranjaParrafo" v-show='isHidden13'>
          <p class="marginParrafo">
            No. El genoma del virus que causa la COVID-19 y el del responsable del síndrome respiratorio agudo severo (SRAS) son similares, pero no iguales. El SRAS es más letal pero mucho menos infeccioso que la COVID-19. Desde 2003, no se han registrado brotes de SRAS en ningún lugar del mundo.ormas más eficaces de protegerse a uno mismo y a los demás frente a la COVID-19 son: lavarse las manos con frecuencia, cubrirse la boca con el codo o con un pañuelo de papel al toser y mantener una distancia de al menos 1 metro (3 pies) con las personas que tosen o estornudan. (Véase ¿Qué puedo hacer para protegerme y prevenir la propagación de la enfermedad?).
          </p>
        </div>
      </div>
      <div @click="isHidden14=!isHidden14" class="relativo md-elevation-2 naranjaCabecera">
      
        <div class="left marginTitulo">
          <p class="negrita">¿Cuánto dura el periodo de incubación de la COVID-19?</p>
        </div>
        <div class="rightFlecha">
          <font-awesome-icon v-show='!isHidden14' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
          <font-awesome-icon v-show='isHidden14' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
        </div>
        <div class="clearfix"></div>
        <div class=" naranjaParrafo" v-show='isHidden14'>
          <p class="marginParrafo">
            El «período de incubación» es el tiempo que transcurre entre la infección por el virus y la aparición de los síntomas de la enfermedad. La mayoría de las estimaciones respecto al periodo de incubación de la COVID-19 oscilan entre 1 y 14 días, y en general se sitúan en torno a cinco días. Estas estimaciones se irán actualizando a medida que se tengan más datos.
          </p>
        </div>
      </div>
      <div @click="isHidden15=!isHidden15" class="relativo md-elevation-2 naranjaCabecera">
      
        <div class="left marginTitulo">
          <p class="negrita">¿Pueden los humanos contraer el virus de la COVID-19 por contacto con un animal?</p>
        </div>
        <div class="rightFlecha">
          <font-awesome-icon v-show='!isHidden15' class="material-icons flechaSinColor vertical-center" :icon="['fa', 'angle-right']"/>
          <font-awesome-icon v-show='isHidden15' class="material-icons flechaSinColor vertical-centerDown" :icon="['fa', 'angle-down']"/>
        </div>
        <div class="clearfix"></div>
        <div class=" naranjaParrafo" v-show='isHidden15'>
          <p class="marginParrafo">
            Los coronavirus son una extensa familia de virus que son comunes entre los murciélagos y otros animales. En raras ocasiones las personas se infectan por estos virus, que luego pueden propagarse a otras personas. Por ejemplo, el SRAS-CoV iba asociado a las civetas y el MERS-CoV se transmite a través de los dromedarios. Todavía no se ha confirmado el posible origen animal de la COVID-19. 
            Como medida de protección al visitar mercados de animales vivos o en otras situaciones parecidas, evite el contacto directo con los animales y las superficies que estén en contacto con ellos. Asegúrese de que en todo momento se observen prácticas adecuadas de higiene de los alimentos. Manipule con cuidado la carne, la leche o los órganos de animales crudos para evitar la contaminación de alimentos no cocinados y evite el consumo de productos animales crudos o poco cocinados.
          </p>
        </div>
      </div>
    </div>
    <div class="centrado">
      <md-button class="md-icon-button sinMargin">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona1}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona2}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona3}" :icon="['fa', 'circle']"/>
      </md-button>
      <md-button class="md-icon-button sinMargin">
        <font-awesome-icon class="iconoFoto" :class="{ 'orange':isHiddenZona4}" :icon="['fa', 'circle']"/>
      </md-button>
    </div>

    <div>
      <md-button class="md-raised botonFull2" @click="comprobarEstado()">Siguiente</md-button>
    </div> 

    
    <!-- 
      
      <h2>¿Mi mascota me puede contagiar la COVID-19?</h2>
      Aunque ha habido un caso de un perro infectado en Hong Kong, hasta la fecha no hay pruebas de que un perro, un gato o cualquier mascota pueda transmitir la COVID-19. La COVID-19 se propaga principalmente a través de las gotículas producidas por una persona infectada al toser, estornudar o hablar. Para protegerse a sí mismo, lávese las manos a fondo frecuentemente.
      La OMS se mantiene al tanto de las últimas investigaciones a este respecto y otras cuestiones relacionadas con la COVID-19 y proporcionará información actualizada de las conclusiones que se vayan obteniendo. 
      <h2>¿Cuánto tiempo sobrevive el virus en una superficie?</h2>
      No se sabe con certeza cuánto tiempo sobrevive el virus causante de la COVID-19 en una superficie, pero parece comportarse como otros coronavirus. Los estudios realizados (incluida la información preliminar disponible sobre el virus de la COVID-19) indican que los coronavirus pueden subsistir en una superficie desde unas pocas horas hasta varios días. El tiempo puede variar en función de las condiciones (por ejemplo, el tipo de superficie, la temperatura o la humedad del ambiente).
      Si cree que una superficie puede estar infectada, límpiela con un desinfectante común para matar el virus y protegerse de este modo a usted mismo y a los demás. Lávese las manos con un desinfectante a base de alcohol o con agua y jabón. Evite tocarse los ojos, la boca o la nariz.
      
      <h2>¿Es seguro recibir un paquete de una zona en la que se hayan notificado casos de COVID-19?</h2>
      Sí. La probabilidad de que una persona infectada contamine artículos comerciales es baja, y el riesgo de contraer el virus causante de la COVID-19 por contacto con un paquete que haya sido manipulado, transportado y expuesto a diferentes condiciones y temperaturas también es bajo.
      <h2>¿Hay algo que no deba hacer?</h2>
      Las siguientes medidas NO SON eficaces contra la COVID-2019 y pueden resultar perjudiciales:
      <ul>
        <li>
          <span>Fumar</span>
        </li>
        <li>
          <span>Llevar varias mascarillas</span>
        </li>
        <li>
          <span>Tomar antibióticos (Véase ¿Existen medicamentos o terapias que permitan prevenir o curar la COVID-19?)</span>
        </li>
      </ul>
      En cualquier caso, si tiene fiebre, tos y dificultad para respirar, trate de obtener atención médica lo antes posible para reducir el riesgo de desarrollar una infección más grave, y asegúrese de informar a su dispensador de atención de salud acerca de sus viajes recientes.
      <h2>¿Qué puedo hacer para protegerme y prevenir la propagación de la enfermedad?</h2>
      Manténgase al día de la información más reciente sobre el brote de COVID-19, a la que puede acceder en el sitio web de la OMS y a través de las autoridades de salud pública pertinentes a nivel nacional y local. Se han registrado casos en muchos países de todo el mundo, y en varios de ellos se han producido brotes. Las autoridades chinas y las de otros países han conseguido enlentecer o detener el avance de los brotes, pero la situación es impredecible y es necesario comprobar con regularidad las noticias más recientes.
      Hay varias precauciones que se pueden adoptar para reducir la probabilidad de contraer o de contagiar la COVID-19:

      <ul>
        <li>
          <span>
            Lávese las manos a fondo y con frecuencia usando un desinfectante a base de alcohol o con agua y jabón.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Lavarse las manos con agua y jabón o usando un desinfectante a base de alcohol mata los virus que pueda haber en sus manos.

        <li>
          <span>
            Mantenga una distancia mínima de 1 metro (3 pies) entre usted y cualquier persona que tosa o estornude.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Cuando alguien tose o estornuda, despide por la nariz o por la boca unas gotículas de líquido que pueden contener el virus. Si está demasiado cerca, puede respirar las gotículas y con ellas el virus de la COVID-19, si la persona que tose tiene la enfermedad.

        <li>
          <span>
            Evite tocarse los ojos, la nariz y la boca
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Las manos tocan muchas superficies y pueden recoger virus. Una vez contaminadas, las manos pueden transferir el virus a los ojos, la nariz o la boca. Desde allí, el virus puede entrar en su cuerpo y causarle la enfermedad.

        <li>
          <span>
            Tanto usted como las personas que les rodean deben asegurarse de mantener una buena higiene de las vías respiratorias. Eso significa cubrirse la boca y la nariz con el codo doblado o con un pañuelo de papel al toser o estornudar. El pañuelo usado debe desecharse de inmediato.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Los virus se propagan a través de las gotículas. Al mantener una buena higiene respiratoria está protegiendo a las personas que le rodean de virus como los del resfriado, la gripe y la COVID-19.

        <li>
          <span>
            Permanezca en casa si no se encuentra bien. Si tiene fiebre, tos y dificultad para respirar, busque atención médica y llame con antelación. Siga las instrucciones de las autoridades sanitarias locales.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Las autoridades nacionales y locales dispondrán de la información más actualizada sobre la situación en su zona. Llamar con antelación permitirá que su dispensador de atención de salud le dirija rápidamente hacia el centro de salud adecuado. Esto también le protegerá a usted y ayudará a prevenir la propagación de virus y otras infecciones.

        <li>
          <span>
            Manténgase informado sobre las últimas novedades en relación con la COVID-19. Siga los consejos de su dispensador de atención de salud, de las autoridades sanitarias pertinentes a nivel nacional y local o de su empleador sobre la forma de protegerse a sí mismo y a los demás ante la COVID-19.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Las autoridades nacionales y locales dispondrán de la información más actualizada acerca de si la COVID-19 se está propagando en su zona. Son los interlocutores más indicados para dar consejos sobre lo que debe hacer la gente de su zona para protegerse.

        <li>
          <span>
            Consulte las noticias más recientes sobre las zonas de mayor peligro (es decir, las ciudades y lugares donde la enfermedad se está propagando más extensamente). Si le es posible, evite desplazarse a estas zonas, sobre todo si su edad es avanzada o tiene usted diabetes, cardiopatías o neumopatías.
          </span>
        </li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Estas precauciones se deben adoptar en estas zonas porque la probabilidad de contraer la COVID-19 es más elevada.
      </ul>

      <h2>Medidas de protección para las personas que se encuentran en zonas donde se está propagando la COVID-19 o que las han visitado recientemente (en los últimos 14 días)</h2>
      
      <ul>
        <li><span>Siga las orientaciones antes expuestas (Medidas de protección para todas las personas)</span></li>
        <li><span>Permanezca en casa si empieza a encontrarse mal, aunque se trate de síntomas leves como dolor de cabeza, fiebre ligera (37,3 oC o más) y rinorrea leve, hasta que se recupere. Si le resulta indispensable salir de casa o recibir una visita (por ejemplo, para conseguir alimentos), póngase una mascarilla para no infectar a otras personas.</span></li>
        <p class="negrita everythingOnOneLine">¿Por qué? </p> Evitar los contactos con otras personas y las visitas a centros médicos permitirá que estos últimos funcionen con mayor eficacia y ayudará a protegerle a usted y a otras personas de posibles infecciones por el virus de la COVID-19 u otros.
        <li><span>Si tiene fiebre, tos y dificultad para respirar, busque rápidamente asesoramiento médico, ya que podría deberse a una infección respiratoria u otra afección grave. Llame con antelación e informe a su dispensador de atención de salud sobre cualquier viaje que haya realizado recientemente o cualquier contacto que haya mantenido con viajeros.</span></li>
        
        <p class="negrita everythingOnOneLine">¿Por qué? </p>
        Llamar con antelación permitirá que su dispensador de atención de salud le dirija rápidamente hacia el centro de salud adecuado. Esto ayudará también a prevenir la propagación de virus y otras infecciones.</p>
      
      </ul>
      
      <h2>Enlaces para obtener más información</h2>
      Sitio web sobre la COVID-19: <a href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019</a><br>
      Consejos de la OMS para viajar: <a href="https://www.who.int/ith/es/">https://www.who.int/ith/es/ </a>-->

    
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
  name: 'informacion',
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
      isHidden12: false,
      isHidden13: false,
      isHidden14: false,
      isHidden15: false,
      isHiddenZona1:true,
      isHiddenZona2:false,
      isHiddenZona3:false,
      isHiddenZona4:false,
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
          this.isHiddenZona4=!this.isHiddenZona4
        }else if(this.isHiddenZona4){
          this.isHiddenZona4=!this.isHiddenZona4
          this.isHiddenZona1=!this.isHiddenZona1
        }
      }

    }
}
</script>

<style lang="css" scoped>
.centrado{
  text-align: center;
}
.negrita {
  font-weight:bold;
  margin: 10px;
}
.everythingOnOneLine {
 display: inline-block;
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
.naranjaParrafo{
  background-color: #FFFBF1 !important;
  margin-top: -12px;
}
.right{
    float: right;
    margin-right: 20px;
    margin-top:10px;
    margin-bottom: 5px;
}
.rightFlecha{
  float: right;
  margin-right: 30px;
  margin-top:10px;
  margin-bottom: 5px;
}
.clearfix{
    clear: both;
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
.marginTitulo{
  margin-left: 9px;
  max-width: 85%;
  line-height: 20px;
}
.marginParrafo{
  margin:6px;
  padding-bottom: 10px;
  padding: 6px;
}
.botonFull2{
  width: 100%;
  margin: 0px;
  background-color:#FCCA75 !important;
  text-transform:none !important;
  justify-content: end !important;
}
.iconoSize{
  font-size: 10px !important;
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
