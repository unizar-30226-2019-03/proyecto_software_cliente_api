# SwaggerUnicast.SubjectApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubject**](SubjectApi.md#addSubject) | **POST** /subjects | Crear nueva asignatura
[**getSubjects**](SubjectApi.md#getSubjects) | **GET** /subjects | Lista de asignaturas
[**updateSubject**](SubjectApi.md#updateSubject) | **PATCH** /subjects/{id} | Actualizar una asignatura



## addSubject

> SubjectWithLinks addSubject(subject)

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

[**SubjectWithLinks**](SubjectWithLinks.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## getSubjects

> SubjectGetResponse getSubjects()

Lista de asignaturas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.SubjectApi();
apiInstance.getSubjects((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SubjectGetResponse**](SubjectGetResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## updateSubject

> SubjectWithLinks updateSubject(id, subject)

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

[**SubjectWithLinks**](SubjectWithLinks.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

