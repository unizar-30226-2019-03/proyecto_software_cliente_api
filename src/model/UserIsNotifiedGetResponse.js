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
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import UserIsNotifiedGetEmbedded from './UserIsNotifiedGetEmbedded';
import UserIsNotifiedGetEmbeddedEmbedded from './UserIsNotifiedGetEmbeddedEmbedded';

/**
 * The UserIsNotifiedGetResponse model module.
 * @module model/UserIsNotifiedGetResponse
 * @version 1.3.2
 */
class UserIsNotifiedGetResponse {
    /**
     * Constructs a new <code>UserIsNotifiedGetResponse</code>.
     * @alias module:model/UserIsNotifiedGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/UserIsNotifiedGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);UserIsNotifiedGetEmbedded.initialize(this);
        UserIsNotifiedGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotifiedGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotifiedGetResponse} obj Optional instance to populate.
     * @return {module:model/UserIsNotifiedGetResponse} The populated <code>UserIsNotifiedGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotifiedGetResponse();
            GetResponse.constructFromObject(data, obj);
            UserIsNotifiedGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserIsNotifiedGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
UserIsNotifiedGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/UserIsNotifiedGetEmbeddedEmbedded} _embedded
 */
UserIsNotifiedGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement UserIsNotifiedGetEmbedded interface:
/**
 * @member {module:model/UserIsNotifiedGetEmbeddedEmbedded} _embedded
 */
UserIsNotifiedGetEmbedded.prototype['_embedded'] = undefined;




export default UserIsNotifiedGetResponse;

