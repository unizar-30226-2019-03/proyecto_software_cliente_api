/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserGetEmbeddedEmbedded from './UserGetEmbeddedEmbedded';

/**
 * The UserGetEmbedded model module.
 * @module model/UserGetEmbedded
 * @version 1.1.1
 */
class UserGetEmbedded {
    /**
     * Constructs a new <code>UserGetEmbedded</code>.
     * @alias module:model/UserGetEmbedded
     */
    constructor() { 
        
        UserGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGetEmbedded} obj Optional instance to populate.
     * @return {module:model/UserGetEmbedded} The populated <code>UserGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UserGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserGetEmbeddedEmbedded} _embedded
 */
UserGetEmbedded.prototype['_embedded'] = undefined;






export default UserGetEmbedded;

