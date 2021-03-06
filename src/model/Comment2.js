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
 * The Comment2 model module.
 * @module model/Comment2
 * @version 1.3.12
 */
class Comment2 {
    /**
     * Constructs a new <code>Comment2</code>.
     * @alias module:model/Comment2
     * @param text {String} 
     * @param timestamp {Date} 
     * @param secondsFromBeginning {Number} 
     */
    constructor(text, timestamp, secondsFromBeginning) { 
        
        Comment2.initialize(this, text, timestamp, secondsFromBeginning);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, timestamp, secondsFromBeginning) { 
        obj['text'] = text;
        obj['timestamp'] = timestamp;
        obj['secondsFromBeginning'] = secondsFromBeginning;
    }

    /**
     * Constructs a <code>Comment2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment2} obj Optional instance to populate.
     * @return {module:model/Comment2} The populated <code>Comment2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('secondsFromBeginning')) {
                obj['secondsFromBeginning'] = ApiClient.convertToType(data['secondsFromBeginning'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User2.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Comment2.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Comment2.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Comment2.prototype['timestamp'] = undefined;

/**
 * @member {Number} secondsFromBeginning
 */
Comment2.prototype['secondsFromBeginning'] = undefined;

/**
 * @member {module:model/User2} user
 */
Comment2.prototype['user'] = undefined;






export default Comment2;

