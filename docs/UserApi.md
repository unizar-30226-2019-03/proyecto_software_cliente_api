# SwaggerUnicast.UserApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /public/register | Registro de un nuevo usuario en el sistema
[**authUser**](UserApi.md#authUser) | **POST** /public/authenticate | Autentificacion de usuarios



## addUser

> addUser(username, password, email, description, universityId, photo)

Registro de un nuevo usuario en el sistema

Adicion de nuevos usuarios

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UserApi();
let username = "username_example"; // String | Nombre del nuevo usuario
let password = "password_example"; // String | Contraseña del nuevo usuario
let email = null; // String | Email del nuevo usuario
let description = "description_example"; // String | Descripción para el nuevo usuario
let universityId = 56; // Number | Universidad del usuario
let photo = "/path/to/file"; // File | Foto del usuario
apiInstance.addUser(username, password, email, description, universityId, photo, (error, data, response) => {
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
 **username** | **String**| Nombre del nuevo usuario | 
 **password** | **String**| Contraseña del nuevo usuario | 
 **email** | [**String**](String.md)| Email del nuevo usuario | 
 **description** | **String**| Descripción para el nuevo usuario | 
 **universityId** | **Number**| Universidad del usuario | 
 **photo** | **File**| Foto del usuario | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## authUser

> authUser(username, password)

Autentificacion de usuarios

Login a un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UserApi();
let username = "username_example"; // String | Nombre del usuario a comprobar
let password = "password_example"; // String | Contraseña del nuevo usuario
apiInstance.authUser(username, password, (error, data, response) => {
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
 **username** | **String**| Nombre del usuario a comprobar | 
 **password** | **String**| Contraseña del nuevo usuario | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined

