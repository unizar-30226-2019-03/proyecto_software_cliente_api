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
[**getDegreeOfUser**](UserApi.md#getDegreeOfUser) | **GET** /users/{id}/degree | Obtener la carrera de un usuario
[**getSubjectsOfUser**](UserApi.md#getSubjectsOfUser) | **GET** /users/{id}/subjects | Obtener las asignaturas de un usuario
[**getUniversityOfUser**](UserApi.md#getUniversityOfUser) | **GET** /users/{id}/university | Obtener la universidad de un usuario
[**getUser**](UserApi.md#getUser) | **GET** /users/{id} | Obtener un usuario
[**updateUser**](UserApi.md#updateUser) | **POST** /users/update | Actualizacion de un usuario en el sistema



## addUser

> User2 addUser(username, password, name, surnames, email, description, universityId, degreeId, photo)

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

[**User2**](User2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## authUser

> Token2 authUser(username, password)

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

[**Token2**](Token2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## findUsersContainingName

> UserGetEmbedded2 findUsersContainingName(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **name** | **String**| String a buscar en el nombre de usuarios | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersContainingSurname

> UserGetEmbedded2 findUsersContainingSurname(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **surnames** | **String**| String a buscar en los apellidos de usuarios | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersContainingUsername

> UserGetEmbedded2 findUsersContainingUsername(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **username** | **String**| String a buscar en el nombre de usuarios | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithName

> UserGetEmbedded2 findUsersStartsWithName(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **name** | **String**| Comienzo del nombre del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithSurnames

> UserGetEmbedded2 findUsersStartsWithSurnames(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **surnames** | **String**| Comienzo de los apellidos del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findUsersStartsWithUsername

> UserGetEmbedded2 findUsersStartsWithUsername(opts)

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
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
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
 **cacheControl** | **String**|  | [optional] [default to &#39;no-cache, no-store, must-revalidate&#39;]
 **pragma** | **String**|  | [optional] [default to &#39;no-cache&#39;]
 **expires** | **String**|  | [optional] [default to &#39;0&#39;]
 **username** | **String**| Comienzo del username del usuario a buscar | [optional] 

### Return type

[**UserGetEmbedded2**](UserGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDegreeOfUser

> Degree2 getDegreeOfUser(id, opts)

Obtener la carrera de un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let id = 789; // Number | Id del usuario
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getDegreeOfUser(id, opts, (error, data, response) => {
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

### Return type

[**Degree2**](Degree2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getSubjectsOfUser

> SubjectGetEmbedded2 getSubjectsOfUser(id, opts)

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
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'", // String | 
  'projection': "'subjectWithUniversity'" // String | Incluir si se quiere obtener tambien la universidad en la respuesta
};
apiInstance.getSubjectsOfUser(id, opts, (error, data, response) => {
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
 **projection** | **String**| Incluir si se quiere obtener tambien la universidad en la respuesta | [optional] [default to &#39;subjectWithUniversity&#39;]

### Return type

[**SubjectGetEmbedded2**](SubjectGetEmbedded2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getUniversityOfUser

> University2 getUniversityOfUser(id, opts)

Obtener la universidad de un usuario

### Example

```javascript
import SwaggerUnicast from 'swagger_unicast';
let defaultClient = SwaggerUnicast.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerUnicast.UserApi();
let id = 789; // Number | Id del usuario
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getUniversityOfUser(id, opts, (error, data, response) => {
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

### Return type

[**University2**](University2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## getUser

> User2 getUser(id, opts)

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
let opts = {
  'cacheControl': "'no-cache, no-store, must-revalidate'", // String | 
  'pragma': "'no-cache'", // String | 
  'expires': "'0'" // String | 
};
apiInstance.getUser(id, opts, (error, data, response) => {
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

### Return type

[**User2**](User2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/hal+json


## updateUser

> User2 updateUser(opts)

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

[**User2**](User2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

