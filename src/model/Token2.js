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

import ApiClient from '../ApiClient';

/**
 * The Token2 model module.
 * @module model/Token2
 * @version 1.3.4
 */
class Token2 {
    /**
     * Constructs a new <code>Token2</code>.
     * @alias module:model/Token2
     * @param token {String} 
     */
    constructor(token) { 
        
        Token2.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Token2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Token2} obj Optional instance to populate.
     * @return {module:model/Token2} The populated <code>Token2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Token2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Token2.prototype['id'] = undefined;

/**
 * @member {String} token
 */
Token2.prototype['token'] = undefined;






export default Token2;

