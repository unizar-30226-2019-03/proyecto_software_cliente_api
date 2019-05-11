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

/**
 * The DisplayId model module.
 * @module model/DisplayId
 * @version 1.2.1
 */
class DisplayId {
    /**
     * Constructs a new <code>DisplayId</code>.
     * @alias module:model/DisplayId
     */
    constructor() { 
        
        DisplayId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayId} obj Optional instance to populate.
     * @return {module:model/DisplayId} The populated <code>DisplayId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayId();

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
DisplayId.prototype['videoId'] = undefined;

/**
 * @member {Number} userId
 */
DisplayId.prototype['userId'] = undefined;






export default DisplayId;

