/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DegreeGetEmbedded2 from '../model/DegreeGetEmbedded2';
import SubjectGetEmbedded2 from '../model/SubjectGetEmbedded2';
import University2 from '../model/University2';
import UniversityGetEmbedded2 from '../model/UniversityGetEmbedded2';
import UniversityGetResponse2 from '../model/UniversityGetResponse2';

/**
* University service.
* @module api/UniversityApi
* @version 1.3.1
*/
export default class UniversityApi {

    /**
    * Constructs a new UniversityApi. 
    * @alias module:api/UniversityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addUniversity operation.
     * @callback module:api/UniversityApi~addUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/University2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crear nueva universidad
     * @param {String} name Nombre de la nueva universidad
     * @param {File} photo Foto de la universidad
     * @param {module:api/UniversityApi~addUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/University2}
     */
    addUniversity(name, photo, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addUniversity");
      }
      // verify the required parameter 'photo' is set
      if (photo === undefined || photo === null) {
        throw new Error("Missing the required parameter 'photo' when calling addUniversity");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'photo': photo
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = University2;
      return this.apiClient.callApi(
        '/universities/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUniversity operation.
     * @callback module:api/UniversityApi~deleteUniversityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eliminacion de una universidad
     * @param {Number} id 
     * @param {module:api/UniversityApi~deleteUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUniversity(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUniversity");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/universities/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUniversitiesContaining operation.
     * @callback module:api/UniversityApi~findUniversitiesContainingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversityGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca universidades que contengan en el nombre la string dada
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name String a buscar en el nombre
     * @param {module:api/UniversityApi~findUniversitiesContainingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversityGetEmbedded2}
     */
    findUniversitiesContaining(opts, callback) {
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
      let returnType = UniversityGetEmbedded2;
      return this.apiClient.callApi(
        '/universities/search/nameContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUniversitiesStartsWith operation.
     * @callback module:api/UniversityApi~findUniversitiesStartsWithCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversityGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca universidades que empiecen por el nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name Comienzo del nombre de la universidad a buscar
     * @param {module:api/UniversityApi~findUniversitiesStartsWithCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversityGetEmbedded2}
     */
    findUniversitiesStartsWith(opts, callback) {
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
      let returnType = UniversityGetEmbedded2;
      return this.apiClient.callApi(
        '/universities/search/nameStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDegreesFromUniversity operation.
     * @callback module:api/UniversityApi~getDegreesFromUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DegreeGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista con las carreras de una universidad
     * @param {Number} id Id de la universidad
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/UniversityApi~getDegreesFromUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DegreeGetEmbedded2}
     */
    getDegreesFromUniversity(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDegreesFromUniversity");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DegreeGetEmbedded2;
      return this.apiClient.callApi(
        '/universities/{id}/degrees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubjectsFromUniversity operation.
     * @callback module:api/UniversityApi~getSubjectsFromUniversityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubjectGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista con las asignaturas de una universidad
     * @param {Number} id Id de la universidad
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/UniversityApi~getSubjectsFromUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubjectGetEmbedded2}
     */
    getSubjectsFromUniversity(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubjectsFromUniversity");
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
      let accepts = ['application/json'];
      let returnType = SubjectGetEmbedded2;
      return this.apiClient.callApi(
        '/universities/{id}/subjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniversities operation.
     * @callback module:api/UniversityApi~getUniversitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversityGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de universidades
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/UniversityApi~getUniversitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversityGetResponse2}
     */
    getUniversities(opts, callback) {
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
      let returnType = UniversityGetResponse2;
      return this.apiClient.callApi(
        '/universities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
