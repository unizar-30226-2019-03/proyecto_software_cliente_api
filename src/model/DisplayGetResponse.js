/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DisplayGetEmbedded from './DisplayGetEmbedded';
import DisplayGetEmbeddedEmbedded from './DisplayGetEmbeddedEmbedded';
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';

/**
 * The DisplayGetResponse model module.
 * @module model/DisplayGetResponse
 * @version 1.3.2
 */
class DisplayGetResponse {
    /**
     * Constructs a new <code>DisplayGetResponse</code>.
     * @alias module:model/DisplayGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/DisplayGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);DisplayGetEmbedded.initialize(this);
        DisplayGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayGetResponse} obj Optional instance to populate.
     * @return {module:model/DisplayGetResponse} The populated <code>DisplayGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayGetResponse();
            GetResponse.constructFromObject(data, obj);
            DisplayGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = DisplayGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
DisplayGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/DisplayGetEmbeddedEmbedded} _embedded
 */
DisplayGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement DisplayGetEmbedded interface:
/**
 * @member {module:model/DisplayGetEmbeddedEmbedded} _embedded
 */
DisplayGetEmbedded.prototype['_embedded'] = undefined;




export default DisplayGetResponse;

