# swagger_unicast

SwaggerUnicast - JavaScript client for swagger_unicast
Documento de la API de Unicast
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.3
- Package version: 1.1.3
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

var api = new SwaggerUnicast.CommentApi()
var text = "text_example"; // {String} 
var secsFromBeg = 56; // {Number} 
var videoId = 789; // {Number} 
var opts = {
  'commentRepliedToId': 789 // {Number} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addComment(text, secsFromBeg, videoId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerUnicast.CommentApi* | [**addComment**](docs/CommentApi.md#addComment) | **POST** /comments/add | Subida de un nuevo comentario
*SwaggerUnicast.CommentApi* | [**getCommentReplies**](docs/CommentApi.md#getCommentReplies) | **GET** /comments/{id}/commentReplies | Devuelve la lista de comentarios que responden al comentario dado
*SwaggerUnicast.CommentApi* | [**getCommentsByVideo**](docs/CommentApi.md#getCommentsByVideo) | **GET** /comments/search/video | Devuelve una lista de comentarios que pertenezcan al video dado
*SwaggerUnicast.CommentApi* | [**getRepliedToComment**](docs/CommentApi.md#getRepliedToComment) | **GET** /comments/{id}/commentRepliedTo | Devuelve el comentario al que responde el comentario dado
*SwaggerUnicast.DegreeApi* | [**addDegree**](docs/DegreeApi.md#addDegree) | **POST** /degrees | Crear nueva carrera
*SwaggerUnicast.DegreeApi* | [**findDegreesContainingName**](docs/DegreeApi.md#findDegreesContainingName) | **GET** /degrees/search/nameContaining | Busca carreras que contengan una string en el nombre
*SwaggerUnicast.DegreeApi* | [**findDegreesStartsWith**](docs/DegreeApi.md#findDegreesStartsWith) | **GET** /degrees/search/nameStartsWith | Busca carreras que empiecen por el nombre dado
*SwaggerUnicast.DegreeApi* | [**getDegrees**](docs/DegreeApi.md#getDegrees) | **GET** /degrees | Lista de carreras
*SwaggerUnicast.DegreeApi* | [**updateDegree**](docs/DegreeApi.md#updateDegree) | **PATCH** /degrees/{id} | Actualizar una carrera
*SwaggerUnicast.DisplayApi* | [**getDisplaysByUser**](docs/DisplayApi.md#getDisplaysByUser) | **GET** /displays/search/user | Devuelve una lista de visualizaciones que pertenezcan al usuario dado
*SwaggerUnicast.DisplayApi* | [**updateDisplay**](docs/DisplayApi.md#updateDisplay) | **POST** /displays/update | Actualiza una visualizacion
*SwaggerUnicast.SubjectApi* | [**addSubject**](docs/SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
*SwaggerUnicast.SubjectApi* | [**deleteUserFromSubject**](docs/SubjectApi.md#deleteUserFromSubject) | **DELETE** /subjects/{subject_id}/users/{user_id} | Elimina el usuario de la relacion con asignatura
*SwaggerUnicast.SubjectApi* | [**findSubjectsContainingName**](docs/SubjectApi.md#findSubjectsContainingName) | **GET** /subjects/search/nameContaining | Busca asignaturas que contengan una string en el nombre
*SwaggerUnicast.SubjectApi* | [**findSubjectsStartsWithName**](docs/SubjectApi.md#findSubjectsStartsWithName) | **GET** /subjects/search/nameStartsWith | Busca asignaturas que empiecen por un nombre dado
*SwaggerUnicast.SubjectApi* | [**getSubjects**](docs/SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
*SwaggerUnicast.SubjectApi* | [**getVideosFromSubject**](docs/SubjectApi.md#getVideosFromSubject) | **GET** /subjects/{id}/videos | Devuelve una lista con los videos de una asignatura
*SwaggerUnicast.SubjectApi* | [**putUser**](docs/SubjectApi.md#putUser) | **PUT** /subjects/{id}/users | Relacionar un usuario con una asignatura (tanto profesores como alumnos)
*SwaggerUnicast.SubjectApi* | [**updateSubject**](docs/SubjectApi.md#updateSubject) | **PATCH** /subjects/{id} | Actualizar una asignatura
*SwaggerUnicast.UniversityApi* | [**addUniversity**](docs/UniversityApi.md#addUniversity) | **POST** /universities/add | Crear nueva universidad
*SwaggerUnicast.UniversityApi* | [**findUniversitiesContaining**](docs/UniversityApi.md#findUniversitiesContaining) | **GET** /universities/search/nameContaining | Busca universidades que contengan en el nombre la string dada
*SwaggerUnicast.UniversityApi* | [**findUniversitiesStartsWith**](docs/UniversityApi.md#findUniversitiesStartsWith) | **GET** /universities/search/nameStartsWith | Busca universidades que empiecen por el nombre dado
*SwaggerUnicast.UniversityApi* | [**getUniversities**](docs/UniversityApi.md#getUniversities) | **GET** /universities | Lista de universidades
*SwaggerUnicast.UserApi* | [**addUser**](docs/UserApi.md#addUser) | **POST** /public/register | Registro de un nuevo usuario en el sistema
*SwaggerUnicast.UserApi* | [**authUser**](docs/UserApi.md#authUser) | **POST** /public/authenticate | Autentificacion de usuarios
*SwaggerUnicast.UserApi* | [**findUsersContainingName**](docs/UserApi.md#findUsersContainingName) | **GET** /users/search/nameContaining | Busca usuarios que contengan una string en el nombre
*SwaggerUnicast.UserApi* | [**findUsersContainingSurname**](docs/UserApi.md#findUsersContainingSurname) | **GET** /users/search/surnamesContaining | Busca usuarios que contengan una string en los apellidos
*SwaggerUnicast.UserApi* | [**findUsersContainingUsername**](docs/UserApi.md#findUsersContainingUsername) | **GET** /users/search/usernameContaining | Busca usuarios que contengan una string en el username
*SwaggerUnicast.UserApi* | [**findUsersStartsWithName**](docs/UserApi.md#findUsersStartsWithName) | **GET** /users/search/nameStartsWith | Busca usuarios que empiecen por un nombre dado
*SwaggerUnicast.UserApi* | [**findUsersStartsWithSurnames**](docs/UserApi.md#findUsersStartsWithSurnames) | **GET** /users/search/surnamesStartsWith | Busca usuarios que empiecen por unos apellidos dados
*SwaggerUnicast.UserApi* | [**findUsersStartsWithUsername**](docs/UserApi.md#findUsersStartsWithUsername) | **GET** /users/search/usernameStartsWith | Busca usuarios que empiecen por un username dado
*SwaggerUnicast.UserApi* | [**getSubjectsOfUser**](docs/UserApi.md#getSubjectsOfUser) | **GET** /users/{id}/subjects | Obtener las asignaturas de un usuario
*SwaggerUnicast.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /users/{id} | Obtener un usuario
*SwaggerUnicast.UserApi* | [**getVideosOfUser**](docs/UserApi.md#getVideosOfUser) | **GET** /users/{id}/uploadedVideos | Obtener los videos subidos por un usuario
*SwaggerUnicast.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **POST** /users/update | Actualizacion de un usuario en el sistema
*SwaggerUnicast.VideoApi* | [**addVideo**](docs/VideoApi.md#addVideo) | **POST** /upload/video | Subida de un nuevo video
*SwaggerUnicast.VideoApi* | [**findVideosContainingTitle**](docs/VideoApi.md#findVideosContainingTitle) | **GET** /videos/search/titleContaining | Busca videos que contengan una string en el titulo
*SwaggerUnicast.VideoApi* | [**findVideosStartsWithTitle**](docs/VideoApi.md#findVideosStartsWithTitle) | **GET** /videos/search/titleStartsWith | Busca videos que empiecen por un nombre dado
*SwaggerUnicast.VideoApi* | [**getVideoUploader**](docs/VideoApi.md#getVideoUploader) | **GET** /videos/{id}/uploader | Obtener el uploader de un video
*SwaggerUnicast.VideoApi* | [**getVideos**](docs/VideoApi.md#getVideos) | **GET** /videos | Lista de videos
*SwaggerUnicast.VoteApi* | [**addVote**](docs/VoteApi.md#addVote) | **POST** /votes | Subida de un nuevo voto


## Documentation for Models

 - [SwaggerUnicast.Comment](docs/Comment.md)
 - [SwaggerUnicast.Comment2](docs/Comment2.md)
 - [SwaggerUnicast.CommentGetEmbedded](docs/CommentGetEmbedded.md)
 - [SwaggerUnicast.CommentGetEmbedded2](docs/CommentGetEmbedded2.md)
 - [SwaggerUnicast.CommentGetEmbedded2Embedded](docs/CommentGetEmbedded2Embedded.md)
 - [SwaggerUnicast.CommentGetEmbeddedEmbedded](docs/CommentGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.CommentGetResponse](docs/CommentGetResponse.md)
 - [SwaggerUnicast.Degree](docs/Degree.md)
 - [SwaggerUnicast.Degree2](docs/Degree2.md)
 - [SwaggerUnicast.DegreeGetEmbedded](docs/DegreeGetEmbedded.md)
 - [SwaggerUnicast.DegreeGetEmbedded2](docs/DegreeGetEmbedded2.md)
 - [SwaggerUnicast.DegreeGetEmbedded2Embedded](docs/DegreeGetEmbedded2Embedded.md)
 - [SwaggerUnicast.DegreeGetEmbeddedEmbedded](docs/DegreeGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.DegreeGetResponse](docs/DegreeGetResponse.md)
 - [SwaggerUnicast.DegreeGetResponse2](docs/DegreeGetResponse2.md)
 - [SwaggerUnicast.DegreeList](docs/DegreeList.md)
 - [SwaggerUnicast.Display](docs/Display.md)
 - [SwaggerUnicast.Display2](docs/Display2.md)
 - [SwaggerUnicast.DisplayGetEmbedded](docs/DisplayGetEmbedded.md)
 - [SwaggerUnicast.DisplayGetEmbedded2](docs/DisplayGetEmbedded2.md)
 - [SwaggerUnicast.DisplayGetEmbedded2Embedded](docs/DisplayGetEmbedded2Embedded.md)
 - [SwaggerUnicast.DisplayGetEmbeddedEmbedded](docs/DisplayGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.DisplayGetResponse](docs/DisplayGetResponse.md)
 - [SwaggerUnicast.DisplayId](docs/DisplayId.md)
 - [SwaggerUnicast.DisplayWithVideoEmbedded](docs/DisplayWithVideoEmbedded.md)
 - [SwaggerUnicast.DisplayWithVideoEmbedded2](docs/DisplayWithVideoEmbedded2.md)
 - [SwaggerUnicast.GetResponse](docs/GetResponse.md)
 - [SwaggerUnicast.GetResponse2](docs/GetResponse2.md)
 - [SwaggerUnicast.InlineObject](docs/InlineObject.md)
 - [SwaggerUnicast.InlineObject1](docs/InlineObject1.md)
 - [SwaggerUnicast.InlineObject2](docs/InlineObject2.md)
 - [SwaggerUnicast.InlineObject3](docs/InlineObject3.md)
 - [SwaggerUnicast.InlineObject4](docs/InlineObject4.md)
 - [SwaggerUnicast.InlineObject5](docs/InlineObject5.md)
 - [SwaggerUnicast.PaginationPage](docs/PaginationPage.md)
 - [SwaggerUnicast.PaginationPage2](docs/PaginationPage2.md)
 - [SwaggerUnicast.Subject](docs/Subject.md)
 - [SwaggerUnicast.Subject2](docs/Subject2.md)
 - [SwaggerUnicast.SubjectGetEmbedded](docs/SubjectGetEmbedded.md)
 - [SwaggerUnicast.SubjectGetEmbedded2](docs/SubjectGetEmbedded2.md)
 - [SwaggerUnicast.SubjectGetEmbedded2Embedded](docs/SubjectGetEmbedded2Embedded.md)
 - [SwaggerUnicast.SubjectGetEmbeddedEmbedded](docs/SubjectGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.SubjectGetResponse](docs/SubjectGetResponse.md)
 - [SwaggerUnicast.SubjectGetResponse2](docs/SubjectGetResponse2.md)
 - [SwaggerUnicast.Token](docs/Token.md)
 - [SwaggerUnicast.Token2](docs/Token2.md)
 - [SwaggerUnicast.University](docs/University.md)
 - [SwaggerUnicast.University2](docs/University2.md)
 - [SwaggerUnicast.UniversityGetEmbedded](docs/UniversityGetEmbedded.md)
 - [SwaggerUnicast.UniversityGetEmbedded2](docs/UniversityGetEmbedded2.md)
 - [SwaggerUnicast.UniversityGetEmbedded2Embedded](docs/UniversityGetEmbedded2Embedded.md)
 - [SwaggerUnicast.UniversityGetEmbeddedEmbedded](docs/UniversityGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.UniversityGetResponse](docs/UniversityGetResponse.md)
 - [SwaggerUnicast.UniversityGetResponse2](docs/UniversityGetResponse2.md)
 - [SwaggerUnicast.User](docs/User.md)
 - [SwaggerUnicast.User2](docs/User2.md)
 - [SwaggerUnicast.UserGetEmbedded](docs/UserGetEmbedded.md)
 - [SwaggerUnicast.UserGetEmbedded2](docs/UserGetEmbedded2.md)
 - [SwaggerUnicast.UserGetEmbedded2Embedded](docs/UserGetEmbedded2Embedded.md)
 - [SwaggerUnicast.UserGetEmbeddedEmbedded](docs/UserGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.Video](docs/Video.md)
 - [SwaggerUnicast.Video2](docs/Video2.md)
 - [SwaggerUnicast.VideoGetEmbedded](docs/VideoGetEmbedded.md)
 - [SwaggerUnicast.VideoGetEmbedded2](docs/VideoGetEmbedded2.md)
 - [SwaggerUnicast.VideoGetEmbedded2Embedded](docs/VideoGetEmbedded2Embedded.md)
 - [SwaggerUnicast.VideoGetEmbeddedEmbedded](docs/VideoGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.VideoGetResponse](docs/VideoGetResponse.md)
 - [SwaggerUnicast.VideoGetResponse2](docs/VideoGetResponse2.md)
 - [SwaggerUnicast.VideoToUpload](docs/VideoToUpload.md)
 - [SwaggerUnicast.VideoToUpload2](docs/VideoToUpload2.md)
 - [SwaggerUnicast.Vote](docs/Vote.md)
 - [SwaggerUnicast.Vote2](docs/Vote2.md)
 - [SwaggerUnicast.VoteGetEmbedded](docs/VoteGetEmbedded.md)
 - [SwaggerUnicast.VoteGetEmbeddedEmbedded](docs/VoteGetEmbeddedEmbedded.md)
 - [SwaggerUnicast.VoteGetResponse](docs/VoteGetResponse.md)
 - [SwaggerUnicast.VoteId](docs/VoteId.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)

