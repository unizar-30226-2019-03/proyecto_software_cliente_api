# SwaggerUnicast.UniversityApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUniversity**](UniversityApi.md#addUniversity) | **POST** /universities | Crear nueva universidad
[**getUniversities**](UniversityApi.md#getUniversities) | **GET** /universities | Lista de universidades
[**updateUniversity**](UniversityApi.md#updateUniversity) | **PATCH** /universities/{id} | Actualizar una universidad



## addUniversity

> UniversityWithLinks addUniversity(university)

Crear nueva universidad

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UniversityApi();
let university = new SwaggerUnicast.University(); // University | Universidad a añadir
apiInstance.addUniversity(university, (error, data, response) => {
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
 **university** | [**University**](University.md)| Universidad a añadir | 

### Return type

[**UniversityWithLinks**](UniversityWithLinks.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## getUniversities

> UniversityGetResponse getUniversities(opts)

Lista de universidades

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UniversityApi();
let opts = {
  'page': 56 // Number | Numero de la página a devolver
};
apiInstance.getUniversities(opts, (error, data, response) => {
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

[**UniversityGetResponse**](UniversityGetResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## updateUniversity

> UniversityWithLinks updateUniversity(id, university)

Actualizar una universidad

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UniversityApi();
let id = 789; // Number | Id de la universidad
let university = new SwaggerUnicast.University(); // University | Contenido a editar
apiInstance.updateUniversity(id, university, (error, data, response) => {
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
 **id** | **Number**| Id de la universidad | 
 **university** | [**University**](University.md)| Contenido a editar | 

### Return type

[**UniversityWithLinks**](UniversityWithLinks.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

