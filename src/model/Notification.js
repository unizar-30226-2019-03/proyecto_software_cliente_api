/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.3.0
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * @alias module:model/Notification
     */
    constructor() { 
        
        Notification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('notificationCategory')) {
                obj['notificationCategory'] = ApiClient.convertToType(data['notificationCategory'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Notification.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Notification.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Notification.prototype['timestamp'] = undefined;

/**
 * @member {module:model/Notification.NotificationCategoryEnum} notificationCategory
 */
Notification.prototype['notificationCategory'] = undefined;





/**
 * Allowed values for the <code>notificationCategory</code> property.
 * @enum {String}
 * @readonly
 */
Notification['NotificationCategoryEnum'] = {

    /**
     * value: "messages"
     * @const
     */
    "messages": "messages",

    /**
     * value: "videos"
     * @const
     */
    "videos": "videos"
};



export default Notification;

