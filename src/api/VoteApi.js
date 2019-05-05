/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Vote2 from '../model/Vote2';

/**
* Vote service.
* @module api/VoteApi
* @version 1.1.4
*/
export default class VoteApi {

    /**
    * Constructs a new VoteApi. 
    * @alias module:api/VoteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addVote operation.
     * @callback module:api/VoteApi~addVoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Vote2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subida de un nuevo voto
     * Adicion de nuevo voto
     * @param {module:model/Vote2} vote2 Voto que se va a añadir
     * @param {module:api/VoteApi~addVoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Vote2}
     */
    addVote(vote2, callback) {
      let postBody = vote2;
      // verify the required parameter 'vote2' is set
      if (vote2 === undefined || vote2 === null) {
        throw new Error("Missing the required parameter 'vote2' when calling addVote");
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
      let accepts = ['application/json'];
      let returnType = Vote2;
      return this.apiClient.callApi(
        '/votes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
