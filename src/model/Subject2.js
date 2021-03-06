/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import University2 from './University2';

/**
 * The Subject2 model module.
 * @module model/Subject2
 * @version 1.3.12
 */
class Subject2 {
    /**
     * Constructs a new <code>Subject2</code>.
     * @alias module:model/Subject2
     * @param name {String} 
     * @param abbreviation {String} 
     */
    constructor(name, abbreviation) { 
        
        Subject2.initialize(this, name, abbreviation);
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
     * Constructs a <code>Subject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subject2} obj Optional instance to populate.
     * @return {module:model/Subject2} The populated <code>Subject2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subject2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('university')) {
                obj['university'] = University2.constructFromObject(data['university']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('abbreviation')) {
                obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
            }
            if (data.hasOwnProperty('avgScore')) {
                obj['avgScore'] = ApiClient.convertToType(data['avgScore'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Subject2.prototype['id'] = undefined;

/**
 * @member {module:model/University2} university
 */
Subject2.prototype['university'] = undefined;

/**
 * @member {String} name
 */
Subject2.prototype['name'] = undefined;

/**
 * @member {String} abbreviation
 */
Subject2.prototype['abbreviation'] = undefined;

/**
 * @member {Number} avgScore
 */
Subject2.prototype['avgScore'] = undefined;






export default Subject2;

