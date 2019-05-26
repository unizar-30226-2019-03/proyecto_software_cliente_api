/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Degree2 from '../model/Degree2';
import Exception2 from '../model/Exception2';
import SubjectGetEmbedded2 from '../model/SubjectGetEmbedded2';
import Token2 from '../model/Token2';
import University2 from '../model/University2';
import User2 from '../model/User2';
import UserGetEmbedded2 from '../model/UserGetEmbedded2';
import UserGetResponse2 from '../model/UserGetResponse2';

/**
* User service.
* @module api/UserApi
* @version 1.3.11
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addUser operation.
     * @callback module:api/UserApi~addUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registro de un nuevo usuario en el sistema
     * Adicion de nuevos usuarios
     * @param {String} username Nombre de usuario del nuevo usuario
     * @param {String} password Contraseña del nuevo usuario
     * @param {String} name Nombre del nuevo usuario
     * @param {String} surnames Apellidos del nuevo usuario
     * @param {String} email Email del nuevo usuario
     * @param {String} description Descripción para el nuevo usuario
     * @param {Number} universityId Universidad del usuario
     * @param {Number} degreeId Carrera del usuario
     * @param {File} photo Foto del usuario
     * @param {module:api/UserApi~addUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User2}
     */
    addUser(username, password, name, surnames, email, description, universityId, degreeId, photo, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addUser");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling addUser");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addUser");
      }
      // verify the required parameter 'surnames' is set
      if (surnames === undefined || surnames === null) {
        throw new Error("Missing the required parameter 'surnames' when calling addUser");
      }
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling addUser");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling addUser");
      }
      // verify the required parameter 'universityId' is set
      if (universityId === undefined || universityId === null) {
        throw new Error("Missing the required parameter 'universityId' when calling addUser");
      }
      // verify the required parameter 'degreeId' is set
      if (degreeId === undefined || degreeId === null) {
        throw new Error("Missing the required parameter 'degreeId' when calling addUser");
      }
      // verify the required parameter 'photo' is set
      if (photo === undefined || photo === null) {
        throw new Error("Missing the required parameter 'photo' when calling addUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'username': username,
        'password': password,
        'name': name,
        'surnames': surnames,
        'email': email,
        'description': description,
        'university_id': universityId,
        'degree_id': degreeId,
        'photo': photo
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = User2;
      return this.apiClient.callApi(
        '/public/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authUser operation.
     * @callback module:api/UserApi~authUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autentificacion de usuarios
     * Login a un usuario
     * @param {String} username Nombre del usuario a comprobar
     * @param {String} password Contraseña del nuevo usuario
     * @param {module:api/UserApi~authUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token2}
     */
    authUser(username, password, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling authUser");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling authUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'username': username,
        'password': password
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Token2;
      return this.apiClient.callApi(
        '/public/authenticate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eliminacion de un usuario (junto a todo su contenido)
     * @param {Number} id 
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUser(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': id
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the disableUser operation.
     * @callback module:api/UserApi~disableUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deshabilita (en vez de borrarlo de la base de datos) al usuario actual
     * @param {module:api/UserApi~disableUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    disableUser(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/setDisabled', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the eraseProfessor operation.
     * @callback module:api/UserApi~eraseProfessorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina un profesor
     * Convierte a un profesor a usuario
     * @param {Number} userId Id del usuario
     * @param {module:api/UserApi~eraseProfessorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    eraseProfessor(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling eraseProfessor");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'user_id': userId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/eraseProfessor', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserByUsername operation.
     * @callback module:api/UserApi~findUserByUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca a un usuario con nombre de usuario exacto (teniendo en cuenta mayusculas y minusculas)
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.username String a buscar en el nombre de usuario
     * @param {module:api/UserApi~findUserByUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User2}
     */
    findUserByUsername(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User2;
      return this.apiClient.callApi(
        '/users/search/byUsername', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserProfessors operation.
     * @callback module:api/UserApi~findUserProfessorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca los profesores de un usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/UserApi~findUserProfessorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetResponse2}
     */
    findUserProfessors(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv')
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetResponse2;
      return this.apiClient.callApi(
        '/users/search/professors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersContainingName operation.
     * @callback module:api/UserApi~findUsersContainingNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que contengan una string en el nombre
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name String a buscar en el nombre de usuarios
     * @param {module:api/UserApi~findUsersContainingNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersContainingName(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/nameContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersContainingSurname operation.
     * @callback module:api/UserApi~findUsersContainingSurnameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que contengan una string en los apellidos
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.surnames String a buscar en los apellidos de usuarios
     * @param {module:api/UserApi~findUsersContainingSurnameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersContainingSurname(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'surnames': opts['surnames']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/surnamesContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersContainingUsername operation.
     * @callback module:api/UserApi~findUsersContainingUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que contengan una string en el username
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.username String a buscar en el nombre de usuarios
     * @param {module:api/UserApi~findUsersContainingUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersContainingUsername(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/usernameContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersStartsWithName operation.
     * @callback module:api/UserApi~findUsersStartsWithNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que empiecen por un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name Comienzo del nombre del usuario a buscar
     * @param {module:api/UserApi~findUsersStartsWithNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersStartsWithName(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/nameStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersStartsWithSurnames operation.
     * @callback module:api/UserApi~findUsersStartsWithSurnamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que empiecen por unos apellidos dados
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.surnames Comienzo de los apellidos del usuario a buscar
     * @param {module:api/UserApi~findUsersStartsWithSurnamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersStartsWithSurnames(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'surnames': opts['surnames']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/surnamesStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUsersStartsWithUsername operation.
     * @callback module:api/UserApi~findUsersStartsWithUsernameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca usuarios que empiecen por un username dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.username Comienzo del username del usuario a buscar
     * @param {module:api/UserApi~findUsersStartsWithUsernameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    findUsersStartsWithUsername(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/users/search/usernameStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDegreeOfUser operation.
     * @callback module:api/UserApi~getDegreeOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Degree2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener la carrera de un usuario
     * @param {Number} id Id del usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/UserApi~getDegreeOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Degree2}
     */
    getDegreeOfUser(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDegreeOfUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = Degree2;
      return this.apiClient.callApi(
        '/users/{id}/degree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjectsAsProfessor operation.
     * @callback module:api/UserApi~getSubjectsAsProfessorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener las las asignaturas para las que sea profesor el usuario
     * @param {Number} id Id del usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/UserApi~getSubjectsAsProfessorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetEmbedded2}
     */
    getSubjectsAsProfessor(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubjectsAsProfessor");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = SubjectGetEmbedded2;
      return this.apiClient.callApi(
        '/users/{id}/subjectsAsProfessor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjectsOfUser operation.
     * @callback module:api/UserApi~getSubjectsOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener las asignaturas de un usuario
     * @param {Number} id Id del usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/UserApi~getSubjectsOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetEmbedded2}
     */
    getSubjectsOfUser(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubjectsOfUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = SubjectGetEmbedded2;
      return this.apiClient.callApi(
        '/users/{id}/subjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniversityOfUser operation.
     * @callback module:api/UserApi~getUniversityOfUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/University2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener la universidad de un usuario
     * @param {Number} id Id del usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/UserApi~getUniversityOfUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/University2}
     */
    getUniversityOfUser(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUniversityOfUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = University2;
      return this.apiClient.callApi(
        '/users/{id}/university', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener un usuario
     * @param {Number} id Id del usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User2}
     */
    getUser(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = User2;
      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the makeProfessor operation.
     * @callback module:api/UserApi~makeProfessorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convierte un usuario a profesor
     * Convierte un usuario a profesor
     * @param {Number} userId Id del usuario
     * @param {module:api/UserApi~makeProfessorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    makeProfessor(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling makeProfessor");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'user_id': userId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/makeProfessor', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualizacion de un usuario en el sistema
     * Actualizacion de usuarios
     * @param {Object} opts Optional parameters
     * @param {String} opts.username Nuevo nombre del usuario
     * @param {String} opts.password Nueva contraseña del usuario
     * @param {String} opts.email Nuevo email del usuario
     * @param {String} opts.description Nueva descripción para el usuario
     * @param {String} opts.name Nuevo nombre para el usuario
     * @param {String} opts.surnames Nuevos apellidos para el usuario
     * @param {Number} opts.universityId Nueva universidad del usuario
     * @param {Number} opts.degreeId Nueva carrera del usuario
     * @param {File} opts.photo Nueva foto del usuario
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User2}
     */
    updateUser(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'username': opts['username'],
        'password': opts['password'],
        'email': opts['email'],
        'description': opts['description'],
        'name': opts['name'],
        'surnames': opts['surnames'],
        'university_id': opts['universityId'],
        'degree_id': opts['degreeId'],
        'photo': opts['photo']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = User2;
      return this.apiClient.callApi(
        '/users/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
