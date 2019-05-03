# SwaggerUnicast.VideoApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVideo**](VideoApi.md#addVideo) | **POST** /upload/video | Subida de un nuevo video
[**getVideos**](VideoApi.md#getVideos) | **GET** /videos | Lista de videos



## addVideo

> Video addVideo(file, thumbnail, title, description, subjectId)

Subida de un nuevo video

Adicion de nuevo video

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let file = "/path/to/file"; // File | 
let thumbnail = "/path/to/file"; // File | 
let title = "title_example"; // String | 
let description = "description_example"; // String | 
let subjectId = 789; // Number | 
apiInstance.addVideo(file, thumbnail, title, description, subjectId, (error, data, response) => {
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
 **file** | **File**|  | 
 **thumbnail** | **File**|  | 
 **title** | **String**|  | 
 **description** | **String**|  | 
 **subjectId** | **Number**|  | 

### Return type

[**Video**](Video.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/hal+json


## getVideos

> getVideos()

Lista de videos

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
apiInstance.getVideos((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

