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
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import UserGetEmbedded from './UserGetEmbedded';
import UserGetEmbeddedEmbedded from './UserGetEmbeddedEmbedded';

/**
 * The UserGetResponse model module.
 * @module model/UserGetResponse
 * @version 1.3.6
 */
class UserGetResponse {
    /**
     * Constructs a new <code>UserGetResponse</code>.
     * @alias module:model/UserGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/UserGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);UserGetEmbedded.initialize(this);
        UserGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGetResponse} obj Optional instance to populate.
     * @return {module:model/UserGetResponse} The populated <code>UserGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetResponse();
            GetResponse.constructFromObject(data, obj);
            UserGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
UserGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/UserGetEmbeddedEmbedded} _embedded
 */
UserGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement UserGetEmbedded interface:
/**
 * @member {module:model/UserGetEmbeddedEmbedded} _embedded
 */
UserGetEmbedded.prototype['_embedded'] = undefined;




export default UserGetResponse;

