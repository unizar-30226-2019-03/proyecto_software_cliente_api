/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.7
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
 * The Message2 model module.
 * @module model/Message2
 * @version 1.3.7
 */
class Message2 {
    /**
     * Constructs a new <code>Message2</code>.
     * @alias module:model/Message2
     */
    constructor() { 
        
        Message2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Message2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Message2} obj Optional instance to populate.
     * @return {module:model/Message2} The populated <code>Message2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Message2();

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
Message2.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Message2.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Message2.prototype['timestamp'] = undefined;

/**
 * @member {module:model/User2} receiver
 */
Message2.prototype['receiver'] = undefined;

/**
 * @member {module:model/User2} sender
 */
Message2.prototype['sender'] = undefined;






export default Message2;

