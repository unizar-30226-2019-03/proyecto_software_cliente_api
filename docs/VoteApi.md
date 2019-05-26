# SwaggerUnicast.VoteApi

All URIs are relative to *http://ec2-35-181-76-150.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVote**](VoteApi.md#addVote) | **POST** /votes | Subida de un nuevo voto



## addVote

> Vote2 addVote(videoId, suitability, clarity, quality)

Subida de un nuevo voto

Adicion de nuevo voto

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VoteApi();
let videoId = 56; // Number | Id del video sobre el que votar
let suitability = 56; // Number | adecuacion
let clarity = 56; // Number | claridad
let quality = 56; // Number | calidad
apiInstance.addVote(videoId, suitability, clarity, quality, (error, data, response) => {
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
 **videoId** | **Number**| Id del video sobre el que votar | 
 **suitability** | **Number**| adecuacion | 
 **clarity** | **Number**| claridad | 
 **quality** | **Number**| calidad | 

### Return type

[**Vote2**](Vote2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

