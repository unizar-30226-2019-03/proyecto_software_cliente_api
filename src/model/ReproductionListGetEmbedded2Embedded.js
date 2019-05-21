/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ReproductionList2 from './ReproductionList2';

/**
 * The ReproductionListGetEmbedded2Embedded model module.
 * @module model/ReproductionListGetEmbedded2Embedded
 * @version 1.3.6
 */
class ReproductionListGetEmbedded2Embedded {
    /**
     * Constructs a new <code>ReproductionListGetEmbedded2Embedded</code>.
     * @alias module:model/ReproductionListGetEmbedded2Embedded
     */
    constructor() { 
        
        ReproductionListGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReproductionListGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReproductionListGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/ReproductionListGetEmbedded2Embedded} The populated <code>ReproductionListGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReproductionListGetEmbedded2Embedded();

            if (data.hasOwnProperty('reproductionLists')) {
                obj['reproductionLists'] = ApiClient.convertToType(data['reproductionLists'], [ReproductionList2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ReproductionList2>} reproductionLists
 */
ReproductionListGetEmbedded2Embedded.prototype['reproductionLists'] = undefined;






export default ReproductionListGetEmbedded2Embedded;

