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
import UserIsNotifiedGetEmbeddedEmbedded from './UserIsNotifiedGetEmbeddedEmbedded';

/**
 * The UserIsNotifiedGetEmbedded model module.
 * @module model/UserIsNotifiedGetEmbedded
 * @version 1.2.1
 */
class UserIsNotifiedGetEmbedded {
    /**
     * Constructs a new <code>UserIsNotifiedGetEmbedded</code>.
     * @alias module:model/UserIsNotifiedGetEmbedded
     */
    constructor() { 
        
        UserIsNotifiedGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotifiedGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotifiedGetEmbedded} obj Optional instance to populate.
     * @return {module:model/UserIsNotifiedGetEmbedded} The populated <code>UserIsNotifiedGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotifiedGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserIsNotifiedGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserIsNotifiedGetEmbeddedEmbedded} _embedded
 */
UserIsNotifiedGetEmbedded.prototype['_embedded'] = undefined;






export default UserIsNotifiedGetEmbedded;

