# SwaggerUnicast.DisplayApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDisplaysByUser**](DisplayApi.md#getDisplaysByUser) | **GET** /displays/search/user | Devuelve una lista de visualizaciones que pertenezcan al usuario dado
[**updateDisplay**](DisplayApi.md#updateDisplay) | **POST** /displays/update | Actualiza una visualizacion



## getDisplaysByUser

> DisplayGetEmbedded2 getDisplaysByUser(id, opts)

Devuelve una lista de visualizaciones que pertenezcan al usuario dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.DisplayApi();
let id = 789; // Number | Id del usuario
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'displayWithVideo'" // String | Incluir si se quiere obtener tambien los videos en la respuesta
};
apiInstance.getDisplaysByUser(id, opts, (error, data, response) => {
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
 **id** | **Number**| Id del usuario | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 
 **projection** | **String**| Incluir si se quiere obtener tambien los videos en la respuesta | [optional] [default to &#39;displayWithVideo&#39;]

### Return type

[**DisplayGetEmbedded2**](DisplayGetEmbedded2.md)

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

