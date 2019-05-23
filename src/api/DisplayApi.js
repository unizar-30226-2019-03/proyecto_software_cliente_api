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
import Display2 from '../model/Display2';
import DisplayGetResponse2 from '../model/DisplayGetResponse2';
import Exception2 from '../model/Exception2';

/**
* Display service.
* @module api/DisplayApi
* @version 1.3.8
*/
export default class DisplayApi {

    /**
    * Constructs a new DisplayApi. 
    * @alias module:api/DisplayApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteDisplay operation.
     * @callback module:api/DisplayApi~deleteDisplayCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina la visualizacion dada
     * @param {Number} videoId Id del video de la visualizacion a borrar
     * @param {module:api/DisplayApi~deleteDisplayCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDisplay(videoId, callback) {
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling deleteDisplay");
      }

      let pathParams = {
        'video_id': videoId
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
        '/displays/{video_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findByUserIdAndVideoId operation.
     * @callback module:api/DisplayApi~findByUserIdAndVideoIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Display2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener la display de un video y de un usuario concretos
     * @param {Number} videoId Id del video que se quiere mirar
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien los videos en la respuesta (default to 'displayWithVideo')
     * @param {module:api/DisplayApi~findByUserIdAndVideoIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Display2}
     */
    findByUserIdAndVideoId(videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling findByUserIdAndVideoId");
      }

      let pathParams = {
      };
      let queryParams = {
        'projection': opts['projection'],
        'video_id': videoId
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
      let returnType = Display2;
      return this.apiClient.callApi(
        '/displays/search/userAndVideo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDisplaysByUser operation.
     * @callback module:api/DisplayApi~getDisplaysByUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DisplayGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista de visualizaciones que pertenezcan al usuario dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien los videos en la respuesta (default to 'displayWithVideo')
     * @param {module:api/DisplayApi~getDisplaysByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DisplayGetResponse2}
     */
    getDisplaysByUser(opts, callback) {
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

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DisplayGetResponse2;
      return this.apiClient.callApi(
        '/displays/search/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDisplay operation.
     * @callback module:api/DisplayApi~updateDisplayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Display2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Actualiza una visualizacion
     * Actualiza una visualizacion
     * @param {Number} secsFromBeg Segundos que se han visualizados del video
     * @param {Number} videoId Id del video que se esta visualizando
     * @param {module:api/DisplayApi~updateDisplayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Display2}
     */
    updateDisplay(secsFromBeg, videoId, callback) {
      let postBody = null;
      // verify the required parameter 'secsFromBeg' is set
      if (secsFromBeg === undefined || secsFromBeg === null) {
        throw new Error("Missing the required parameter 'secsFromBeg' when calling updateDisplay");
      }
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling updateDisplay");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'secs_from_beg': secsFromBeg,
        'video_id': videoId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Display2;
      return this.apiClient.callApi(
        '/displays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
