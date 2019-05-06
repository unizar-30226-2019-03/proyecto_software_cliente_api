/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import VoteGetEmbedded from './VoteGetEmbedded';
import VoteGetEmbeddedEmbedded from './VoteGetEmbeddedEmbedded';

/**
 * The VoteGetResponse model module.
 * @module model/VoteGetResponse
 * @version 1.1.5
 */
class VoteGetResponse {
    /**
     * Constructs a new <code>VoteGetResponse</code>.
     * @alias module:model/VoteGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/VoteGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);VoteGetEmbedded.initialize(this);
        VoteGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VoteGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VoteGetResponse} obj Optional instance to populate.
     * @return {module:model/VoteGetResponse} The populated <code>VoteGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoteGetResponse();
            GetResponse.constructFromObject(data, obj);
            VoteGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = VoteGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
VoteGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/VoteGetEmbeddedEmbedded} _embedded
 */
VoteGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement VoteGetEmbedded interface:
/**
 * @member {module:model/VoteGetEmbeddedEmbedded} _embedded
 */
VoteGetEmbedded.prototype['_embedded'] = undefined;




export default VoteGetResponse;

