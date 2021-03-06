# SwaggerUnicast.NotificationApi

All URIs are relative to *http://ec2-35-181-76-150.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkNotification**](NotificationApi.md#checkNotification) | **PATCH** /usersAreNotified/check | Marca una notificacion como revisada
[**getUserNotifications**](NotificationApi.md#getUserNotifications) | **GET** /usersAreNotified/search/userNotifications | Lista de notificaciones de un usuario, tanto revisadas como no revisadas
[**getUserUncheckedNotifications**](NotificationApi.md#getUserUncheckedNotifications) | **GET** /usersAreNotified/search/userUncheckedNotifications | Lista de notificaciones que no han sido revisadas



## checkNotification

> UserIsNotified2 checkNotification(notificationId)

Marca una notificacion como revisada

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.NotificationApi();
let notificationId = 789; // Number | Id de la notificacion a marcar como revisada
apiInstance.checkNotification(notificationId, (error, data, response) => {
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
 **notificationId** | **Number**| Id de la notificacion a marcar como revisada | 

### Return type

[**UserIsNotified2**](UserIsNotified2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserNotifications

> UserIsNotifiedGetResponse2 getUserNotifications(opts)

Lista de notificaciones de un usuario, tanto revisadas como no revisadas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.NotificationApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56 // Number | Número de la página a devolver
};
apiInstance.getUserNotifications(opts, (error, data, response) => {
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

[**UserIsNotifiedGetResponse2**](UserIsNotifiedGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserUncheckedNotifications

> UserIsNotifiedGetResponse2 getUserUncheckedNotifications(opts)

Lista de notificaciones que no han sido revisadas

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.NotificationApi();
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'page': 56 // Number | Número de la página a devolver
};
apiInstance.getUserUncheckedNotifications(opts, (error, data, response) => {
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

[**UserIsNotifiedGetResponse2**](UserIsNotifiedGetResponse2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

