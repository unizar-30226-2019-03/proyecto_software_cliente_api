# SwaggerUnicast.SubjectApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubject**](SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
[**deleteUserFromSubject**](SubjectApi.md#deleteUserFromSubject) | **DELETE** /subjects/{subject_id}/users/{user_id} | Elimina el usuario de la relacion con asignatura
[**findSubjectsContainingName**](SubjectApi.md#findSubjectsContainingName) | **GET** /subjects/search/nameContaining | Busca asignaturas que contengan una string en el nombre
[**findSubjectsStartsWithName**](SubjectApi.md#findSubjectsStartsWithName) | **GET** /subjects/search/nameStartsWith | Busca asignaturas que empiecen por un nombre dado
[**getSubjects**](SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
[**getVideosFromSubject**](SubjectApi.md#getVideosFromSubject) | **GET** /subjects/{id}/videos | Devuelve una lista con los videos de una asignatura
[**putUser**](SubjectApi.md#putUser) | **PUT** /subjects/{id}/users | Relacionar un usuario con una asignatura (tanto profesores como alumnos)
[**updateSubject**](SubjectApi.md#updateSubject) | **PATCH** /subjects/{id} | Actualizar una asignatura



## addSubject

> Subject addSubject(subject)

Crear nueva asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let subject = new SwaggerUnicast.Subject(); // Subject | Asignatura a añadir
apiInstance.addSubject(subject, (error, data, response) => {
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
 **subject** | [**Subject**](Subject.md)| Asignatura a añadir | 

### Return type

[**Subject**](Subject.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## deleteUserFromSubject

> deleteUserFromSubject(userId, subjectId)

Elimina el usuario de la relacion con asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let userId = 789; // Number | Id del usuario
let subjectId = 789; // Number | Id de la asignatura
apiInstance.deleteUserFromSubject(userId, subjectId, (error, data, response) => {
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
 **userId** | **Number**| Id del usuario | 
 **subjectId** | **Number**| Id de la asignatura | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findSubjectsContainingName

> SubjectGetResponse findSubjectsContainingName(opts)

Busca asignaturas que contengan una string en el nombre

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **name** | **String**| String a buscar en el nombre de asignaturas | [optional] 

### Return type

[**SubjectGetResponse**](SubjectGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findSubjectsStartsWithName

> SubjectGetEmbedded findSubjectsStartsWithName(opts)

Busca asignaturas que empiecen por un nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **name** | **String**| Comienzo del nombre de la asignatura a buscar | [optional] 

### Return type

[**SubjectGetEmbedded**](SubjectGetEmbedded.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubjects

> SubjectGetResponse getSubjects(opts)

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
  'sort': ["null"] // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
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

### Return type

[**SubjectGetResponse**](SubjectGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getVideosFromSubject

> VideoGetEmbedded getVideosFromSubject(id, opts)

Devuelve una lista con los videos de una asignatura

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
apiInstance.getVideosFromSubject(id, opts, (error, data, response) => {
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

[**VideoGetEmbedded**](VideoGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putUser

> putUser(id, body)

Relacionar un usuario con una asignatura (tanto profesores como alumnos)

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
let id = 789; // Number | Id de la asignatura
let body = 789; // Number | Link del usuario a asociar con la asignatura
apiInstance.putUser(id, body, (error, data, response) => {
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
 **body** | **Number**| Link del usuario a asociar con la asignatura | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/uri-list
- **Accept**: Not defined


## updateSubject

> Subject updateSubject(id, subject)

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
let subject = new SwaggerUnicast.Subject(); // Subject | Contenido a editar
apiInstance.updateSubject(id, subject, (error, data, response) => {
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
 **subject** | [**Subject**](Subject.md)| Contenido a editar | 

### Return type

[**Subject**](Subject.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

