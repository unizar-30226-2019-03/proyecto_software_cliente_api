/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Subject from '../model/Subject';
import SubjectGetResponse from '../model/SubjectGetResponse';
import SubjectWithLinks from '../model/SubjectWithLinks';

/**
* Subject service.
* @module api/SubjectApi
* @version 1.0.6
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
     * @param {module:model/SubjectWithLinks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crear nueva asignatura
     * @param {module:model/Subject} subject Asignatura a añadir
     * @param {module:api/SubjectApi~addSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectWithLinks}
     */
    addSubject(subject, callback) {
      let postBody = subject;
      // verify the required parameter 'subject' is set
      if (subject === undefined || subject === null) {
        throw new Error("Missing the required parameter 'subject' when calling addSubject");
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
      let returnType = SubjectWithLinks;
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
     * Callback function to receive the result of the getSubjects operation.
     * @callback module:api/SubjectApi~getSubjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de asignaturas
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Numero de la página a devolver
     * @param {module:api/SubjectApi~getSubjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetResponse}
     */
    getSubjects(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = SubjectGetResponse;
      return this.apiClient.callApi(
        '/subjects', 'GET',
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
     * @param {module:model/SubjectWithLinks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualizar una asignatura
     * @param {Number} id Id de la asignatura
     * @param {module:model/Subject} subject Contenido a editar
     * @param {module:api/SubjectApi~updateSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectWithLinks}
     */
    updateSubject(id, subject, callback) {
      let postBody = subject;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubject");
      }
      // verify the required parameter 'subject' is set
      if (subject === undefined || subject === null) {
        throw new Error("Missing the required parameter 'subject' when calling updateSubject");
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
      let returnType = SubjectWithLinks;
      return this.apiClient.callApi(
        '/subjects/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
