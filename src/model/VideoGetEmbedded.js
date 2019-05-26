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
import VideoGetEmbeddedEmbedded from './VideoGetEmbeddedEmbedded';

/**
 * The VideoGetEmbedded model module.
 * @module model/VideoGetEmbedded
 * @version 1.3.10
 */
class VideoGetEmbedded {
    /**
     * Constructs a new <code>VideoGetEmbedded</code>.
     * @alias module:model/VideoGetEmbedded
     */
    constructor() { 
        
        VideoGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetEmbedded} obj Optional instance to populate.
     * @return {module:model/VideoGetEmbedded} The populated <code>VideoGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = VideoGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VideoGetEmbeddedEmbedded} _embedded
 */
VideoGetEmbedded.prototype['_embedded'] = undefined;






export default VideoGetEmbedded;

