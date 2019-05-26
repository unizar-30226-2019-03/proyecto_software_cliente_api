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
import UniversityGetEmbeddedEmbedded from './UniversityGetEmbeddedEmbedded';

/**
 * The UniversityGetEmbedded model module.
 * @module model/UniversityGetEmbedded
 * @version 1.3.11
 */
class UniversityGetEmbedded {
    /**
     * Constructs a new <code>UniversityGetEmbedded</code>.
     * @alias module:model/UniversityGetEmbedded
     */
    constructor() { 
        
        UniversityGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetEmbedded} obj Optional instance to populate.
     * @return {module:model/UniversityGetEmbedded} The populated <code>UniversityGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UniversityGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UniversityGetEmbeddedEmbedded} _embedded
 */
UniversityGetEmbedded.prototype['_embedded'] = undefined;






export default UniversityGetEmbedded;

