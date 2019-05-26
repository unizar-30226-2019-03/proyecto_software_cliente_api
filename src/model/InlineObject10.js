/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject10 model module.
 * @module model/InlineObject10
 * @version 1.3.11
 */
class InlineObject10 {
    /**
     * Constructs a new <code>InlineObject10</code>.
     * @alias module:model/InlineObject10
     * @param name {String} Nombre de la nueva universidad
     * @param photo {File} Foto de la universidad
     */
    constructor(name, photo) { 
        
        InlineObject10.initialize(this, name, photo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, photo) { 
        obj['name'] = name;
        obj['photo'] = photo;
    }

    /**
     * Constructs a <code>InlineObject10</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject10} obj Optional instance to populate.
     * @return {module:model/InlineObject10} The populated <code>InlineObject10</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject10();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], File);
            }
        }
        return obj;
    }


}

/**
 * Nombre de la nueva universidad
 * @member {String} name
 */
InlineObject10.prototype['name'] = undefined;

/**
 * Foto de la universidad
 * @member {File} photo
 */
InlineObject10.prototype['photo'] = undefined;






export default InlineObject10;

