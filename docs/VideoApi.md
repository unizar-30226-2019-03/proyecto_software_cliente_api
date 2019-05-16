# SwaggerUnicast.VideoApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVideo**](VideoApi.md#addVideo) | **POST** /videos/upload | Subida de un nuevo video
[**deleteVideo**](VideoApi.md#deleteVideo) | **DELETE** /videos/delete | Eliminacion de un video (si se es el autor del mismo)
[**findVideosContainingTitle**](VideoApi.md#findVideosContainingTitle) | **GET** /videos/search/titleContaining | Busca videos que contengan una string en el titulo
[**findVideosStartsWithTitle**](VideoApi.md#findVideosStartsWithTitle) | **GET** /videos/search/titleStartsWith | Busca videos que empiecen por un nombre dado
[**getVideo**](VideoApi.md#getVideo) | **GET** /videos/{id} | Obtener el video con un id dado
[**getVideoSubject**](VideoApi.md#getVideoSubject) | **GET** /videos/{id}/subject | Obtener la asignatura de un video
[**getVideoUploader**](VideoApi.md#getVideoUploader) | **GET** /videos/{id}/uploader | Obtener el uploader de un video
[**getVideos**](VideoApi.md#getVideos) | **GET** /videos | Lista de videos
[**getVideosFromSubject**](VideoApi.md#getVideosFromSubject) | **GET** /videos/search/subjectVideos | Lista de videos de una asignatura
[**getVideosFromUploader**](VideoApi.md#getVideosFromUploader) | **GET** /videos/search/uploaderVideos | Lista de videos que ha subido un usuario
[**getVideosOfUserSubjects**](VideoApi.md#getVideosOfUserSubjects) | **GET** /videos/search/userSubjects | Lista de videos de las asignaturas de un usuario



## addVideo

> Video2 addVideo(file, thumbnail, title, description, subjectId)

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

[**Video2**](Video2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteVideo

> deleteVideo(id)

Eliminacion de un video (si se es el autor del mismo)

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let id = 789; // Number | 
apiInstance.deleteVideo(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## findVideosContainingTitle

> VideoGetResponse2 findVideosContainingTitle(opts)

Busca videos que contengan una string en el titulo

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'videoWithSubject'", // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
  'title': "title_example" // String | String a buscar en el titulo de videos
};
apiInstance.findVideosContainingTitle(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]
 **title** | **String**| String a buscar en el titulo de videos | [optional] 

### Return type

[**VideoGetResponse2**](VideoGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findVideosStartsWithTitle

> Video2 findVideosStartsWithTitle(opts)

Busca videos que empiecen por un nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'videoWithSubject'", // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
  'title': "title_example" // String | Comienzo del nombre de los videos a buscar
};
apiInstance.findVideosStartsWithTitle(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]
 **title** | **String**| Comienzo del nombre de los videos a buscar | [optional] 

### Return type

[**Video2**](Video2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideo

> Video2 getVideo(id, opts)

Obtener el video con un id dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let id = 789; // Number | Id del video
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideo(id, opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**Video2**](Video2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getVideoSubject

> Subject2 getVideoSubject(id, opts)

Obtener la asignatura de un video

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let id = 789; // Number | Id del video
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'" // String | Incluir si se quiere obtener tambien la universidad en la respuesta
};
apiInstance.getVideoSubject(id, opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]

### Return type

[**Subject2**](Subject2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getVideoUploader

> User2 getVideoUploader(id, opts)

Obtener el uploader de un video

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let id = 789; // Number | Id del video
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideoUploader(id, opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**User2**](User2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getVideos

> VideoGetResponse2 getVideos(opts)

Lista de videos

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideos(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**VideoGetResponse2**](VideoGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideosFromSubject

> VideoGetResponse2 getVideosFromSubject(subjectId, opts)

Lista de videos de una asignatura

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let subjectId = 789; // Number | Id de la asignatura
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideosFromSubject(subjectId, opts, (error, data, response) => {
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
 **subjectId** | **Number**| Id de la asignatura | 
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **page** | **Number**| Número de la página a devolver | [optional] 
 **sort** | [**[String]**](String.md)| Parámetros en la forma &#x60;($propertyname,)+[asc|desc]?&#x60; | [optional] 
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**VideoGetResponse2**](VideoGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideosFromUploader

> VideoGetResponse2 getVideosFromUploader(opts)

Lista de videos que ha subido un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideosFromUploader(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**VideoGetResponse2**](VideoGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVideosOfUserSubjects

> VideoGetResponse2 getVideosOfUserSubjects(opts)

Lista de videos de las asignaturas de un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.VideoApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56, // Number | Número de la página a devolver
  'sort': ["null"], // [String] | Parámetros en la forma `($propertyname,)+[asc|desc]?`
  'projection': "'videoWithSubject'" // String | Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta
};
apiInstance.getVideosOfUserSubjects(opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta | [optional] [default to &#39;videoWithSubject&#39;]

### Return type

[**VideoGetResponse2**](VideoGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

