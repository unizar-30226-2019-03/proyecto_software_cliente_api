/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DisplayWithVideoEmbedded from './DisplayWithVideoEmbedded';

/**
 * The DisplayGetEmbeddedEmbedded model module.
 * @module model/DisplayGetEmbeddedEmbedded
 * @version 1.1.3
 */
class DisplayGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>DisplayGetEmbeddedEmbedded</code>.
     * @alias module:model/DisplayGetEmbeddedEmbedded
     */
    constructor() { 
        
        DisplayGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/DisplayGetEmbeddedEmbedded} The populated <code>DisplayGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayGetEmbeddedEmbedded();

            if (data.hasOwnProperty('displays')) {
                obj['displays'] = ApiClient.convertToType(data['displays'], [DisplayWithVideoEmbedded]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DisplayWithVideoEmbedded>} displays
 */
DisplayGetEmbeddedEmbedded.prototype['displays'] = undefined;






export default DisplayGetEmbeddedEmbedded;

