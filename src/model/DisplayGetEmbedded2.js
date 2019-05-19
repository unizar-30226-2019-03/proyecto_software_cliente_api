/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DisplayGetEmbedded2Embedded from './DisplayGetEmbedded2Embedded';

/**
 * The DisplayGetEmbedded2 model module.
 * @module model/DisplayGetEmbedded2
 * @version 1.3.4
 */
class DisplayGetEmbedded2 {
    /**
     * Constructs a new <code>DisplayGetEmbedded2</code>.
     * @alias module:model/DisplayGetEmbedded2
     */
    constructor() { 
        
        DisplayGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/DisplayGetEmbedded2} The populated <code>DisplayGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = DisplayGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DisplayGetEmbedded2Embedded} _embedded
 */
DisplayGetEmbedded2.prototype['_embedded'] = undefined;






export default DisplayGetEmbedded2;

