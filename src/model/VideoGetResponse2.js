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
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';
import VideoGetEmbedded2 from './VideoGetEmbedded2';
import VideoGetEmbedded2Embedded from './VideoGetEmbedded2Embedded';

/**
 * The VideoGetResponse2 model module.
 * @module model/VideoGetResponse2
 * @version 1.3.10
 */
class VideoGetResponse2 {
    /**
     * Constructs a new <code>VideoGetResponse2</code>.
     * @alias module:model/VideoGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/VideoGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);VideoGetEmbedded2.initialize(this);
        VideoGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetResponse2} obj Optional instance to populate.
     * @return {module:model/VideoGetResponse2} The populated <code>VideoGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            VideoGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = VideoGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
VideoGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/VideoGetEmbedded2Embedded} _embedded
 */
VideoGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement VideoGetEmbedded2 interface:
/**
 * @member {module:model/VideoGetEmbedded2Embedded} _embedded
 */
VideoGetEmbedded2.prototype['_embedded'] = undefined;




export default VideoGetResponse2;

