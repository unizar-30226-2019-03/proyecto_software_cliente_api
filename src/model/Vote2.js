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

import ApiClient from '../ApiClient';
import VoteId from './VoteId';

/**
 * The Vote2 model module.
 * @module model/Vote2
 * @version 1.3.10
 */
class Vote2 {
    /**
     * Constructs a new <code>Vote2</code>.
     * @alias module:model/Vote2
     * @param id {module:model/VoteId} 
     * @param clarity {Number} 
     * @param quality {Number} 
     * @param suitability {Number} 
     */
    constructor(id, clarity, quality, suitability) { 
        
        Vote2.initialize(this, id, clarity, quality, suitability);
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
     * Constructs a <code>Vote2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vote2} obj Optional instance to populate.
     * @return {module:model/Vote2} The populated <code>Vote2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vote2();

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
Vote2.prototype['id'] = undefined;

/**
 * @member {Number} clarity
 */
Vote2.prototype['clarity'] = undefined;

/**
 * @member {Number} quality
 */
Vote2.prototype['quality'] = undefined;

/**
 * @member {Number} suitability
 */
Vote2.prototype['suitability'] = undefined;






export default Vote2;

