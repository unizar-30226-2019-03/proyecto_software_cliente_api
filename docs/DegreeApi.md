# SwaggerUnicast.DegreeApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDegree**](DegreeApi.md#addDegree) | **POST** /degrees | Crear nueva carrera
[**findDegreesContainingName**](DegreeApi.md#findDegreesContainingName) | **GET** /degrees/search/nameContaining | Busca carreras que contengan una string en el nombre
[**findDegreesStartsWith**](DegreeApi.md#findDegreesStartsWith) | **GET** /degrees/search/nameStartsWith | Busca carreras que empiecen por el nombre dado
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


## findDegreesContainingName

> DegreeGetResponse findDegreesContainingName(opts)

Busca carreras que contengan una string en el nombre

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache'", // String | 
  'name': "name_example" // String | String a buscar en el nombre de carreras
};
apiInstance.findDegreesContainingName(opts, (error, data, response) => {
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **name** | **String**| String a buscar en el nombre de carreras | [optional] 

### Return type

[**DegreeGetResponse**](DegreeGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findDegreesStartsWith

> DegreeGetEmbedded findDegreesStartsWith(opts)

Busca carreras que empiecen por el nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache'", // String | 
  'name': "name_example" // String | Comienzo del nombre de la carrera a buscar
};
apiInstance.findDegreesStartsWith(opts, (error, data, response) => {
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache&#39;]
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
  'cacheControl': "'no-cache'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"] // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 

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

