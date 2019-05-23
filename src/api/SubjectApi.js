/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Exception2 from '../model/Exception2';
import Subject2 from '../model/Subject2';
import SubjectGetEmbedded2 from '../model/SubjectGetEmbedded2';
import SubjectGetResponse2 from '../model/SubjectGetResponse2';
import UserGetEmbedded2 from '../model/UserGetEmbedded2';

/**
* Subject service.
* @module api/SubjectApi
* @version 1.3.8
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
     * Callback function to receive the result of the addProfessor operation.
     * @callback module:api/SubjectApi~addProfessorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Añadir un profesor a una asignatura
     * Añadir un profesor a una asignatura
     * @param {Number} subjectId Id de la asignatura a la que se va a añadir el profesor
     * @param {Number} professorId Id del profesor que se va a añadir
     * @param {module:api/SubjectApi~addProfessorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addProfessor(subjectId, professorId, callback) {
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling addProfessor");
      }
      // verify the required parameter 'professorId' is set
      if (professorId === undefined || professorId === null) {
        throw new Error("Missing the required parameter 'professorId' when calling addProfessor");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'subject_id': subjectId,
        'professor_id': professorId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/professors', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
     * Callback function to receive the result of the deleteProfessor operation.
     * @callback module:api/SubjectApi~deleteProfessorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eliminar un profesor a una asignatura
     * Eliminar un profesor a una asignatura
     * @param {Number} subjectId Id de la asignatura de la que se va a borar  el profesor
     * @param {Number} professorId Id del profesor que se va a eliminar
     * @param {module:api/SubjectApi~deleteProfessorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProfessor(subjectId, professorId, callback) {
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling deleteProfessor");
      }
      // verify the required parameter 'professorId' is set
      if (professorId === undefined || professorId === null) {
        throw new Error("Missing the required parameter 'professorId' when calling deleteProfessor");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'subject_id': subjectId,
        'professor_id': professorId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/professors', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubject operation.
     * @callback module:api/SubjectApi~deleteSubjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina la asignatura
     * @param {Number} id Id de la asignatura
     * @param {module:api/SubjectApi~deleteSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSubject(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubject");
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
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the existsUserInSubject operation.
     * @callback module:api/SubjectApi~existsUserInSubjectCallback
     * @param {String} error Error message, if any.
     * @param {Boolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve si un usuario esta en una asignatura
     * @param {Number} subjectId Id de la asignatura en la que buscar
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/SubjectApi~existsUserInSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Boolean}
     */
    existsUserInSubject(subjectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling existsUserInSubject");
      }

      let pathParams = {
      };
      let queryParams = {
        'subject_id': subjectId
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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/subjects/search/userIn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findSubjectsByName operation.
     * @callback module:api/SubjectApi~findSubjectsByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca una asignatura con un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {String} opts.name Nombre a buscar
     * @param {module:api/SubjectApi~findSubjectsByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetEmbedded2}
     */
    findSubjectsByName(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'projection': opts['projection'],
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
        '/subjects/search/name', 'GET',
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
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
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
        'projection': opts['projection'],
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
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
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
        'projection': opts['projection'],
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
     * Callback function to receive the result of the followSubject operation.
     * @callback module:api/SubjectApi~followSubjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Seguir asignaturas
     * Seguimiento de asignaturas
     * @param {Number} subjectId Id de la asignatura que se va a seguir
     * @param {module:api/SubjectApi~followSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    followSubject(subjectId, callback) {
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling followSubject");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'subject_id': subjectId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/follow', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfessorsFromSubject operation.
     * @callback module:api/SubjectApi~getProfessorsFromSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista con los profesores de la asignatura
     * @param {Number} id Id de la asignatura
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/SubjectApi~getProfessorsFromSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserGetEmbedded2}
     */
    getProfessorsFromSubject(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProfessorsFromSubject");
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
      let returnType = UserGetEmbedded2;
      return this.apiClient.callApi(
        '/subjects/{id}/professors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjectById operation.
     * @callback module:api/SubjectApi~getSubjectByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subject2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener una asignatura
     * @param {Number} id Id de la asignatura
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/SubjectApi~getSubjectByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subject2}
     */
    getSubjectById(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubjectById");
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
      let returnType = Subject2;
      return this.apiClient.callApi(
        '/subjects/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjectRanking operation.
     * @callback module:api/SubjectApi~getSubjectRankingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve el ranking de asignaturas
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {Number} opts.page Número de la página a devolver
     * @param {module:api/SubjectApi~getSubjectRankingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetResponse2}
     */
    getSubjectRanking(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'projection': opts['projection'],
        'page': opts['page']
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
      let returnType = SubjectGetResponse2;
      return this.apiClient.callApi(
        '/subjects/search/ranking', 'GET',
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
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
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
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection']
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
     * Callback function to receive the result of the putUniversity operation.
     * @callback module:api/SubjectApi~putUniversityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Relacionar una universidad con una asignatura
     * @param {Number} id Id de la asignatura
     * @param {Number} body Id de la universidad a asociar con la asignatura
     * @param {module:api/SubjectApi~putUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putUniversity(id, body, callback) {
      let postBody = body;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putUniversity");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putUniversity");
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
        '/subjects/{id}/university', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unfollowSubject operation.
     * @callback module:api/SubjectApi~unfollowSubjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dejar de seguir asignaturas
     * Dejar de seguir asignaturas
     * @param {Number} subjectId Id de la asignatura que se va a dejar de seguir
     * @param {module:api/SubjectApi~unfollowSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unfollowSubject(subjectId, callback) {
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling unfollowSubject");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'subject_id': subjectId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/subjects/unfollow', 'DELETE',
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
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/SubjectApi~updateSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subject2}
     */
    updateSubject(id, subject2, opts, callback) {
      opts = opts || {};
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
        'projection': opts['projection']
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
