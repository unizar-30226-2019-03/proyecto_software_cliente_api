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
import DisplayWithVideoEmbedded2 from './DisplayWithVideoEmbedded2';

/**
 * The DisplayGetEmbedded2Embedded model module.
 * @module model/DisplayGetEmbedded2Embedded
 * @version 1.1.4
 */
class DisplayGetEmbedded2Embedded {
    /**
     * Constructs a new <code>DisplayGetEmbedded2Embedded</code>.
     * @alias module:model/DisplayGetEmbedded2Embedded
     */
    constructor() { 
        
        DisplayGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/DisplayGetEmbedded2Embedded} The populated <code>DisplayGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayGetEmbedded2Embedded();

            if (data.hasOwnProperty('displays')) {
                obj['displays'] = ApiClient.convertToType(data['displays'], [DisplayWithVideoEmbedded2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DisplayWithVideoEmbedded2>} displays
 */
DisplayGetEmbedded2Embedded.prototype['displays'] = undefined;






export default DisplayGetEmbedded2Embedded;

