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
import Notification2 from './Notification2';

/**
 * The UserIsNotified2 model module.
 * @module model/UserIsNotified2
 * @version 1.2.1
 */
class UserIsNotified2 {
    /**
     * Constructs a new <code>UserIsNotified2</code>.
     * @alias module:model/UserIsNotified2
     */
    constructor() { 
        
        UserIsNotified2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIsNotified2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIsNotified2} obj Optional instance to populate.
     * @return {module:model/UserIsNotified2} The populated <code>UserIsNotified2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIsNotified2();

            if (data.hasOwnProperty('checked')) {
                obj['checked'] = ApiClient.convertToType(data['checked'], 'Boolean');
            }
            if (data.hasOwnProperty('notification')) {
                obj['notification'] = Notification2.constructFromObject(data['notification']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} checked
 */
UserIsNotified2.prototype['checked'] = undefined;

/**
 * @member {module:model/Notification2} notification
 */
UserIsNotified2.prototype['notification'] = undefined;






export default UserIsNotified2;
