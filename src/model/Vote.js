/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VoteId from './VoteId';

/**
 * The Vote model module.
 * @module model/Vote
 * @version 1.2.1
 */
class Vote {
    /**
     * Constructs a new <code>Vote</code>.
     * @alias module:model/Vote
     * @param id {module:model/VoteId} 
     * @param clarity {Number} 
     * @param quality {Number} 
     * @param suitability {Number} 
     */
    constructor(id, clarity, quality, suitability) { 
        
        Vote.initialize(this, id, clarity, quality, suitability);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, clarity, quality, suitability) { 
        obj['id'] = id;
        obj['clarity'] = clarity;
        obj['quality'] = quality;
        obj['suitability'] = suitability;
    }

    /**
     * Constructs a <code>Vote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vote} obj Optional instance to populate.
     * @return {module:model/Vote} The populated <code>Vote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vote();

            if (data.hasOwnProperty('id')) {
                obj['id'] = VoteId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('clarity')) {
                obj['clarity'] = ApiClient.convertToType(data['clarity'], 'Number');
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'Number');
            }
            if (data.hasOwnProperty('suitability')) {
                obj['suitability'] = ApiClient.convertToType(data['suitability'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VoteId} id
 */
Vote.prototype['id'] = undefined;

/**
 * @member {Number} clarity
 */
Vote.prototype['clarity'] = undefined;

/**
 * @member {Number} quality
 */
Vote.prototype['quality'] = undefined;

/**
 * @member {Number} suitability
 */
Vote.prototype['suitability'] = undefined;






export default Vote;

