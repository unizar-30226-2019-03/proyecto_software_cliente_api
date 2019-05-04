# SwaggerUnicast.VoteApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVote**](VoteApi.md#addVote) | **POST** /votes | Subida de un nuevo voto



## addVote

> Vote2 addVote(vote2)

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
let vote2 = new SwaggerUnicast.Vote2(); // Vote2 | Voto que se va a añadir
apiInstance.addVote(vote2, (error, data, response) => {
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
 **vote2** | [**Vote2**](Vote2.md)| Voto que se va a añadir | 

### Return type

[**Vote2**](Vote2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

