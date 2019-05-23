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
import Comment from './Comment';

/**
 * The CommentGetEmbeddedEmbedded model module.
 * @module model/CommentGetEmbeddedEmbedded
 * @version 1.3.8
 */
class CommentGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>CommentGetEmbeddedEmbedded</code>.
     * @alias module:model/CommentGetEmbeddedEmbedded
     */
    constructor() { 
        
        CommentGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/CommentGetEmbeddedEmbedded} The populated <code>CommentGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentGetEmbeddedEmbedded();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], [Comment]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Comment>} comments
 */
CommentGetEmbeddedEmbedded.prototype['comments'] = undefined;






export default CommentGetEmbeddedEmbedded;

