/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VideoGetEmbedded2Embedded from './VideoGetEmbedded2Embedded';

/**
 * The VideoGetEmbedded2 model module.
 * @module model/VideoGetEmbedded2
 * @version 1.1.1
 */
class VideoGetEmbedded2 {
    /**
     * Constructs a new <code>VideoGetEmbedded2</code>.
     * @alias module:model/VideoGetEmbedded2
     */
    constructor() { 
        
        VideoGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/VideoGetEmbedded2} The populated <code>VideoGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = VideoGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/VideoGetEmbedded2Embedded} _embedded
 */
VideoGetEmbedded2.prototype['_embedded'] = undefined;






export default VideoGetEmbedded2;

