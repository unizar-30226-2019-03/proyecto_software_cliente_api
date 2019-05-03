# SwaggerUnicast.DegreeApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDegree**](DegreeApi.md#addDegree) | **POST** /degrees | Crear nueva carrera
[**findDegreeStartsWith**](DegreeApi.md#findDegreeStartsWith) | **GET** /degrees/search/nameStartsWith | Busca carreras que empiecen por el nombre dado
[**getDegrees**](DegreeApi.md#getDegrees) | **GET** /degrees | Lista de carreras
[**updateDegree**](DegreeApi.md#updateDegree) | **PATCH** /degrees/{id} | Actualizar una carrera



## addDegree

> Degree addDegree(degree)

Crear nueva carrera

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DegreeApi();
let degree = new SwaggerUnicast.Degree(); // Degree | Carrera a añadir
apiInstance.addDegree(degree, (error, data, response) => {
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
 **degree** | [**Degree**](Degree.md)| Carrera a añadir | 

### Return type

[**Degree**](Degree.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## findDegreeStartsWith

> DegreeGetEmbedded findDegreeStartsWith(opts)

Busca carreras que empiecen por el nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'name': "name_example" // String | Comienzo del nombre de la carrera a buscar
};
apiInstance.findDegreeStartsWith(opts, (error, data, response) => {
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
 **name** | **String**| Comienzo del nombre de la carrera a buscar | [optional] 

### Return type

[**DegreeGetEmbedded**](DegreeGetEmbedded.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDegrees

> DegreeGetResponse getDegrees(opts)

Lista de carreras

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'page': 56 // Number | Numero de la página a devolver
};
apiInstance.getDegrees(opts, (error, data, response) => {
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

[**DegreeGetResponse**](DegreeGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## updateDegree

> Degree updateDegree(id, degree)

Actualizar una carrera

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DegreeApi();
let id = 789; // Number | Id de la carrera
let degree = new SwaggerUnicast.Degree(); // Degree | Contenido a editar
apiInstance.updateDegree(id, degree, (error, data, response) => {
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
 **id** | **Number**| Id de la carrera | 
 **degree** | [**Degree**](Degree.md)| Contenido a editar | 

### Return type

[**Degree**](Degree.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

