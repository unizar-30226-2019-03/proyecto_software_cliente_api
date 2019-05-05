/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The University model module.
 * @module model/University
 * @version 1.1.3
 */
class University {
    /**
     * Constructs a new <code>University</code>.
     * @alias module:model/University
     * @param name {String} 
     * @param photo {String} 
     */
    constructor(name, photo) { 
        
        University.initialize(this, name, photo);
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
     * Constructs a <code>University</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/University} obj Optional instance to populate.
     * @return {module:model/University} The populated <code>University</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new University();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
University.prototype['id'] = undefined;

/**
 * @member {String} name
 */
University.prototype['name'] = undefined;

/**
 * @member {String} photo
 */
University.prototype['photo'] = undefined;






export default University;

