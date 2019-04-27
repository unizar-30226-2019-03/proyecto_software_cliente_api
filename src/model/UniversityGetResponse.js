/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetResponse from './GetResponse';
import GetResponseLinks from './GetResponseLinks';
import PaginationPage from './PaginationPage';
import UniversityGetEmbedded from './UniversityGetEmbedded';

/**
 * The UniversityGetResponse model module.
 * @module model/UniversityGetResponse
 * @version 1.0.4
 */
class UniversityGetResponse {
    /**
     * Constructs a new <code>UniversityGetResponse</code>.
     * @alias module:model/UniversityGetResponse
     * @implements module:model/GetResponse
     */
    constructor() { 
        GetResponse.initialize(this);
        UniversityGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetResponse} obj Optional instance to populate.
     * @return {module:model/UniversityGetResponse} The populated <code>UniversityGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetResponse();
            GetResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = GetResponseLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UniversityGetEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetResponseLinks} _links
 */
UniversityGetResponse.prototype['_links'] = undefined;

/**
 * @member {module:model/PaginationPage} page
 */
UniversityGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/UniversityGetEmbedded} _embedded
 */
UniversityGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/GetResponseLinks} _links
 */
GetResponse.prototype['_links'] = undefined;
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;




export default UniversityGetResponse;

