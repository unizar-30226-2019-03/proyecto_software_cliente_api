# swagger_unicast

SwaggerUnicast - JavaScript client for swagger_unicast
Documento de la API de Unicast
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.6
- Package version: 1.0.6
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install swagger_unicast --save
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/unizar-30226-2019-03/proyecto_software_cliente_api
then install it via:

```shell
    npm install unizar-30226-2019-03/proyecto_software_cliente_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwaggerUnicast = require('swagger_unicast');

var defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new SwaggerUnicast.SubjectApi()
var subject = new SwaggerUnicast.Subject(); // {Subject} Asignatura a añadir
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addSubject(subject, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerUnicast.SubjectApi* | [**addSubject**](docs/SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
*SwaggerUnicast.SubjectApi* | [**deleteUserFromSubject**](docs/SubjectApi.md#deleteUserFromSubject) | **DELETE** /subjects/{subject_id}/users/{user_id} | Elimina el usuario de la relacion con asignatura
*SwaggerUnicast.SubjectApi* | [**getSubjects**](docs/SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
*SwaggerUnicast.SubjectApi* | [**putUser**](docs/SubjectApi.md#putUser) | **PUT** /subjects/{id}/users | Relacionar un usuario con una asignatura (tanto profesores como alumnos)
*SwaggerUnicast.SubjectApi* | [**updateSubject**](docs/SubjectApi.md#updateSubject) | **PATCH** /subjects/{id} | Actualizar una asignatura
*SwaggerUnicast.UniversityApi* | [**addUniversity**](docs/UniversityApi.md#addUniversity) | **POST** /universities | Crear nueva universidad
*SwaggerUnicast.UniversityApi* | [**findUniversityStartsWith**](docs/UniversityApi.md#findUniversityStartsWith) | **GET** /universities/search/nameStartsWith | Busca universidades que empiecen por el nombre dado
*SwaggerUnicast.UniversityApi* | [**getUniversities**](docs/UniversityApi.md#getUniversities) | **GET** /universities | Lista de universidades
*SwaggerUnicast.UniversityApi* | [**updateUniversity**](docs/UniversityApi.md#updateUniversity) | **PATCH** /universities/{id} | Actualizar una universidad
*SwaggerUnicast.UserApi* | [**addUser**](docs/UserApi.md#addUser) | **POST** /public/register | Registro de un nuevo usuario en el sistema
*SwaggerUnicast.UserApi* | [**authUser**](docs/UserApi.md#authUser) | **POST** /public/authenticate | Autentificacion de usuarios
*SwaggerUnicast.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /users/{id} | Obtener un usuario
*SwaggerUnicast.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **POST** /users/update | Actualizacion de un usuario en el sistema
*SwaggerUnicast.VideoApi* | [**addVideo**](docs/VideoApi.md#addVideo) | **POST** /upload/video | Subida de un nuevo video
*SwaggerUnicast.VideoApi* | [**getVideos**](docs/VideoApi.md#getVideos) | **GET** /videos | Lista de videos


## Documentation for Models

 - [SwaggerUnicast.GetResponse](docs/GetResponse.md)
 - [SwaggerUnicast.GetResponseLinks](docs/GetResponseLinks.md)
 - [SwaggerUnicast.GetUser](docs/GetUser.md)
 - [SwaggerUnicast.HalLink](docs/HalLink.md)
 - [SwaggerUnicast.InlineObject](docs/InlineObject.md)
 - [SwaggerUnicast.InlineObject1](docs/InlineObject1.md)
 - [SwaggerUnicast.InlineObject2](docs/InlineObject2.md)
 - [SwaggerUnicast.PaginationPage](docs/PaginationPage.md)
 - [SwaggerUnicast.PostUser](docs/PostUser.md)
 - [SwaggerUnicast.SelfLink](docs/SelfLink.md)
 - [SwaggerUnicast.SelfLinkLinks](docs/SelfLinkLinks.md)
 - [SwaggerUnicast.Subject](docs/Subject.md)
 - [SwaggerUnicast.SubjectGetEmbedded](docs/SubjectGetEmbedded.md)
 - [SwaggerUnicast.SubjectGetResponse](docs/SubjectGetResponse.md)
 - [SwaggerUnicast.SubjectWithLinks](docs/SubjectWithLinks.md)
 - [SwaggerUnicast.Token](docs/Token.md)
 - [SwaggerUnicast.University](docs/University.md)
 - [SwaggerUnicast.UniversityFindByNameStartsWith](docs/UniversityFindByNameStartsWith.md)
 - [SwaggerUnicast.UniversityGetEmbedded](docs/UniversityGetEmbedded.md)
 - [SwaggerUnicast.UniversityGetEmbeddedEmbedded](docs/UniversityGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.UniversityGetEmbeddedTest](docs/UniversityGetEmbeddedTest.md)
 - [SwaggerUnicast.UniversityGetEmbeddedTestEmbedded](docs/UniversityGetEmbeddedTestEmbedded.md)
 - [SwaggerUnicast.UniversityGetResponse](docs/UniversityGetResponse.md)
 - [SwaggerUnicast.UniversityLinks](docs/UniversityLinks.md)
 - [SwaggerUnicast.UniversityLinksLinks](docs/UniversityLinksLinks.md)
 - [SwaggerUnicast.UniversityWithLinks](docs/UniversityWithLinks.md)
 - [SwaggerUnicast.User](docs/User.md)
 - [SwaggerUnicast.UserLinks](docs/UserLinks.md)
 - [SwaggerUnicast.UserLinksLinks](docs/UserLinksLinks.md)
 - [SwaggerUnicast.VideoToUpload](docs/VideoToUpload.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)

