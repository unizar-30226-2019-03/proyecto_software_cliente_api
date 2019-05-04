/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Video from '../model/Video';
import VideoGetResponse from '../model/VideoGetResponse';

/**
* Video service.
* @module api/VideoApi
* @version 1.0.10
*/
export default class VideoApi {

    /**
    * Constructs a new VideoApi. 
    * @alias module:api/VideoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addVideo operation.
     * @callback module:api/VideoApi~addVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subida de un nuevo video
     * Adicion de nuevo video
     * @param {File} file 
     * @param {File} thumbnail 
     * @param {String} title 
     * @param {String} description 
     * @param {Number} subjectId 
     * @param {module:api/VideoApi~addVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video}
     */
    addVideo(file, thumbnail, title, description, subjectId, callback) {
      let postBody = null;
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling addVideo");
      }
      // verify the required parameter 'thumbnail' is set
      if (thumbnail === undefined || thumbnail === null) {
        throw new Error("Missing the required parameter 'thumbnail' when calling addVideo");
      }
      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling addVideo");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling addVideo");
      }
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling addVideo");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file,
        'thumbnail': thumbnail,
        'title': title,
        'description': description,
        'subject_id': subjectId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Video;
      return this.apiClient.callApi(
        '/upload/video', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findVideosContainingTitle operation.
     * @callback module:api/VideoApi~findVideosContainingTitleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca videos que contengan una string en el titulo
     * @param {Object} opts Optional parameters
     * @param {String} opts.title String a buscar en el titulo de videos
     * @param {module:api/VideoApi~findVideosContainingTitleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse}
     */
    findVideosContainingTitle(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'title': opts['title']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse;
      return this.apiClient.callApi(
        '/videos/search/titleContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findVideosStartsWithTitle operation.
     * @callback module:api/VideoApi~findVideosStartsWithTitleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca videos que empiecen por un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Comienzo del nombre de los videos a buscar
     * @param {module:api/VideoApi~findVideosStartsWithTitleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video}
     */
    findVideosStartsWithTitle(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'title': opts['title']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Video;
      return this.apiClient.callApi(
        '/videos/search/titleStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideos operation.
     * @callback module:api/VideoApi~getVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de videos
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/VideoApi~getVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse}
     */
    getVideos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse;
      return this.apiClient.callApi(
        '/videos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
