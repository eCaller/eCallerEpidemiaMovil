![cabecera_readme](/docs/img/cabecera_readme.png)

[![logo](/docs/img/logo.png)](https://www.ingenia.es)

## Introducción

eCaller Epidemias es una solución software desarrollada por Ingenia (https://www.ingenia.es), al margen de su línea de productos eCaller Emergencias (https://www.ingenia.es/productos/ecaller-emergencias/) y eCaller Ambulancias (https://www.ingenia.es/productos/ecaller-ambulancias/), que ha sido liberada como solución Open Source y licencia GNU GPL v3.0 (https://www.gnu.org/licenses/gpl-3.0.html).

## ¿A quién va dirigida esta solución?

Esta solución ha sido concebida para aquellas empresas, organizaciones, entidades o instituciones públicas y privadas del ámbito sanitario que necesiten disponer de herramientas orientadas a conocer la magnitud y el grado de evolución de los brotes epidémicos de COVID-19 e implementar las acciones necesarias para su contención en una región determinada. En este sentido, la solución suministra un esquema de trabajo basado en los siguientes procesos:

* Detección e identificación de casos sospechosos.
* Gestión, coordinación y seguimiento de las acciones a realizar para cada uno de los casos sospechosos.
* Representación, monitorización y cuantificación del grado de evolución de los brotes epidémicos sobre una región determinada.

## Beneficios

Una implementación coordinada de estos tres procesos permitirá a las distintas organizaciones sanitarias obtener una visión macro y micro de la magnitud de los brotes, conocer individualmente el estado de cada uno de los casos detectados, así como servir de base para orientar los esfuerzos a la implementación de medidas de contención y erradicación de los focos de transmisión.

## Componentes de la solución software

eCaller Epidemias está constituida por dos componentes software:

* **`App móvil`**. Es una herramienta cuyo uso está destinado a los ciudadanos. Los objetivos que se persiguen con su utilización son los siguientes:
    1. Descargar de un elevado volumen de llamadas a los centros de coordinación de las organizaciones sanitarias.
    2. Facilitar al ciudadano un mecanismo sencillo de auto-evaluación para conocer si presenta algún síntoma compatible con el desarrollo de la enfermedad vírica.
    3. Suministrar a cualquier ciudadano una herramienta ágil para comunicar a las organizaciones sanitarias de la posibilidad real de haber contraído el virus.
    4. Dar a conocer a las organizaciones sanitarias los ciudadanos que manifiestan síntomas compatibles con el desarrollo de la enfermedad virica.


* **`Aplicación web`**. Esta herramienta, que es utilizada por personal de la organización sanitaria, ha sido diseñada para cumplir los siguientes objetivos:
    1. Proporcionar un entorno de trabajo para registrar los casos sospechosos notificados por los ciudadanos desde la app móvil.
    2. Disponer de una herramienta centralizada para organizar las citas con los usuarios sospechosos, que deben ser sometidos al test clínico de detección de la enfermedad.
    3. Facilitar un entorno de trabajo con el propósito de registrar información de seguimiento sobre la evolución de cada uno de los casos.
    4. Medición cualitativa y cuantitativamente del grado de evolución de la enfermedad.
    5. Identificación de las zonas de riesgo.


## Instalación
1. Clonar el repositorio en una carpeta local

    * `git clone  https://github.com/eCaller/eCallerEpidemiaMovil.git`
  
    * `cd eCallerEpidemiasMovil`
  
2. Instalación librería para el proyecto Vue
  
    * `npm install`

3. Instalación librería para el proyecto Cordova
    * `cd src-cordova`
    * `npm install`
    * `npm run add-android`

4. Configuración entorno
    * Editar el fichero src/entorno.js con los valores correctos para el entorno de ejecución. **API_MOVIL** debe coincidir con la que se configure en el backend. **API_KEY** debe ser una api key válida de **Google**.

## Ejecución en local
Como requerimiento antes de ejecutar la aplicación debe instalarse y configurarse el proyecto: [eCallerEpidemiaBackEnd](https://github.com/eCaller/eCallerEpidemiaBackEnd/)

Antes de la ejecución es necesario disponer del SDK de Android.

1. Ejecución en modo desarrollo

    * `npm run cordova-serve-android`

## Crear apk firmada
* Dentro de **src-cordova/platform/android** agregar un fichero con el nombre **release-signing.properties** con las siguientes variables:
    * storeFile= Path que apunte al almacén de claves
    * storeType= Tipo de contenedor, por ejemplo jks
    * keyAlias= Alias del certificado
    * keyPassword= Contraseña del certificado
    * storePassword= Contraseña del contenedor
* `npm run cordova-build-android`

## Repositorios

* **`App móvil`**.
    - [eCallerEpidemiaMovil](https://github.com/eCaller/eCallerEpidemiaMovil/)

* **`Aplicación web`**.
    - [eCallerEpidemiaWeb](https://github.com/eCaller/eCallerEpidemiaWeb/)
    - [eCallerEpidemiaBackEnd](https://github.com/eCaller/eCallerEpidemiaBackEnd/)

## Descripción funcional

La documentación funcional de la solución software se encuentra disponible en el enlace [Wiki-ReferenciaFuncional](https://github.com/eCaller/eCallerEpidemiaMovil/wiki/documentación-funcional).

## Descripción técnica

La documentación técnica de la solución software se encuentra disponible en el enlace [Wiki-ReferenciaTecnica](https://github.com/eCaller/eCallerEpidemiaMovil/wiki/documentación-técnica).

## Licencia

GNU GPL v3.0 (https://www.gnu.org/licenses/gpl-3.0.html).

