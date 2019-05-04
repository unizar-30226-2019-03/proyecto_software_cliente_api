# SwaggerUnicast.UserApi

All URIs are relative to *http://ec2-35-181-26-7.eu-west-3.compute.amazonaws.com:8080/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /public/register | Registro de un nuevo usuario en el sistema
[**authUser**](UserApi.md#authUser) | **POST** /public/authenticate | Autentificacion de usuarios
[**findUsersContainingName**](UserApi.md#findUsersContainingName) | **GET** /users/search/nameContaining | Busca usuarios que contengan una string en el nombre
[**findUsersContainingSurname**](UserApi.md#findUsersContainingSurname) | **GET** /users/search/surnamesContaining | Busca usuarios que contengan una string en los apellidos
[**findUsersContainingUsername**](UserApi.md#findUsersContainingUsername) | **GET** /users/search/usernameContaining | Busca usuarios que contengan una string en el username
[**findUsersStartsWithName**](UserApi.md#findUsersStartsWithName) | **GET** /users/search/nameStartsWith | Busca usuarios que empiecen por un nombre dado
[**findUsersStartsWithSurnames**](UserApi.md#findUsersStartsWithSurnames) | **GET** /users/search/surnamesStartsWith | Busca usuarios que empiecen por unos apellidos dados
[**findUsersStartsWithUsername**](UserApi.md#findUsersStartsWithUsername) | **GET** /users/search/usernameStartsWith | Busca usuarios que empiecen por un username dado
[**getSubjectsOfUser**](UserApi.md#getSubjectsOfUser) | **GET** /users/{id}/subjects | Obtener las asignaturas de un usuario
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | Obtener un usuario
[**updateUser**](UserApi.md#updateUser) | **POST** /users/update | Actualizacion de un usuario en el sistema



## addUser

> User addUser(username, password, name, surnames, email, description, universityId, degreeId, photo)

Registro de un nuevo usuario en el sistema

Adicion de nuevos usuarios

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';

let apiInstance = new SwaggerUnicast.UserApi();
let username = "username_example"; // String | Nombre de usuario del nuevo usuario
let password = "password_example"; // String | Contraseña del nuevo usuario
let name = "name_example"; // String | Nombre del nuevo usuario
let surnames = "surnames_example"; // String | Apellidos del nuevo usuario
let email = null; // String | Email del nuevo usuario
let description = "description_example"; // String | Descripción para el nuevo usuario
let universityId = 789; // Number | Universidad del usuario
let degreeId = 789; // Number | Carrera del usuario
let photo = "/path/to/file"; // File | Foto del usuario
apiInstance.addUser(username, password, name, surnames, email, description, universityId, degreeId, photo, (error, data, response) => {
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
 **username** | **String**| Nombre de usuario del nuevo usuario | 
 **password** | **String**| Contraseña del nuevo usuario | 
 **name** | **String**| Nombre del nuevo usuario | 
 **surnames** | **String**| Apellidos del nuevo usuario | 
 **email** | [**String**](String.md)| Email del nuevo usuario | 
 **description** | **String**| Descripción para el nuevo usuario | 
 **universityId** | **Number**| Universidad del usuario | 
 **degreeId** | **Number**| Carrera del usuario | 
 **photo** | **File**| Foto del usuario | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## authUser

> Token authUser(username, password)

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
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Nombre del usuario a comprobar | 
 **password** | **String**| Contraseña del nuevo usuario | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## findUsersContainingName

> UserGetEmbedded findUsersContainingName(opts)

Busca usuarios que contengan una string en el nombre

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'name': "name_example" // String | String a buscar en el nombre de usuarios
};
apiInstance.findUsersContainingName(opts, (error, data, response) => {
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
 **name** | **String**| String a buscar en el nombre de usuarios | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersContainingSurname

> UserGetEmbedded findUsersContainingSurname(opts)

Busca usuarios que contengan una string en los apellidos

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'surnames': "surnames_example" // String | String a buscar en los apellidos de usuarios
};
apiInstance.findUsersContainingSurname(opts, (error, data, response) => {
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
 **surnames** | **String**| String a buscar en los apellidos de usuarios | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersContainingUsername

> UserGetEmbedded findUsersContainingUsername(opts)

Busca usuarios que contengan una string en el username

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'username': "username_example" // String | String a buscar en el nombre de usuarios
};
apiInstance.findUsersContainingUsername(opts, (error, data, response) => {
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
 **username** | **String**| String a buscar en el nombre de usuarios | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithName

> UserGetEmbedded findUsersStartsWithName(opts)

Busca usuarios que empiecen por un nombre dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'name': "name_example" // String | Comienzo del nombre del usuario a buscar
};
apiInstance.findUsersStartsWithName(opts, (error, data, response) => {
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
 **name** | **String**| Comienzo del nombre del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithSurnames

> UserGetEmbedded findUsersStartsWithSurnames(opts)

Busca usuarios que empiecen por unos apellidos dados

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'surnames': "surnames_example" // String | Comienzo de los apellidos del usuario a buscar
};
apiInstance.findUsersStartsWithSurnames(opts, (error, data, response) => {
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
 **surnames** | **String**| Comienzo de los apellidos del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithUsername

> UserGetEmbedded findUsersStartsWithUsername(opts)

Busca usuarios que empiecen por un username dado

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'username': "username_example" // String | Comienzo del username del usuario a buscar
};
apiInstance.findUsersStartsWithUsername(opts, (error, data, response) => {
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
 **username** | **String**| Comienzo del username del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded**](UserGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubjectsOfUser

> SubjectGetEmbedded getSubjectsOfUser(id)

Obtener las asignaturas de un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let id = 789; // Number | Id del usuario
apiInstance.getSubjectsOfUser(id, (error, data, response) => {
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

### Return type

[**SubjectGetEmbedded**](SubjectGetEmbedded.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getUser

> User getUser(id)

Obtener un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let id = 789; // Number | Id del usuario
apiInstance.getUser(id, (error, data, response) => {
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

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## updateUser

> User updateUser(opts)

Actualizacion de un usuario en el sistema

Actualizacion de usuarios

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let opts = {
  'username': "username_example", // String | Nuevo nombre del usuario
  'password': "password_example", // String | Nueva contraseña del usuario
  'email': null, // String | Nuevo email del usuario
  'description': "description_example", // String | Nueva descripción para el usuario
  'name': "name_example", // String | Nuevo nombre para el usuario
  'surnames': "surnames_example", // String | Nuevos apellidos para el usuario
  'universityId': 56, // Number | Nueva universidad del usuario
  'degreeId': 56, // Number | Nueva carrera del usuario
  'photo': "/path/to/file" // File | Nueva foto del usuario
};
apiInstance.updateUser(opts, (error, data, response) => {
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
 **username** | **String**| Nuevo nombre del usuario | [optional] 
 **password** | **String**| Nueva contraseña del usuario | [optional] 
 **email** | [**String**](String.md)| Nuevo email del usuario | [optional] 
 **description** | **String**| Nueva descripción para el usuario | [optional] 
 **name** | **String**| Nuevo nombre para el usuario | [optional] 
 **surnames** | **String**| Nuevos apellidos para el usuario | [optional] 
 **universityId** | **Number**| Nueva universidad del usuario | [optional] 
 **degreeId** | **Number**| Nueva carrera del usuario | [optional] 
 **photo** | **File**| Nueva foto del usuario | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

