# SwaggerUnicast.UserApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /public/register | Registro de un nuevo usuario en el sistema
[**authUser**](UserApi.md#authUser) | **POST** /public/authenticate | Autentificacion de usuarios



## addUser

> addUser(opts)

Registro de un nuevo usuario en el sistema

Adicion de nuevos usuarios

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'username': "username_example", // String | Nombre del nuevo usuario
  'password': "password_example", // String | Contraseña del nuevo usuario
  'email': null, // String | Email del nuevo usuario
  'description': "description_example", // String | Descripción para el nuevo usuario
  'universityId': new SwaggerUnicast.ModelNull(), // ModelNull | Universidad del usuario
  'photo': "/path/to/file" // File | Foto del usuario
};
apiInstance.addUser(opts, (error, data, response) => {
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
 **username** | **String**| Nombre del nuevo usuario | [optional] 
 **password** | **String**| Contraseña del nuevo usuario | [optional] 
 **email** | [**String**](String.md)| Email del nuevo usuario | [optional] 
 **description** | **String**| Descripción para el nuevo usuario | [optional] 
 **universityId** | [**ModelNull**](ModelNull.md)| Universidad del usuario | [optional] 
 **photo** | **File**| Foto del usuario | [optional] 

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

