/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Vote from './Vote';

/**
 * The VoteGetEmbeddedEmbedded model module.
 * @module model/VoteGetEmbeddedEmbedded
 * @version 1.3.3
 */
class VoteGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>VoteGetEmbeddedEmbedded</code>.
     * @alias module:model/VoteGetEmbeddedEmbedded
     */
    constructor() { 
        
        VoteGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoteGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoteGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/VoteGetEmbeddedEmbedded} The populated <code>VoteGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoteGetEmbeddedEmbedded();

            if (data.hasOwnProperty('displays')) {
                obj['displays'] = ApiClient.convertToType(data['displays'], [Vote]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Vote>} displays
 */
VoteGetEmbeddedEmbedded.prototype['displays'] = undefined;






export default VoteGetEmbeddedEmbedded;

