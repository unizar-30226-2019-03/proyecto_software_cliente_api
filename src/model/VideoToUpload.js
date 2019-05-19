/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The VideoToUpload model module.
 * @module model/VideoToUpload
 * @version 1.3.5
 */
class VideoToUpload {
    /**
     * Constructs a new <code>VideoToUpload</code>.
     * @alias module:model/VideoToUpload
     * @param file {File} 
     * @param thumbnail {File} 
     * @param title {String} 
     * @param description {String} 
     * @param subjectId {Number} 
     */
    constructor(file, thumbnail, title, description, subjectId) { 
        
        VideoToUpload.initialize(this, file, thumbnail, title, description, subjectId);
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
     * Constructs a <code>VideoToUpload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoToUpload} obj Optional instance to populate.
     * @return {module:model/VideoToUpload} The populated <code>VideoToUpload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoToUpload();

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
VideoToUpload.prototype['file'] = undefined;

/**
 * @member {File} thumbnail
 */
VideoToUpload.prototype['thumbnail'] = undefined;

/**
 * @member {String} title
 */
VideoToUpload.prototype['title'] = undefined;

/**
 * @member {String} description
 */
VideoToUpload.prototype['description'] = undefined;

/**
 * @member {Number} subject_id
 */
VideoToUpload.prototype['subject_id'] = undefined;






export default VideoToUpload;

