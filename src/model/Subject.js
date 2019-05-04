/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Subject model module.
 * @module model/Subject
 * @version 1.0.12
 */
class Subject {
    /**
     * Constructs a new <code>Subject</code>.
     * @alias module:model/Subject
     * @param name {String} 
     * @param abbreviation {String} 
     */
    constructor(name, abbreviation) { 
        
        Subject.initialize(this, name, abbreviation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, abbreviation) { 
        obj['name'] = name;
        obj['abbreviation'] = abbreviation;
    }

    /**
     * Constructs a <code>Subject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subject} obj Optional instance to populate.
     * @return {module:model/Subject} The populated <code>Subject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('abbreviation')) {
                obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Subject.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Subject.prototype['name'] = undefined;

/**
 * @member {String} abbreviation
 */
Subject.prototype['abbreviation'] = undefined;






export default Subject;

