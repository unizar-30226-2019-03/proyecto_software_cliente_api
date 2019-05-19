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
 * The InlineObject17 model module.
 * @module model/InlineObject17
 * @version 1.3.4
 */
class InlineObject17 {
    /**
     * Constructs a new <code>InlineObject17</code>.
     * @alias module:model/InlineObject17
     * @param name {String} Nombre de la lista que se va a añadir
     */
    constructor(name) { 
        
        InlineObject17.initialize(this, name);
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
     * Constructs a <code>InlineObject17</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject17} obj Optional instance to populate.
     * @return {module:model/InlineObject17} The populated <code>InlineObject17</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject17();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Nombre de la lista que se va a añadir
 * @member {String} name
 */
InlineObject17.prototype['name'] = undefined;






export default InlineObject17;

