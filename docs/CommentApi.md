# SwaggerUnicast.CommentApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addComment**](CommentApi.md#addComment) | **POST** /comments | Subida de un nuevo comentario
[**getCommentReplies**](CommentApi.md#getCommentReplies) | **GET** /comments/{id}/commentReplies | Devuelve la lista de comentarios que responden al comentario dado
[**getCommentsByVideo**](CommentApi.md#getCommentsByVideo) | **GET** /comments/search/video | Devuelve una lista de comentarios que pertenezcan al video dado
[**getRepliedToComment**](CommentApi.md#getRepliedToComment) | **GET** /comments/{id}/commentRepliedTo | Devuelve el comentario al que responde el comentario dado



## addComment

> Comment2 addComment(text, secsFromBeg, videoId, opts)

Subida de un nuevo comentario

Adicion de nuevo comentario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.CommentApi();
let text = "text_example"; // String | 
let secsFromBeg = 56; // Number | 
let videoId = 789; // Number | 
let opts = {
  'commentRepliedToId': 789 // Number | 
};
apiInstance.addComment(text, secsFromBeg, videoId, opts, (error, data, response) => {
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
 **text** | **String**|  | 
 **secsFromBeg** | **Number**|  | 
 **videoId** | **Number**|  | 
 **commentRepliedToId** | **Number**|  | [optional] 

### Return type

[**Comment2**](Comment2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getCommentReplies

> CommentGetEmbedded2 getCommentReplies(id, opts)

Devuelve la lista de comentarios que responden al comentario dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.CommentApi();
let id = 789; // Number | Id del comentario
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'commentWithUser'" // String | Incluir si se quiere obtener tambien el usuario que ha hecho el comentario
};
apiInstance.getCommentReplies(id, opts, (error, data, response) => {
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
 **id** | **Number**| Id del comentario | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien el usuario que ha hecho el comentario | [optional] [default to &#39;commentWithUser&#39;]

### Return type

[**CommentGetEmbedded2**](CommentGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCommentsByVideo

> CommentGetResponse2 getCommentsByVideo(id, opts)

Devuelve una lista de comentarios que pertenezcan al video dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.CommentApi();
let id = 789; // Number | Id del video
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'commentWithUser'" // String | Incluir si se quiere obtener tambien el usuario que ha hecho el comentario
};
apiInstance.getCommentsByVideo(id, opts, (error, data, response) => {
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
 **id** | **Number**| Id del video | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 
 **projection** | **String**| Incluir si se quiere obtener tambien el usuario que ha hecho el comentario | [optional] [default to &#39;commentWithUser&#39;]

### Return type

[**CommentGetResponse2**](CommentGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepliedToComment

> Comment2 getRepliedToComment(id, opts)

Devuelve el comentario al que responde el comentario dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.CommentApi();
let id = 789; // Number | Id del comentario
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'commentWithUser'" // String | Incluir si se quiere obtener tambien el usuario que ha hecho el comentario
};
apiInstance.getRepliedToComment(id, opts, (error, data, response) => {
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
 **id** | **Number**| Id del comentario | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **projection** | **String**| Incluir si se quiere obtener tambien el usuario que ha hecho el comentario | [optional] [default to &#39;commentWithUser&#39;]

### Return type

[**Comment2**](Comment2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

