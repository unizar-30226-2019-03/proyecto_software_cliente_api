/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Degree2 from '../model/Degree2';
import DegreeGetEmbedded2 from '../model/DegreeGetEmbedded2';
import DegreeGetResponse2 from '../model/DegreeGetResponse2';
import UniversityGetEmbedded2 from '../model/UniversityGetEmbedded2';

/**
* Degree service.
* @module api/DegreeApi
* @version 1.3.3
*/
export default class DegreeApi {

    /**
    * Constructs a new DegreeApi. 
    * @alias module:api/DegreeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addDegree operation.
     * @callback module:api/DegreeApi~addDegreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Degree2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crear nueva carrera
     * @param {module:model/Degree2} degree2 Carrera a añadir
     * @param {module:api/DegreeApi~addDegreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Degree2}
     */
    addDegree(degree2, callback) {
      let postBody = degree2;
      // verify the required parameter 'degree2' is set
      if (degree2 === undefined || degree2 === null) {
        throw new Error("Missing the required parameter 'degree2' when calling addDegree");
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
      let returnType = Degree2;
      return this.apiClient.callApi(
        '/degrees', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDegree operation.
     * @callback module:api/DegreeApi~deleteDegreeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina la carrera
     * @param {Number} id Id de la carrera
     * @param {module:api/DegreeApi~deleteDegreeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDegree(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDegree");
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
        '/degrees/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findDegreesByName operation.
     * @callback module:api/DegreeApi~findDegreesByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Degree2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca una carrera con un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name Nombre a buscar
     * @param {module:api/DegreeApi~findDegreesByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Degree2}
     */
    findDegreesByName(opts, callback) {
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
      let returnType = Degree2;
      return this.apiClient.callApi(
        '/degrees/search/name', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findDegreesContainingName operation.
     * @callback module:api/DegreeApi~findDegreesContainingNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DegreeGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca carreras que contengan una string en el nombre
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name String a buscar en el nombre de carreras
     * @param {module:api/DegreeApi~findDegreesContainingNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DegreeGetResponse2}
     */
    findDegreesContainingName(opts, callback) {
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
      let returnType = DegreeGetResponse2;
      return this.apiClient.callApi(
        '/degrees/search/nameContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findDegreesStartsWith operation.
     * @callback module:api/DegreeApi~findDegreesStartsWithCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DegreeGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca carreras que empiecen por el nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {String} opts.name Comienzo del nombre de la carrera a buscar
     * @param {module:api/DegreeApi~findDegreesStartsWithCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DegreeGetEmbedded2}
     */
    findDegreesStartsWith(opts, callback) {
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
      let returnType = DegreeGetEmbedded2;
      return this.apiClient.callApi(
        '/degrees/search/nameStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDegrees operation.
     * @callback module:api/DegreeApi~getDegreesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DegreeGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de carreras
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/DegreeApi~getDegreesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DegreeGetResponse2}
     */
    getDegrees(opts, callback) {
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
      let returnType = DegreeGetResponse2;
      return this.apiClient.callApi(
        '/degrees', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUniversitiesFromDegree operation.
     * @callback module:api/DegreeApi~getUniversitiesFromDegreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UniversityGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista con las universidades de una carrera
     * @param {Number} id Id de la carrera
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/DegreeApi~getUniversitiesFromDegreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UniversityGetEmbedded2}
     */
    getUniversitiesFromDegree(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUniversitiesFromDegree");
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
      let returnType = UniversityGetEmbedded2;
      return this.apiClient.callApi(
        '/degrees/{id}/universities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putDegreeUniversity operation.
     * @callback module:api/DegreeApi~putDegreeUniversityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Relacionar una carrera con una universidad
     * @param {Number} id Id de la carrera
     * @param {Number} body Id de la universidad a asociar con la carrera
     * @param {module:api/DegreeApi~putDegreeUniversityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putDegreeUniversity(id, body, callback) {
      let postBody = body;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putDegreeUniversity");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putDegreeUniversity");
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
        '/degrees/{id}/universities', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDegree operation.
     * @callback module:api/DegreeApi~updateDegreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Degree2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualizar una carrera
     * @param {Number} id Id de la carrera
     * @param {module:model/Degree2} degree2 Contenido a editar
     * @param {module:api/DegreeApi~updateDegreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Degree2}
     */
    updateDegree(id, degree2, callback) {
      let postBody = degree2;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDegree");
      }
      // verify the required parameter 'degree2' is set
      if (degree2 === undefined || degree2 === null) {
        throw new Error("Missing the required parameter 'degree2' when calling updateDegree");
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
      let returnType = Degree2;
      return this.apiClient.callApi(
        '/degrees/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
