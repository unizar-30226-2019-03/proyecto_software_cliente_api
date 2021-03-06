/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import User2 from './User2';

/**
 * The Message model module.
 * @module model/Message
 * @version 1.3.12
 */
class Message {
    /**
     * Constructs a new <code>Message</code>.
     * @alias module:model/Message
     */
    constructor() { 
        
        Message.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message} obj Optional instance to populate.
     * @return {module:model/Message} The populated <code>Message</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('receiver')) {
                obj['receiver'] = User2.constructFromObject(data['receiver']);
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = User2.constructFromObject(data['sender']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Message.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Message.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Message.prototype['timestamp'] = undefined;

/**
 * @member {module:model/User2} receiver
 */
Message.prototype['receiver'] = undefined;

/**
 * @member {module:model/User2} sender
 */
Message.prototype['sender'] = undefined;






export default Message;

