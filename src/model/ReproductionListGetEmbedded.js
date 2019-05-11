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
import ReproductionListGetEmbeddedEmbedded from './ReproductionListGetEmbeddedEmbedded';

/**
 * The ReproductionListGetEmbedded model module.
 * @module model/ReproductionListGetEmbedded
 * @version 1.2.1
 */
class ReproductionListGetEmbedded {
    /**
     * Constructs a new <code>ReproductionListGetEmbedded</code>.
     * @alias module:model/ReproductionListGetEmbedded
     */
    constructor() { 
        
        ReproductionListGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReproductionListGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReproductionListGetEmbedded} obj Optional instance to populate.
     * @return {module:model/ReproductionListGetEmbedded} The populated <code>ReproductionListGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReproductionListGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = ReproductionListGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ReproductionListGetEmbeddedEmbedded} _embedded
 */
ReproductionListGetEmbedded.prototype['_embedded'] = undefined;






export default ReproductionListGetEmbedded;
