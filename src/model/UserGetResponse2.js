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
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';
import UserGetEmbedded2 from './UserGetEmbedded2';
import UserGetEmbedded2Embedded from './UserGetEmbedded2Embedded';

/**
 * The UserGetResponse2 model module.
 * @module model/UserGetResponse2
 * @version 1.3.3
 */
class UserGetResponse2 {
    /**
     * Constructs a new <code>UserGetResponse2</code>.
     * @alias module:model/UserGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/UserGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);UserGetEmbedded2.initialize(this);
        UserGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGetResponse2} obj Optional instance to populate.
     * @return {module:model/UserGetResponse2} The populated <code>UserGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            UserGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
UserGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/UserGetEmbedded2Embedded} _embedded
 */
UserGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement UserGetEmbedded2 interface:
/**
 * @member {module:model/UserGetEmbedded2Embedded} _embedded
 */
UserGetEmbedded2.prototype['_embedded'] = undefined;




export default UserGetResponse2;

