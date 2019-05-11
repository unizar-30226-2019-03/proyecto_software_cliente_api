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
import UserIsNotified from './UserIsNotified';

/**
 * The UserIsNotifiedGetEmbeddedEmbedded model module.
 * @module model/UserIsNotifiedGetEmbeddedEmbedded
 * @version 1.2.1
 */
class UserIsNotifiedGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>UserIsNotifiedGetEmbeddedEmbedded</code>.
     * @alias module:model/UserIsNotifiedGetEmbeddedEmbedded
     */
    constructor() { 
        
        UserIsNotifiedGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotifiedGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotifiedGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/UserIsNotifiedGetEmbeddedEmbedded} The populated <code>UserIsNotifiedGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotifiedGetEmbeddedEmbedded();

            if (data.hasOwnProperty('usersAreNotified')) {
                obj['usersAreNotified'] = ApiClient.convertToType(data['usersAreNotified'], [UserIsNotified]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UserIsNotified>} usersAreNotified
 */
UserIsNotifiedGetEmbeddedEmbedded.prototype['usersAreNotified'] = undefined;






export default UserIsNotifiedGetEmbeddedEmbedded;

