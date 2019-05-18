# SwaggerUnicast.ReproductionListApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReproductionList**](ReproductionListApi.md#addReproductionList) | **POST** /reproductionLists/add | Añadir una lista de reproduccion
[**addVideotoReproductionList**](ReproductionListApi.md#addVideotoReproductionList) | **POST** /reproductionLists/addVideo | Adicion de un video de la lista (si se es propietario de la lista)
[**deleteReproductionList**](ReproductionListApi.md#deleteReproductionList) | **DELETE** /reproductionLists/{id} | Elimina una lista de reproduccion
[**deleteVideoFromReproductionList**](ReproductionListApi.md#deleteVideoFromReproductionList) | **DELETE** /reproductionLists/deleteVideo | Eliminacion de un video de la lista (si se es propietario de la lista)
[**getReproductionListVideoIn**](ReproductionListApi.md#getReproductionListVideoIn) | **GET** /reproductionLists/search/videoAndUser | Obtiene la lista de listas de reproduccion en las que esta un video
[**getUserReproductionLists**](ReproductionListApi.md#getUserReproductionLists) | **GET** /reproductionLists/search/user | Devuelve las listas de un usuario



## addReproductionList

> addReproductionList(name)

Añadir una lista de reproduccion

Añadir una lista de reproduccion

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let name = "name_example"; // String | Nombre de la lista que se va a añadir
apiInstance.addReproductionList(name, (error, data, response) => {
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
 **name** | **String**| Nombre de la lista que se va a añadir | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## addVideotoReproductionList

> addVideotoReproductionList(reproListId, videoId)

Adicion de un video de la lista (si se es propietario de la lista)

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let reproListId = 789; // Number | 
let videoId = 789; // Number | 
apiInstance.addVideotoReproductionList(reproListId, videoId, (error, data, response) => {
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
 **reproListId** | **Number**|  | 
 **videoId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## deleteReproductionList

> deleteReproductionList(id)

Elimina una lista de reproduccion

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let id = 789; // Number | Id de la lista que se quiere eliminar
apiInstance.deleteReproductionList(id, (error, data, response) => {
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
 **id** | **Number**| Id de la lista que se quiere eliminar | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteVideoFromReproductionList

> deleteVideoFromReproductionList(reproListId, videoId)

Eliminacion de un video de la lista (si se es propietario de la lista)

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let reproListId = 789; // Number | 
let videoId = 789; // Number | 
apiInstance.deleteVideoFromReproductionList(reproListId, videoId, (error, data, response) => {
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
 **reproListId** | **Number**|  | 
 **videoId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## getReproductionListVideoIn

> ReproductionListGetResponse2 getReproductionListVideoIn(videoId, opts)

Obtiene la lista de listas de reproduccion en las que esta un video

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let videoId = 789; // Number | Id del video que se quiere mirar
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56 // Number | Número de la página a devolver
};
apiInstance.getReproductionListVideoIn(videoId, opts, (error, data, response) => {
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
 **videoId** | **Number**| Id del video que se quiere mirar | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 

### Return type

[**ReproductionListGetResponse2**](ReproductionListGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getUserReproductionLists

> ReproductionListGetResponse2 getUserReproductionLists(opts)

Devuelve las listas de un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.ReproductionListApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56 // Number | Número de la página a devolver
};
apiInstance.getUserReproductionLists(opts, (error, data, response) => {
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

### Return type

[**ReproductionListGetResponse2**](ReproductionListGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json

