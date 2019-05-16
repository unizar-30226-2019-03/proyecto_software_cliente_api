/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Message2 from '../model/Message2';
import MessageGetResponse2 from '../model/MessageGetResponse2';

/**
* Message service.
* @module api/MessageApi
* @version 1.3.0
*/
export default class MessageApi {

    /**
    * Constructs a new MessageApi. 
    * @alias module:api/MessageApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addMessage operation.
     * @callback module:api/MessageApi~addMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Message2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Crea un nuevo mensaje
     * @param {Number} receiverId id del usuario al que enviar el mensaje
     * @param {String} text Cuerpo del mensaje a enviar
     * @param {module:api/MessageApi~addMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Message2}
     */
    addMessage(receiverId, text, callback) {
      let postBody = null;
      // verify the required parameter 'receiverId' is set
      if (receiverId === undefined || receiverId === null) {
        throw new Error("Missing the required parameter 'receiverId' when calling addMessage");
      }
      // verify the required parameter 'text' is set
      if (text === undefined || text === null) {
        throw new Error("Missing the required parameter 'text' when calling addMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'receiver_id': receiverId,
        'text': text
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Message2;
      return this.apiClient.callApi(
        '/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMessagesOfSender operation.
     * @callback module:api/MessageApi~getMessagesOfSenderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MessageGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de mensajes del remitente dado
     * @param {Number} senderId Id del remitente dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:api/MessageApi~getMessagesOfSenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MessageGetResponse2}
     */
    getMessagesOfSender(senderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling getMessagesOfSender");
      }

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'sender_id': senderId
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
      let returnType = MessageGetResponse2;
      return this.apiClient.callApi(
        '/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
