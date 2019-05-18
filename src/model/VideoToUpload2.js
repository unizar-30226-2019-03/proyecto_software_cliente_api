/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VideoToUpload2 model module.
 * @module model/VideoToUpload2
 * @version 1.3.3
 */
class VideoToUpload2 {
    /**
     * Constructs a new <code>VideoToUpload2</code>.
     * @alias module:model/VideoToUpload2
     * @param file {File} 
     * @param thumbnail {File} 
     * @param title {String} 
     * @param description {String} 
     * @param subjectId {Number} 
     */
    constructor(file, thumbnail, title, description, subjectId) { 
        
        VideoToUpload2.initialize(this, file, thumbnail, title, description, subjectId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file, thumbnail, title, description, subjectId) { 
        obj['file'] = file;
        obj['thumbnail'] = thumbnail;
        obj['title'] = title;
        obj['description'] = description;
        obj['subject_id'] = subjectId;
    }

    /**
     * Constructs a <code>VideoToUpload2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoToUpload2} obj Optional instance to populate.
     * @return {module:model/VideoToUpload2} The populated <code>VideoToUpload2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoToUpload2();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], File);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subject_id')) {
                obj['subject_id'] = ApiClient.convertToType(data['subject_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {File} file
 */
VideoToUpload2.prototype['file'] = undefined;

/**
 * @member {File} thumbnail
 */
VideoToUpload2.prototype['thumbnail'] = undefined;

/**
 * @member {String} title
 */
VideoToUpload2.prototype['title'] = undefined;

/**
 * @member {String} description
 */
VideoToUpload2.prototype['description'] = undefined;

/**
 * @member {Number} subject_id
 */
VideoToUpload2.prototype['subject_id'] = undefined;






export default VideoToUpload2;

