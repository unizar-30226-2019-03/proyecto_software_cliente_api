/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Comment2 from '../model/Comment2';
import CommentGetEmbedded2 from '../model/CommentGetEmbedded2';
import CommentGetResponse2 from '../model/CommentGetResponse2';

/**
* Comment service.
* @module api/CommentApi
* @version 1.3.4
*/
export default class CommentApi {

    /**
    * Constructs a new CommentApi. 
    * @alias module:api/CommentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addComment operation.
     * @callback module:api/CommentApi~addCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subida de un nuevo comentario
     * Adicion de nuevo comentario
     * @param {String} text 
     * @param {Number} secsFromBeg 
     * @param {Number} videoId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.commentRepliedToId 
     * @param {module:api/CommentApi~addCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment2}
     */
    addComment(text, secsFromBeg, videoId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling addComment");
      }
      // verify the required parameter 'secsFromBeg' is set
      if (secsFromBeg === undefined || secsFromBeg === null) {
        throw new Error("Missing the required parameter 'secsFromBeg' when calling addComment");
      }
      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling addComment");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'text': text,
        'secs_from_beg': secsFromBeg,
        'video_id': videoId,
        'comment_replied_to_id': opts['commentRepliedToId']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Comment2;
      return this.apiClient.callApi(
        '/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommentReplies operation.
     * @callback module:api/CommentApi~getCommentRepliesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentGetEmbedded2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve la lista de comentarios que responden al comentario dado
     * @param {Number} id Id del comentario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien el usuario que ha hecho el comentario (default to 'commentWithUser')
     * @param {module:api/CommentApi~getCommentRepliesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommentGetEmbedded2}
     */
    getCommentReplies(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCommentReplies");
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
      let returnType = CommentGetEmbedded2;
      return this.apiClient.callApi(
        '/comments/{id}/commentReplies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommentsByVideo operation.
     * @callback module:api/CommentApi~getCommentsByVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve una lista de comentarios que pertenezcan al video dado
     * @param {Number} id Id del video
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien el usuario que ha hecho el comentario (default to 'commentWithUser')
     * @param {module:api/CommentApi~getCommentsByVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommentGetResponse2}
     */
    getCommentsByVideo(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCommentsByVideo");
      }

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection'],
        'id': id
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
      let returnType = CommentGetResponse2;
      return this.apiClient.callApi(
        '/comments/search/video', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepliedToComment operation.
     * @callback module:api/CommentApi~getRepliedToCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Devuelve el comentario al que responde el comentario dado
     * @param {Number} id Id del comentario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien el usuario que ha hecho el comentario (default to 'commentWithUser')
     * @param {module:api/CommentApi~getRepliedToCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment2}
     */
    getRepliedToComment(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRepliedToComment");
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
      let returnType = Comment2;
      return this.apiClient.callApi(
        '/comments/{id}/commentRepliedTo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
