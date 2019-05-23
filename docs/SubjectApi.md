# SwaggerUnicast.SubjectApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProfessor**](SubjectApi.md#addProfessor) | **PUT** /subjects/professors | Añadir un profesor a una asignatura
[**addSubject**](SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
[**deleteProfessor**](SubjectApi.md#deleteProfessor) | **DELETE** /subjects/professors | Eliminar un profesor a una asignatura
[**deleteSubject**](SubjectApi.md#deleteSubject) | **DELETE** /subjects/{id} | Elimina la asignatura
[**existsUserInSubject**](SubjectApi.md#existsUserInSubject) | **GET** /subjects/search/userIn | Devuelve si un usuario esta en una asignatura
[**findSubjectsByName**](SubjectApi.md#findSubjectsByName) | **GET** /subjects/search/name | Busca una asignatura con un nombre dado
[**findSubjectsContainingName**](SubjectApi.md#findSubjectsContainingName) | **GET** /subjects/search/nameContaining | Busca asignaturas que contengan una string en el nombre
[**findSubjectsStartsWithName**](SubjectApi.md#findSubjectsStartsWithName) | **GET** /subjects/search/nameStartsWith | Busca asignaturas que empiecen por un nombre dado
[**followSubject**](SubjectApi.md#followSubject) | **PUT** /subjects/follow | Seguir asignaturas
[**getProfessorsFromSubject**](SubjectApi.md#getProfessorsFromSubject) | **GET** /subjects/{id}/professors | Devuelve una lista con los profesores de la asignatura
[**getSubjectById**](SubjectApi.md#getSubjectById) | **GET** /subjects/{id} | Obtener una asignatura
[**getSubjectRanking**](SubjectApi.md#getSubjectRanking) | **GET** /subjects/search/ranking | Devuelve el ranking de asignaturas
[**getSubjects**](SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
[**putUniversity**](SubjectApi.md#putUniversity) | **PUT** /subjects/{id}/university | Relacionar una universidad con una asignatura
[**unfollowSubject**](SubjectApi.md#unfollowSubject) | **DELETE** /subjects/unfollow | Dejar de seguir asignaturas
[**updateSubject**](SubjectApi.md#updateSubject) | **PATCH** /subjects/{id} | Actualizar una asignatura



## addProfessor

> addProfessor(subjectId, professorId)

Añadir un profesor a una asignatura

Añadir un profesor a una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subjectId = 56; // Number | Id de la asignatura a la que se va a añadir el profesor
let professorId = 56; // Number | Id del profesor que se va a añadir
apiInstance.addProfessor(subjectId, professorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectId** | **Number**| Id de la asignatura a la que se va a añadir el profesor | 
 **professorId** | **Number**| Id del profesor que se va a añadir | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## addSubject

> Subject2 addSubject(subject2)

Crear nueva asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subject2 = new SwaggerUnicast.Subject2(); // Subject2 | Asignatura a añadir
apiInstance.addSubject(subject2, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject2** | [**Subject2**](Subject2.md)| Asignatura a añadir | 

### Return type

[**Subject2**](Subject2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## deleteProfessor

> deleteProfessor(subjectId, professorId)

Eliminar un profesor a una asignatura

Eliminar un profesor a una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subjectId = 56; // Number | Id de la asignatura de la que se va a borar  el profesor
let professorId = 56; // Number | Id del profesor que se va a eliminar
apiInstance.deleteProfessor(subjectId, professorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectId** | **Number**| Id de la asignatura de la que se va a borar  el profesor | 
 **professorId** | **Number**| Id del profesor que se va a eliminar | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## deleteSubject

> deleteSubject(id)

Elimina la asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
apiInstance.deleteSubject(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id de la asignatura | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## existsUserInSubject

> Boolean existsUserInSubject(subjectId, opts)

Devuelve si un usuario esta en una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subjectId = 789; // Number | Id de la asignatura en la que buscar
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.existsUserInSubject(subjectId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectId** | **Number**| Id de la asignatura en la que buscar | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

**Boolean**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubjectsByName

> SubjectGetEmbedded2 findSubjectsByName(opts)

Busca una asignatura con un nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'", // String | Incluir si se quiere obtener tambien la universidad en la respuesta
  'name': "name_example" // String | Nombre a buscar
};
apiInstance.findSubjectsByName(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]
 **name** | **String**| Nombre a buscar | [optional] 

### Return type

[**SubjectGetEmbedded2**](SubjectGetEmbedded2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubjectsContainingName

> SubjectGetResponse2 findSubjectsContainingName(opts)

Busca asignaturas que contengan una string en el nombre

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'", // String | Incluir si se quiere obtener tambien la universidad en la respuesta
  'name': "name_example" // String | String a buscar en el nombre de asignaturas
};
apiInstance.findSubjectsContainingName(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]
 **name** | **String**| String a buscar en el nombre de asignaturas | [optional] 

### Return type

[**SubjectGetResponse2**](SubjectGetResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubjectsStartsWithName

> SubjectGetEmbedded2 findSubjectsStartsWithName(opts)

Busca asignaturas que empiecen por un nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'", // String | Incluir si se quiere obtener tambien la universidad en la respuesta
  'name': "name_example" // String | Comienzo del nombre de la asignatura a buscar
};
apiInstance.findSubjectsStartsWithName(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]
 **name** | **String**| Comienzo del nombre de la asignatura a buscar | [optional] 

### Return type

[**SubjectGetEmbedded2**](SubjectGetEmbedded2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## followSubject

> followSubject(subjectId)

Seguir asignaturas

Seguimiento de asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subjectId = 56; // Number | Id de la asignatura que se va a seguir
apiInstance.followSubject(subjectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectId** | **Number**| Id de la asignatura que se va a seguir | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## getProfessorsFromSubject

> UserGetEmbedded2 getProfessorsFromSubject(id, opts)

Devuelve una lista con los profesores de la asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getProfessorsFromSubject(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id de la asignatura | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubjectById

> Subject2 getSubjectById(id, opts)

Obtener una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'" // String | Incluir si se quiere obtener tambien la universidad en la respuesta
};
apiInstance.getSubjectById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id de la asignatura | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]

### Return type

[**Subject2**](Subject2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getSubjectRanking

> SubjectGetResponse2 getSubjectRanking(opts)

Devuelve el ranking de asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'", // String | Incluir si se quiere obtener tambien la universidad en la respuesta
  'page': 56 // Number | Número de la página a devolver
};
apiInstance.getSubjectRanking(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 

### Return type

[**SubjectGetResponse2**](SubjectGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubjects

> SubjectGetResponse2 getSubjects(opts)

Lista de asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'subjectWithUniversity'" // String | Incluir si se quiere obtener tambien la universidad en la respuesta
};
apiInstance.getSubjects(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]

### Return type

[**SubjectGetResponse2**](SubjectGetResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## putUniversity

> putUniversity(id, body)

Relacionar una universidad con una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
let body = 789; // Number | Id de la universidad a asociar con la asignatura
apiInstance.putUniversity(id, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id de la asignatura | 
 **body** | **Number**| Id de la universidad a asociar con la asignatura | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/uri-list
- **Accept**: Not defined


## unfollowSubject

> unfollowSubject(subjectId)

Dejar de seguir asignaturas

Dejar de seguir asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subjectId = 56; // Number | Id de la asignatura que se va a dejar de seguir
apiInstance.unfollowSubject(subjectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectId** | **Number**| Id de la asignatura que se va a dejar de seguir | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## updateSubject

> Subject2 updateSubject(id, subject2, opts)

Actualizar una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
let subject2 = new SwaggerUnicast.Subject2(); // Subject2 | Contenido a editar
let opts = {
  'projection': "'subjectWithUniversity'" // String | Incluir si se quiere obtener tambien la universidad en la respuesta
};
apiInstance.updateSubject(id, subject2, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id de la asignatura | 
 **subject2** | [**Subject2**](Subject2.md)| Contenido a editar | 
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]

### Return type

[**Subject2**](Subject2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

