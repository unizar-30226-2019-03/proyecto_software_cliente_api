# SwaggerUnicast.SubjectApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubject**](SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
[**deleteUserFromSubject**](SubjectApi.md#deleteUserFromSubject) | **DELETE** /subjects/{subject_id}/users/{user_id} | Elimina el usuario de la relacion con asignatura
[**getSubjects**](SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
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


## getSubjects

> SubjectGetResponse getSubjects(opts)

Lista de asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.SubjectApi();
let opts = {
  'page': 56 // Number | Numero de la página a devolver
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
 **page** | **Number**| Numero de la página a devolver | [optional] 

### Return type

[**SubjectGetResponse**](SubjectGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


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

