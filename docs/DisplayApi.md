# SwaggerUnicast.DisplayApi

All URIs are relative to *http://ec2-35-181-76-150.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDisplay**](DisplayApi.md#deleteDisplay) | **DELETE** /displays/{video_id} | Elimina la visualizacion dada
[**findByUserIdAndVideoId**](DisplayApi.md#findByUserIdAndVideoId) | **GET** /displays/search/userAndVideo | Obtener la display de un video y de un usuario concretos
[**getDisplaysByUser**](DisplayApi.md#getDisplaysByUser) | **GET** /displays/search/user | Devuelve una lista de visualizaciones que pertenezcan al usuario dado
[**updateDisplay**](DisplayApi.md#updateDisplay) | **POST** /displays | Actualiza una visualizacion



## deleteDisplay

> deleteDisplay(videoId)

Elimina la visualizacion dada

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DisplayApi();
let videoId = 789; // Number | Id del video de la visualizacion a borrar
apiInstance.deleteDisplay(videoId, (error, data, response) => {
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
 **videoId** | **Number**| Id del video de la visualizacion a borrar | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findByUserIdAndVideoId

> Display2 findByUserIdAndVideoId(videoId, opts)

Obtener la display de un video y de un usuario concretos

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DisplayApi();
let videoId = 789; // Number | Id del video que se quiere mirar
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'displayWithVideo'" // String | Incluir si se quiere obtener tambien los videos en la respuesta
};
apiInstance.findByUserIdAndVideoId(videoId, opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien los videos en la respuesta | [optional] [default to &#39;displayWithVideo&#39;]

### Return type

[**Display2**](Display2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getDisplaysByUser

> DisplayGetResponse2 getDisplaysByUser(opts)

Devuelve una lista de visualizaciones que pertenezcan al usuario dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DisplayApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'displayWithVideo'" // String | Incluir si se quiere obtener tambien los videos en la respuesta
};
apiInstance.getDisplaysByUser(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien los videos en la respuesta | [optional] [default to &#39;displayWithVideo&#39;]

### Return type

[**DisplayGetResponse2**](DisplayGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDisplay

> Display2 updateDisplay(secsFromBeg, videoId)

Actualiza una visualizacion

Actualiza una visualizacion

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DisplayApi();
let secsFromBeg = 789; // Number | Segundos que se han visualizados del video
let videoId = 789; // Number | Id del video que se esta visualizando
apiInstance.updateDisplay(secsFromBeg, videoId, (error, data, response) => {
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
 **secsFromBeg** | **Number**| Segundos que se han visualizados del video | 
 **videoId** | **Number**| Id del video que se esta visualizando | 

### Return type

[**Display2**](Display2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

