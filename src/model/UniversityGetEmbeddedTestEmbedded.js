/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import University from './University';

/**
 * The UniversityGetEmbeddedTestEmbedded model module.
 * @module model/UniversityGetEmbeddedTestEmbedded
 * @version 1.0.6
 */
class UniversityGetEmbeddedTestEmbedded {
    /**
     * Constructs a new <code>UniversityGetEmbeddedTestEmbedded</code>.
     * @alias module:model/UniversityGetEmbeddedTestEmbedded
     */
    constructor() { 
        
        UniversityGetEmbeddedTestEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetEmbeddedTestEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetEmbeddedTestEmbedded} obj Optional instance to populate.
     * @return {module:model/UniversityGetEmbeddedTestEmbedded} The populated <code>UniversityGetEmbeddedTestEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetEmbeddedTestEmbedded();

            if (data.hasOwnProperty('universities')) {
                obj['universities'] = ApiClient.convertToType(data['universities'], [University]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/University>} universities
 */
UniversityGetEmbeddedTestEmbedded.prototype['universities'] = undefined;






export default UniversityGetEmbeddedTestEmbedded;

