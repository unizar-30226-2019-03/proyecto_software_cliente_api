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
import UserIsNotifiedGetEmbedded2Embedded from './UserIsNotifiedGetEmbedded2Embedded';

/**
 * The UserIsNotifiedGetEmbedded2 model module.
 * @module model/UserIsNotifiedGetEmbedded2
 * @version 1.3.2
 */
class UserIsNotifiedGetEmbedded2 {
    /**
     * Constructs a new <code>UserIsNotifiedGetEmbedded2</code>.
     * @alias module:model/UserIsNotifiedGetEmbedded2
     */
    constructor() { 
        
        UserIsNotifiedGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotifiedGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotifiedGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/UserIsNotifiedGetEmbedded2} The populated <code>UserIsNotifiedGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotifiedGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserIsNotifiedGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserIsNotifiedGetEmbedded2Embedded} _embedded
 */
UserIsNotifiedGetEmbedded2.prototype['_embedded'] = undefined;






export default UserIsNotifiedGetEmbedded2;

