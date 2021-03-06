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
import University from './University';

/**
 * The UniversityGetEmbeddedEmbedded model module.
 * @module model/UniversityGetEmbeddedEmbedded
 * @version 1.3.12
 */
class UniversityGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>UniversityGetEmbeddedEmbedded</code>.
     * @alias module:model/UniversityGetEmbeddedEmbedded
     */
    constructor() { 
        
        UniversityGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/UniversityGetEmbeddedEmbedded} The populated <code>UniversityGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetEmbeddedEmbedded();

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
UniversityGetEmbeddedEmbedded.prototype['universities'] = undefined;






export default UniversityGetEmbeddedEmbedded;

