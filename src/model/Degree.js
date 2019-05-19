/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Degree model module.
 * @module model/Degree
 * @version 1.3.5
 */
class Degree {
    /**
     * Constructs a new <code>Degree</code>.
     * @alias module:model/Degree
     * @param name {String} 
     */
    constructor(name) { 
        
        Degree.initialize(this, name);
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
     * Constructs a <code>Degree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Degree} obj Optional instance to populate.
     * @return {module:model/Degree} The populated <code>Degree</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Degree();

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
Degree.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Degree.prototype['name'] = undefined;






export default Degree;

