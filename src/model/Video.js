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
import Subject2 from './Subject2';
import University2 from './University2';

/**
 * The Video model module.
 * @module model/Video
 * @version 1.3.12
 */
class Video {
    /**
     * Constructs a new <code>Video</code>.
     * @alias module:model/Video
     */
    constructor() { 
        
        Video.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Video</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Video} obj Optional instance to populate.
     * @return {module:model/Video} The populated <code>Video</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Video();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('thumbnailUrl')) {
                obj['thumbnailUrl'] = ApiClient.convertToType(data['thumbnailUrl'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
            if (data.hasOwnProperty('university')) {
                obj['university'] = University2.constructFromObject(data['university']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Subject2.constructFromObject(data['subject']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Video.prototype['id'] = undefined;

/**
 * @member {String} title
 */
Video.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Video.prototype['description'] = undefined;

/**
 * @member {Date} timestamp
 */
Video.prototype['timestamp'] = undefined;

/**
 * @member {String} url
 */
Video.prototype['url'] = undefined;

/**
 * @member {String} thumbnailUrl
 */
Video.prototype['thumbnailUrl'] = undefined;

/**
 * @member {Number} score
 */
Video.prototype['score'] = undefined;

/**
 * @member {Number} seconds
 */
Video.prototype['seconds'] = undefined;

/**
 * @member {module:model/University2} university
 */
Video.prototype['university'] = undefined;

/**
 * @member {module:model/Subject2} subject
 */
Video.prototype['subject'] = undefined;






export default Video;

