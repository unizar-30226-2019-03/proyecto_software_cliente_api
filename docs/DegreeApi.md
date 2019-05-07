# SwaggerUnicast.DegreeApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDegree**](DegreeApi.md#addDegree) | **POST** /degrees | Crear nueva carrera
[**findDegreesByName**](DegreeApi.md#findDegreesByName) | **GET** /degrees/search/name | Busca una carrera con un nmbre dado
[**findDegreesContainingName**](DegreeApi.md#findDegreesContainingName) | **GET** /degrees/search/nameContaining | Busca carreras que contengan una string en el nombre
[**findDegreesStartsWith**](DegreeApi.md#findDegreesStartsWith) | **GET** /degrees/search/nameStartsWith | Busca carreras que empiecen por el nombre dado
[**getDegrees**](DegreeApi.md#getDegrees) | **GET** /degrees | Lista de carreras
[**getUniversitiesFromDegree**](DegreeApi.md#getUniversitiesFromDegree) | **GET** /degrees/{id}/universities | Devuelve una lista con las universidades de una carrera
[**putDegreeUniversity**](DegreeApi.md#putDegreeUniversity) | **PUT** /degrees/{id}/universities | Relacionar una carrera con una universidad
[**updateDegree**](DegreeApi.md#updateDegree) | **PATCH** /degrees/{id} | Actualizar una carrera



## addDegree

> Degree2 addDegree(degree2)

Crear nueva carrera

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DegreeApi();
let degree2 = new SwaggerUnicast.Degree2(); // Degree2 | Carrera a añadir
apiInstance.addDegree(degree2, (error, data, response) => {
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
 **degree2** | [**Degree2**](Degree2.md)| Carrera a añadir | 

### Return type

[**Degree2**](Degree2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json


## findDegreesByName

> Degree2 findDegreesByName(opts)

Busca una carrera con un nmbre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'name': "name_example" // String | Nombre a buscar
};
apiInstance.findDegreesByName(opts, (error, data, response) => {
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
 **name** | **String**| Nombre a buscar | [optional] 

### Return type

[**Degree2**](Degree2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findDegreesContainingName

> DegreeGetResponse2 findDegreesContainingName(opts)

Busca carreras que contengan una string en el nombre

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **name** | **String**| String a buscar en el nombre de carreras | [optional] 

### Return type

[**DegreeGetResponse2**](DegreeGetResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findDegreesStartsWith

> DegreeGetEmbedded2 findDegreesStartsWith(opts)

Busca carreras que empiecen por el nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **name** | **String**| Comienzo del nombre de la carrera a buscar | [optional] 

### Return type

[**DegreeGetEmbedded2**](DegreeGetEmbedded2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDegrees

> DegreeGetResponse2 getDegrees(opts)

Lista de carreras

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.DegreeApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 

### Return type

[**DegreeGetResponse2**](DegreeGetResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getUniversitiesFromDegree

> UniversityGetEmbedded2 getUniversitiesFromDegree(id, opts)

Devuelve una lista con las universidades de una carrera

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DegreeApi();
let id = 789; // Number | Id de la carrera
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getUniversitiesFromDegree(id, opts, (error, data, response) => {
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

[**UniversityGetEmbedded2**](UniversityGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putDegreeUniversity

> putDegreeUniversity(id, body)

Relacionar una carrera con una universidad

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DegreeApi();
let id = 789; // Number | Id de la carrera
let body = 789; // Number | Id de la universidad a asociar con la carrera
apiInstance.putDegreeUniversity(id, body, (error, data, response) => {
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
 **id** | **Number**| Id de la carrera | 
 **body** | **Number**| Id de la universidad a asociar con la carrera | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: text/uri-list
- **Accept**: Not defined


## updateDegree

> Degree2 updateDegree(id, degree2)

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
let degree2 = new SwaggerUnicast.Degree2(); // Degree2 | Contenido a editar
apiInstance.updateDegree(id, degree2, (error, data, response) => {
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
 **degree2** | [**Degree2**](Degree2.md)| Contenido a editar | 

### Return type

[**Degree2**](Degree2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/hal+json

