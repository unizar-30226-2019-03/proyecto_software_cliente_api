/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Video from './Video';

/**
 * The VideoGetEmbeddedEmbedded model module.
 * @module model/VideoGetEmbeddedEmbedded
 * @version 1.0.10
 */
class VideoGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>VideoGetEmbeddedEmbedded</code>.
     * @alias module:model/VideoGetEmbeddedEmbedded
     */
    constructor() { 
        
        VideoGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/VideoGetEmbeddedEmbedded} The populated <code>VideoGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetEmbeddedEmbedded();

            if (data.hasOwnProperty('videos')) {
                obj['videos'] = ApiClient.convertToType(data['videos'], [Video]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Video>} videos
 */
VideoGetEmbeddedEmbedded.prototype['videos'] = undefined;






export default VideoGetEmbeddedEmbedded;

