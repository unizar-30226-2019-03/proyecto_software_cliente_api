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
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import VideoGetEmbedded from './VideoGetEmbedded';
import VideoGetEmbeddedEmbedded from './VideoGetEmbeddedEmbedded';

/**
 * The VideoGetResponse model module.
 * @module model/VideoGetResponse
 * @version 1.3.5
 */
class VideoGetResponse {
    /**
     * Constructs a new <code>VideoGetResponse</code>.
     * @alias module:model/VideoGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/VideoGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);VideoGetEmbedded.initialize(this);
        VideoGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VideoGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoGetResponse} obj Optional instance to populate.
     * @return {module:model/VideoGetResponse} The populated <code>VideoGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VideoGetResponse();
            GetResponse.constructFromObject(data, obj);
            VideoGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = VideoGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
VideoGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/VideoGetEmbeddedEmbedded} _embedded
 */
VideoGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement VideoGetEmbedded interface:
/**
 * @member {module:model/VideoGetEmbeddedEmbedded} _embedded
 */
VideoGetEmbedded.prototype['_embedded'] = undefined;




export default VideoGetResponse;

