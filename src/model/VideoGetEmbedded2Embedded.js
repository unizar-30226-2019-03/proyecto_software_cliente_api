/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Video2 from './Video2';

/**
 * The VideoGetEmbedded2Embedded model module.
 * @module model/VideoGetEmbedded2Embedded
 * @version 1.1.5
 */
class VideoGetEmbedded2Embedded {
    /**
     * Constructs a new <code>VideoGetEmbedded2Embedded</code>.
     * @alias module:model/VideoGetEmbedded2Embedded
     */
    constructor() { 
        
        VideoGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/VideoGetEmbedded2Embedded} The populated <code>VideoGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetEmbedded2Embedded();

            if (data.hasOwnProperty('videos')) {
                obj['videos'] = ApiClient.convertToType(data['videos'], [Video2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Video2>} videos
 */
VideoGetEmbedded2Embedded.prototype['videos'] = undefined;






export default VideoGetEmbedded2Embedded;

