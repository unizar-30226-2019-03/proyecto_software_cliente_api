/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.3.2
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * @alias module:model/InlineObject5
     * @param userId {Number} Id del usuario
     */
    constructor(userId) { 
        
        InlineObject5.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id del usuario
 * @member {Number} user_id
 */
InlineObject5.prototype['user_id'] = undefined;






export default InlineObject5;

