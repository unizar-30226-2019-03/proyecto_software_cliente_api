/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Exception2 from '../model/Exception2';
import ReproductionList2 from '../model/ReproductionList2';
import ReproductionListGetResponse2 from '../model/ReproductionListGetResponse2';

/**
* ReproductionList service.
* @module api/ReproductionListApi
* @version 1.3.10
*/
export default class ReproductionListApi {

    /**
    * Constructs a new ReproductionListApi. 
    * @alias module:api/ReproductionListApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addReproductionList operation.
     * @callback module:api/ReproductionListApi~addReproductionListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReproductionList2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Añadir una lista de reproduccion
     * Añadir una lista de reproduccion
     * @param {String} name Nombre de la lista que se va a añadir
     * @param {module:api/ReproductionListApi~addReproductionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReproductionList2}
     */
    addReproductionList(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addReproductionList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ReproductionList2;
      return this.apiClient.callApi(
        '/reproductionLists/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addVideotoReproductionList operation.
     * @callback module:api/ReproductionListApi~addVideotoReproductionListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adicion de un video de la lista (si se es propietario de la lista)
     * @param {Number} reproListId 
     * @param {Number} videoId 
     * @param {module:api/ReproductionListApi~addVideotoReproductionListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addVideotoReproductionList(reproListId, videoId, callback) {
      let postBody = null;
      // verify the required parameter 'reproListId' is set
      if (reproListId === undefined || reproListId === null) {
        throw new Error("Missing the required parameter 'reproListId' when calling addVideotoReproductionList");
      }
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling addVideotoReproductionList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'repro_list_id': reproListId,
        'video_id': videoId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/reproductionLists/addVideo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteReproductionList operation.
     * @callback module:api/ReproductionListApi~deleteReproductionListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Elimina una lista de reproduccion
     * @param {Number} id Id de la lista que se quiere eliminar
     * @param {module:api/ReproductionListApi~deleteReproductionListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteReproductionList(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteReproductionList");
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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/reproductionLists/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVideoFromReproductionList operation.
     * @callback module:api/ReproductionListApi~deleteVideoFromReproductionListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eliminacion de un video de la lista (si se es propietario de la lista)
     * @param {Number} reproListId 
     * @param {Number} videoId 
     * @param {module:api/ReproductionListApi~deleteVideoFromReproductionListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVideoFromReproductionList(reproListId, videoId, callback) {
      let postBody = null;
      // verify the required parameter 'reproListId' is set
      if (reproListId === undefined || reproListId === null) {
        throw new Error("Missing the required parameter 'reproListId' when calling deleteVideoFromReproductionList");
      }
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling deleteVideoFromReproductionList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'repro_list_id': reproListId,
        'video_id': videoId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/reproductionLists/deleteVideo', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getReproductionListVideoIn operation.
     * @callback module:api/ReproductionListApi~getReproductionListVideoInCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReproductionListGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtiene la lista de listas de reproduccion en las que esta un video
     * @param {Number} videoId Id del video que se quiere mirar
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/ReproductionListApi~getReproductionListVideoInCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReproductionListGetResponse2}
     */
    getReproductionListVideoIn(videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getReproductionListVideoIn");
      }

      let pathParams = {
      };
      let queryParams = {
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
      let returnType = ReproductionListGetResponse2;
      return this.apiClient.callApi(
        '/reproductionLists/search/videoAndUser', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserReproductionLists operation.
     * @callback module:api/ReproductionListApi~getUserReproductionListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReproductionListGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve las listas de un usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:api/ReproductionListApi~getUserReproductionListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReproductionListGetResponse2}
     */
    getUserReproductionLists(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = ReproductionListGetResponse2;
      return this.apiClient.callApi(
        '/reproductionLists/search/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
