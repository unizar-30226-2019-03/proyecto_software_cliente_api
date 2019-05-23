/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommentGetEmbedded from './CommentGetEmbedded';
import CommentGetEmbeddedEmbedded from './CommentGetEmbeddedEmbedded';
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';

/**
 * The CommentGetResponse model module.
 * @module model/CommentGetResponse
 * @version 1.3.8
 */
class CommentGetResponse {
    /**
     * Constructs a new <code>CommentGetResponse</code>.
     * @alias module:model/CommentGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/CommentGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);CommentGetEmbedded.initialize(this);
        CommentGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentGetResponse} obj Optional instance to populate.
     * @return {module:model/CommentGetResponse} The populated <code>CommentGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentGetResponse();
            GetResponse.constructFromObject(data, obj);
            CommentGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = CommentGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
CommentGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/CommentGetEmbeddedEmbedded} _embedded
 */
CommentGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement CommentGetEmbedded interface:
/**
 * @member {module:model/CommentGetEmbeddedEmbedded} _embedded
 */
CommentGetEmbedded.prototype['_embedded'] = undefined;




export default CommentGetResponse;

