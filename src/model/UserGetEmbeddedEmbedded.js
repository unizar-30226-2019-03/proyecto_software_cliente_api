/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The UserGetEmbeddedEmbedded model module.
 * @module model/UserGetEmbeddedEmbedded
 * @version 1.1.4
 */
class UserGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>UserGetEmbeddedEmbedded</code>.
     * @alias module:model/UserGetEmbeddedEmbedded
     */
    constructor() { 
        
        UserGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/UserGetEmbeddedEmbedded} The populated <code>UserGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetEmbeddedEmbedded();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/User>} users
 */
UserGetEmbeddedEmbedded.prototype['users'] = undefined;






export default UserGetEmbeddedEmbedded;

