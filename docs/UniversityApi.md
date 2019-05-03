# SwaggerUnicast.UniversityApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUniversity**](UniversityApi.md#addUniversity) | **POST** /universities/add | Crear nueva universidad
[**findUniversityStartsWith**](UniversityApi.md#findUniversityStartsWith) | **GET** /universities/search/nameStartsWith | Busca universidades que empiecen por el nombre dado
[**getUniversities**](UniversityApi.md#getUniversities) | **GET** /universities | Lista de universidades



## addUniversity

> University addUniversity(name, photo)

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
let photo = "/path/to/file"; // File | Contraseña del nuevo usuario
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
 **photo** | **File**| Contraseña del nuevo usuario | 

### Return type

[**University**](University.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## findUniversityStartsWith

> UniversityGetEmbedded findUniversityStartsWith(opts)

Busca universidades que empiecen por el nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UniversityApi();
let opts = {
  'name': "name_example" // String | Comienzo del nombre de la universidad a buscar
};
apiInstance.findUniversityStartsWith(opts, (error, data, response) => {
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
 **name** | **String**| Comienzo del nombre de la universidad a buscar | [optional] 

### Return type

[**UniversityGetEmbedded**](UniversityGetEmbedded.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUniversities

> UniversityGetResponse getUniversities(opts)

Lista de universidades

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

