/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PaginationPage from './PaginationPage';

/**
 * The GetResponse model module.
 * @module model/GetResponse
 * @version 1.0.12
 */
class GetResponse {
    /**
     * Constructs a new <code>GetResponse</code>.
     * @alias module:model/GetResponse
     */
    constructor() { 
        
        GetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetResponse} obj Optional instance to populate.
     * @return {module:model/GetResponse} The populated <code>GetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetResponse();

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;






export default GetResponse;

