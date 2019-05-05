/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Degree2 from './Degree2';

/**
 * The DegreeGetEmbedded2Embedded model module.
 * @module model/DegreeGetEmbedded2Embedded
 * @version 1.1.4
 */
class DegreeGetEmbedded2Embedded {
    /**
     * Constructs a new <code>DegreeGetEmbedded2Embedded</code>.
     * @alias module:model/DegreeGetEmbedded2Embedded
     */
    constructor() { 
        
        DegreeGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegreeGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/DegreeGetEmbedded2Embedded} The populated <code>DegreeGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegreeGetEmbedded2Embedded();

            if (data.hasOwnProperty('degrees')) {
                obj['degrees'] = ApiClient.convertToType(data['degrees'], [Degree2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Degree2>} degrees
 */
DegreeGetEmbedded2Embedded.prototype['degrees'] = undefined;






export default DegreeGetEmbedded2Embedded;

