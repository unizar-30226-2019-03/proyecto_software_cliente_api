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
import UniversityGetEmbedded2Embedded from './UniversityGetEmbedded2Embedded';

/**
 * The UniversityGetEmbedded2 model module.
 * @module model/UniversityGetEmbedded2
 * @version 1.3.11
 */
class UniversityGetEmbedded2 {
    /**
     * Constructs a new <code>UniversityGetEmbedded2</code>.
     * @alias module:model/UniversityGetEmbedded2
     */
    constructor() { 
        
        UniversityGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/UniversityGetEmbedded2} The populated <code>UniversityGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UniversityGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UniversityGetEmbedded2Embedded} _embedded
 */
UniversityGetEmbedded2.prototype['_embedded'] = undefined;






export default UniversityGetEmbedded2;

