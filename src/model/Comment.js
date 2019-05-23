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
import User from './User';

/**
 * The Comment model module.
 * @module model/Comment
 * @version 1.3.7
 */
class Comment {
    /**
     * Constructs a new <code>Comment</code>.
     * @alias module:model/Comment
     * @param text {String} 
     * @param timestamp {Date} 
     * @param secondsFromBeginning {Number} 
     */
    constructor(text, timestamp, secondsFromBeginning) { 
        
        Comment.initialize(this, text, timestamp, secondsFromBeginning);
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
     * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment} obj Optional instance to populate.
     * @return {module:model/Comment} The populated <code>Comment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment();

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
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Comment.prototype['id'] = undefined;

/**
 * @member {String} text
 */
Comment.prototype['text'] = undefined;

/**
 * @member {Date} timestamp
 */
Comment.prototype['timestamp'] = undefined;

/**
 * @member {Number} secondsFromBeginning
 */
Comment.prototype['secondsFromBeginning'] = undefined;

/**
 * @member {module:model/User} user
 */
Comment.prototype['user'] = undefined;






export default Comment;

