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
import DegreeGetEmbeddedEmbedded from './DegreeGetEmbeddedEmbedded';

/**
 * The DegreeGetEmbedded model module.
 * @module model/DegreeGetEmbedded
 * @version 1.3.12
 */
class DegreeGetEmbedded {
    /**
     * Constructs a new <code>DegreeGetEmbedded</code>.
     * @alias module:model/DegreeGetEmbedded
     */
    constructor() { 
        
        DegreeGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegreeGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeGetEmbedded} obj Optional instance to populate.
     * @return {module:model/DegreeGetEmbedded} The populated <code>DegreeGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegreeGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = DegreeGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DegreeGetEmbeddedEmbedded} _embedded
 */
DegreeGetEmbedded.prototype['_embedded'] = undefined;






export default DegreeGetEmbedded;

