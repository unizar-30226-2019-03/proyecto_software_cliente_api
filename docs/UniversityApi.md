# SwaggerUnicast.UniversityApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUniversity**](UniversityApi.md#addUniversity) | **POST** /universities/add | Crear nueva universidad
[**findUniversitiesContaining**](UniversityApi.md#findUniversitiesContaining) | **GET** /universities/search/nameContaining | Busca universidades que contengan en el nombre la string dada
[**findUniversitiesStartsWith**](UniversityApi.md#findUniversitiesStartsWith) | **GET** /universities/search/nameStartsWith | Busca universidades que empiecen por el nombre dado
[**getSubjecstFromUniversity**](UniversityApi.md#getSubjecstFromUniversity) | **GET** /universities/{id}/subjects | Devuelve una lista con las asignaturas de una universidad
[**getUniversities**](UniversityApi.md#getUniversities) | **GET** /universities | Lista de universidades



## addUniversity

> University2 addUniversity(name, photo)

Crear nueva universidad

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UniversityApi();
let name = "name_example"; // String | Nombre de la nueva universidad
let photo = "/path/to/file"; // File | Foto de la universidad
apiInstance.addUniversity(name, photo, (error, data, response) => {
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
 **name** | **String**| Nombre de la nueva universidad | 
 **photo** | **File**| Foto de la universidad | 

### Return type

[**University2**](University2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## findUniversitiesContaining

> UniversityGetEmbedded2 findUniversitiesContaining(opts)

Busca universidades que contengan en el nombre la string dada

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UniversityApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'name': "name_example" // String | String a buscar en el nombre
};
apiInstance.findUniversitiesContaining(opts, (error, data, response) => {
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
 **name** | **String**| String a buscar en el nombre | [optional] 

### Return type

[**UniversityGetEmbedded2**](UniversityGetEmbedded2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUniversitiesStartsWith

> UniversityGetEmbedded2 findUniversitiesStartsWith(opts)

Busca universidades que empiecen por el nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UniversityApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'name': "name_example" // String | Comienzo del nombre de la universidad a buscar
};
apiInstance.findUniversitiesStartsWith(opts, (error, data, response) => {
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
 **name** | **String**| Comienzo del nombre de la universidad a buscar | [optional] 

### Return type

[**UniversityGetEmbedded2**](UniversityGetEmbedded2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubjecstFromUniversity

> SubjectGetEmbedded2 getSubjecstFromUniversity(id, opts)

Devuelve una lista con las asignaturas de una universidad

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UniversityApi();
let id = 789; // Number | Id de la universidad
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getSubjecstFromUniversity(id, opts, (error, data, response) => {
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

[**SubjectGetEmbedded2**](SubjectGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUniversities

> UniversityGetResponse2 getUniversities(opts)

Lista de universidades

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UniversityApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"] // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 

### Return type

[**UniversityGetResponse2**](UniversityGetResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

