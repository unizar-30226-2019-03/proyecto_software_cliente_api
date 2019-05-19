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
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import ReproductionListGetEmbedded from './ReproductionListGetEmbedded';
import ReproductionListGetEmbeddedEmbedded from './ReproductionListGetEmbeddedEmbedded';

/**
 * The ReproductionListGetResponse model module.
 * @module model/ReproductionListGetResponse
 * @version 1.3.4
 */
class ReproductionListGetResponse {
    /**
     * Constructs a new <code>ReproductionListGetResponse</code>.
     * @alias module:model/ReproductionListGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/ReproductionListGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);ReproductionListGetEmbedded.initialize(this);
        ReproductionListGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReproductionListGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReproductionListGetResponse} obj Optional instance to populate.
     * @return {module:model/ReproductionListGetResponse} The populated <code>ReproductionListGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReproductionListGetResponse();
            GetResponse.constructFromObject(data, obj);
            ReproductionListGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = ReproductionListGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
ReproductionListGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/ReproductionListGetEmbeddedEmbedded} _embedded
 */
ReproductionListGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement ReproductionListGetEmbedded interface:
/**
 * @member {module:model/ReproductionListGetEmbeddedEmbedded} _embedded
 */
ReproductionListGetEmbedded.prototype['_embedded'] = undefined;




export default ReproductionListGetResponse;

