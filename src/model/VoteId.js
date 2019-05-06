/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VoteId model module.
 * @module model/VoteId
 * @version 1.1.5
 */
class VoteId {
    /**
     * Constructs a new <code>VoteId</code>.
     * @alias module:model/VoteId
     * @param videoId {Number} 
     * @param userId {Number} 
     */
    constructor(videoId, userId) { 
        
        VoteId.initialize(this, videoId, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, videoId, userId) { 
        obj['videoId'] = videoId;
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>VoteId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoteId} obj Optional instance to populate.
     * @return {module:model/VoteId} The populated <code>VoteId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoteId();

            if (data.hasOwnProperty('videoId')) {
                obj['videoId'] = ApiClient.convertToType(data['videoId'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} videoId
 */
VoteId.prototype['videoId'] = undefined;

/**
 * @member {Number} userId
 */
VoteId.prototype['userId'] = undefined;






export default VoteId;

