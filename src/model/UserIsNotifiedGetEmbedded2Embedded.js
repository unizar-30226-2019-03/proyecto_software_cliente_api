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
import UserIsNotified2 from './UserIsNotified2';

/**
 * The UserIsNotifiedGetEmbedded2Embedded model module.
 * @module model/UserIsNotifiedGetEmbedded2Embedded
 * @version 1.2.1
 */
class UserIsNotifiedGetEmbedded2Embedded {
    /**
     * Constructs a new <code>UserIsNotifiedGetEmbedded2Embedded</code>.
     * @alias module:model/UserIsNotifiedGetEmbedded2Embedded
     */
    constructor() { 
        
        UserIsNotifiedGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotifiedGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotifiedGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/UserIsNotifiedGetEmbedded2Embedded} The populated <code>UserIsNotifiedGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotifiedGetEmbedded2Embedded();

            if (data.hasOwnProperty('usersAreNotified')) {
                obj['usersAreNotified'] = ApiClient.convertToType(data['usersAreNotified'], [UserIsNotified2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UserIsNotified2>} usersAreNotified
 */
UserIsNotifiedGetEmbedded2Embedded.prototype['usersAreNotified'] = undefined;






export default UserIsNotifiedGetEmbedded2Embedded;
