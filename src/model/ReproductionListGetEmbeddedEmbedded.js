/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ReproductionList from './ReproductionList';

/**
 * The ReproductionListGetEmbeddedEmbedded model module.
 * @module model/ReproductionListGetEmbeddedEmbedded
 * @version 1.3.1
 */
class ReproductionListGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>ReproductionListGetEmbeddedEmbedded</code>.
     * @alias module:model/ReproductionListGetEmbeddedEmbedded
     */
    constructor() { 
        
        ReproductionListGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReproductionListGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReproductionListGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/ReproductionListGetEmbeddedEmbedded} The populated <code>ReproductionListGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReproductionListGetEmbeddedEmbedded();

            if (data.hasOwnProperty('degrees')) {
                obj['degrees'] = ApiClient.convertToType(data['degrees'], [ReproductionList]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ReproductionList>} degrees
 */
ReproductionListGetEmbeddedEmbedded.prototype['degrees'] = undefined;






export default ReproductionListGetEmbeddedEmbedded;

