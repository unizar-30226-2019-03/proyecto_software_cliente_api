/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Degree from './Degree';

/**
 * The DegreeGetEmbeddedEmbedded model module.
 * @module model/DegreeGetEmbeddedEmbedded
 * @version 1.2.1
 */
class DegreeGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>DegreeGetEmbeddedEmbedded</code>.
     * @alias module:model/DegreeGetEmbeddedEmbedded
     */
    constructor() { 
        
        DegreeGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegreeGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/DegreeGetEmbeddedEmbedded} The populated <code>DegreeGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegreeGetEmbeddedEmbedded();

            if (data.hasOwnProperty('degrees')) {
                obj['degrees'] = ApiClient.convertToType(data['degrees'], [Degree]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Degree>} degrees
 */
DegreeGetEmbeddedEmbedded.prototype['degrees'] = undefined;






export default DegreeGetEmbeddedEmbedded;

