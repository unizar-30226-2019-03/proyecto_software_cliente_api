/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Subject2 from '../model/Subject2';
import SubjectGetEmbedded2 from '../model/SubjectGetEmbedded2';
import SubjectGetResponse2 from '../model/SubjectGetResponse2';
import VideoGetEmbedded2 from '../model/VideoGetEmbedded2';

/**
* Subject service.
* @module api/SubjectApi
* @version 1.1.3
*/
export default class SubjectApi {

    /**
    * Constructs a new SubjectApi. 
    * @alias module:api/SubjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addSubject operation.
     * @callback module:api/SubjectApi~addSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subject2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crear nueva asignatura
     * @param {module:model/Subject2} subject2 Asignatura a añadir
     * @param {module:api/SubjectApi~addSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subject2}
     */
    addSubject(subject2, callback) {
      let postBody = subject2;
      // verify the required parameter 'subject2' is set
      if (subject2 === undefined || subject2 === null) {
        throw new Error("Missing the required parameter 'subject2' when calling addSubject");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/hal+json'];
      let returnType = Subject2;
      return this.apiClient.callApi(
        '/subjects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserFromSubject operation.
     * @callback module:api/SubjectApi~deleteUserFromSubjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina el usuario de la relacion con asignatura
     * @param {Number} userId Id del usuario
     * @param {Number} subjectId Id de la asignatura
     * @param {module:api/SubjectApi~deleteUserFromSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUserFromSubject(userId, subjectId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserFromSubject");
      }
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling deleteUserFromSubject");
      }

      let pathParams = {
        'user_id': userId,
        'subject_id': subjectId
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
        '/subjects/{subject_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findSubjectsContainingName operation.
     * @callback module:api/SubjectApi~findSubjectsContainingNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca asignaturas que contengan una string en el nombre
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name String a buscar en el nombre de asignaturas
     * @param {module:api/SubjectApi~findSubjectsContainingNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetResponse2}
     */
    findSubjectsContainingName(opts, callback) {
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubjectGetResponse2;
      return this.apiClient.callApi(
        '/subjects/search/nameContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findSubjectsStartsWithName operation.
     * @callback module:api/SubjectApi~findSubjectsStartsWithNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca asignaturas que empiecen por un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name Comienzo del nombre de la asignatura a buscar
     * @param {module:api/SubjectApi~findSubjectsStartsWithNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetEmbedded2}
     */
    findSubjectsStartsWithName(opts, callback) {
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubjectGetEmbedded2;
      return this.apiClient.callApi(
        '/subjects/search/nameStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjects operation.
     * @callback module:api/SubjectApi~getSubjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de asignaturas
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/SubjectApi~getSubjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetResponse2}
     */
    getSubjects(opts, callback) {
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = SubjectGetResponse2;
      return this.apiClient.callApi(
        '/subjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideosFromSubject operation.
     * @callback module:api/SubjectApi~getVideosFromSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista con los videos de una asignatura
     * @param {Number} id Id de la asignatura
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/SubjectApi~getVideosFromSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetEmbedded2}
     */
    getVideosFromSubject(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideosFromSubject");
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
      let accepts = ['application/json'];
      let returnType = VideoGetEmbedded2;
      return this.apiClient.callApi(
        '/subjects/{id}/videos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putUser operation.
     * @callback module:api/SubjectApi~putUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Relacionar un usuario con una asignatura (tanto profesores como alumnos)
     * @param {Number} id Id de la asignatura
     * @param {Number} body Link del usuario a asociar con la asignatura
     * @param {module:api/SubjectApi~putUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putUser(id, body, callback) {
      let postBody = body;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putUser");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putUser");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['text/uri-list'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/{id}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubject operation.
     * @callback module:api/SubjectApi~updateSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subject2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualizar una asignatura
     * @param {Number} id Id de la asignatura
     * @param {module:model/Subject2} subject2 Contenido a editar
     * @param {module:api/SubjectApi~updateSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subject2}
     */
    updateSubject(id, subject2, callback) {
      let postBody = subject2;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubject");
      }
      // verify the required parameter 'subject2' is set
      if (subject2 === undefined || subject2 === null) {
        throw new Error("Missing the required parameter 'subject2' when calling updateSubject");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/hal+json'];
      let returnType = Subject2;
      return this.apiClient.callApi(
        '/subjects/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
