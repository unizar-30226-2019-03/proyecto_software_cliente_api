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
import UserGetEmbedded2Embedded from './UserGetEmbedded2Embedded';

/**
 * The UserGetEmbedded2 model module.
 * @module model/UserGetEmbedded2
 * @version 1.1.4
 */
class UserGetEmbedded2 {
    /**
     * Constructs a new <code>UserGetEmbedded2</code>.
     * @alias module:model/UserGetEmbedded2
     */
    constructor() { 
        
        UserGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/UserGetEmbedded2} The populated <code>UserGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserGetEmbedded2Embedded} _embedded
 */
UserGetEmbedded2.prototype['_embedded'] = undefined;






export default UserGetEmbedded2;

