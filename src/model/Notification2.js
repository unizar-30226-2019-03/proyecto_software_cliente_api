/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Notification2 model module.
 * @module model/Notification2
 * @version 1.3.4
 */
class Notification2 {
    /**
     * Constructs a new <code>Notification2</code>.
     * @alias module:model/Notification2
     */
    constructor() { 
        
        Notification2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Notification2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification2} obj Optional instance to populate.
     * @return {module:model/Notification2} The populated <code>Notification2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification2();

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
Notification2.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Notification2.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Notification2.prototype['timestamp'] = undefined;

/**
 * @member {module:model/Notification2.NotificationCategoryEnum} notificationCategory
 */
Notification2.prototype['notificationCategory'] = undefined;





/**
 * Allowed values for the <code>notificationCategory</code> property.
 * @enum {String}
 * @readonly
 */
Notification2['NotificationCategoryEnum'] = {

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



export default Notification2;

