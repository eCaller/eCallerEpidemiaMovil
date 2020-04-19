![cabecera_readme](/docs/img/cabecera_readme.png)

[![logo](/docs/img/logo.png)](https://www.ingenia.es)

> [**Spanish** version](https://github.com/eCaller/eCallerEpidemiaMovil/)

## Introduction

eCaller Epidemias is a software solution developed by Ingenia (https://www.ingenia.es), as part of its eCaller Emergencias product range (https://www.ingenia.es/productos/ecaller-emergencias/) and eCaller Ambulancias (https://www.ingenia.es/productos/ecaller-ambulancias/) is licensed as an Open Source solution with licence number GNU GPL v3.0 (https://www.gnu.org/licenses/gpl-3.0.html).

## Who is this solution for?

This solution has been designed for those companies, organizations, entities or public and private institutions in the health sector that require tools in order to be informed of the extent and degree of the spread of COVID-19 outbreaks and implement the necessary actions for their containment in a given region. As a result, the solution provides a work scheme based on the following processes:

* Detection and identification of suspected cases.
* Management, coordination and monitoring of the actions to be carried out for each of the suspected cases.
* Representation, monitoring and quantification of the degree of the spread of outbreaks over a given region.

## Benefits

A coordinated implementation of these three processes will allow the different health organizations to obtain a macro and micro view of the extent of outbreaks, to be informed individually the status of each of the cases detected, and to serve as a basis for guiding efforts to implement containment measures and eradicate transmission hotspots.

## Software solution components

eCaller Epidemias consists of two software components:

* **`Mobile app`**. This is a tool is intended for the public. The objectives pursued by its use is as follows:
    1. In order to download a high volume of calls to the focal points of health organizations.
    2. Provide the public with a simple mechanism of self-assessment to know if they have any symptoms compatible with the development of the virus.
    3. Provide any member of the public with an agile tool to communicate to health organizations the real possibility of contracting the virus.
    4. To enable health organizations to identify members of the public who exhibit symptoms compatible with the development of the virus.

* **`Web application`**. This tool, used by staff of the healthcare organization, has been designed to meet the following objectives:
    1. Provide a working environment to record suspected cases reported by the public from the mobile app.
    2. Have a centralized tool to organize appointments with suspected users, who must undergo the clinical test for detecting the virus.
    3. Facilitate a working environment for the purpose of recording follow-up information on the extent of each case.
    4. Qualitative and quantitative measurement of the degree of the spread of the virus.
    5. Identification of risk zones.

## Installation

1. Clone the repository to a local folder:
    * `git clone  https://github.com/eCaller/eCallerEpidemiaMovil.git`
    * `cd eCallerEpidemiasMovil`

2. Library installation for the project Vue:
    * `npm install`

3. Library installation for the project Cordova:
    * `cd src-cordova`
    * `npm install`
    * `npm run add-android`

4. Setting environment:
    * Edit the src/environment.js file with the correct values for the runtime environment. **API_MOVIL** must match the one configured in the backend. **API_KEY** must be a valid **Google** API key.

## Local execution

As a requirement before running the application, the project must be installed and configured: [eCallerEpidemiaBackEnd](https://github.com/eCaller/eCallerEpidemiaBackEnd/blob/master/README-EN.md)

Before execution it is necessary to have the Android SDK.

1. Execution in development mode:
    * `npm run cordova-serve-android`

## Create signed apk

* Inside **src-cordova/platform/android** add a file with the name **release-signing.properties** with the following variables:         
    * storeFile= Path that points to the keystore
    * storeType= Container type, for example jks
    * keyAlias= Certificate aliases
    * keyPassword= Certificate password
    * storePassword= Container password

* `npm run cordova-build-android`

## Repositories

* **`Mobile app`**.
    - [eCallerEpidemiaMovil](https://github.com/eCaller/eCallerEpidemiaMovil/blob/master/README-EN.md)

* **`Web application`**.
    - [eCallerEpidemiaWeb](https://github.com/eCaller/eCallerEpidemiaWeb/blob/master/README-EN.md)
    - [eCallerEpidemiaBackEnd](https://github.com/eCaller/eCallerEpidemiaBackEnd/blob/master/README-EN.md)

## Functional description

The functional documentation of the software solution is available at the following link [Wiki-Functional description](https://github.com/eCaller/eCallerEpidemiaMovil/wiki/functional-description)

## Technical description

The technical documentation of the software solution is available at the following link [Wiki-Technical description](https://github.com/eCaller/eCallerEpidemiaMovil/wiki/technical-description)

## Licensing

GNU GPL v3.0 (https://www.gnu.org/licenses/gpl-3.0.html).
