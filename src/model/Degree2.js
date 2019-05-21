/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Degree2 model module.
 * @module model/Degree2
 * @version 1.3.6
 */
class Degree2 {
    /**
     * Constructs a new <code>Degree2</code>.
     * @alias module:model/Degree2
     * @param name {String} 
     */
    constructor(name) { 
        
        Degree2.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Degree2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Degree2} obj Optional instance to populate.
     * @return {module:model/Degree2} The populated <code>Degree2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Degree2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Degree2.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Degree2.prototype['name'] = undefined;






export default Degree2;

