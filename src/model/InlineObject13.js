/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject13 model module.
 * @module model/InlineObject13
 * @version 1.3.10
 */
class InlineObject13 {
    /**
     * Constructs a new <code>InlineObject13</code>.
     * @alias module:model/InlineObject13
     * @param text {String} 
     * @param secsFromBeg {Number} 
     * @param videoId {Number} 
     */
    constructor(text, secsFromBeg, videoId) { 
        
        InlineObject13.initialize(this, text, secsFromBeg, videoId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, secsFromBeg, videoId) { 
        obj['text'] = text;
        obj['secs_from_beg'] = secsFromBeg;
        obj['video_id'] = videoId;
    }

    /**
     * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject13} obj Optional instance to populate.
     * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject13();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('secs_from_beg')) {
                obj['secs_from_beg'] = ApiClient.convertToType(data['secs_from_beg'], 'Number');
            }
            if (data.hasOwnProperty('video_id')) {
                obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Number');
            }
            if (data.hasOwnProperty('comment_replied_to_id')) {
                obj['comment_replied_to_id'] = ApiClient.convertToType(data['comment_replied_to_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
InlineObject13.prototype['text'] = undefined;

/**
 * @member {Number} secs_from_beg
 */
InlineObject13.prototype['secs_from_beg'] = undefined;

/**
 * @member {Number} video_id
 */
InlineObject13.prototype['video_id'] = undefined;

/**
 * @member {Number} comment_replied_to_id
 */
InlineObject13.prototype['comment_replied_to_id'] = undefined;






export default InlineObject13;

