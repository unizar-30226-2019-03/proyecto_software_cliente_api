/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommentGetEmbeddedEmbedded from './CommentGetEmbeddedEmbedded';

/**
 * The CommentGetEmbedded model module.
 * @module model/CommentGetEmbedded
 * @version 1.3.2
 */
class CommentGetEmbedded {
    /**
     * Constructs a new <code>CommentGetEmbedded</code>.
     * @alias module:model/CommentGetEmbedded
     */
    constructor() { 
        
        CommentGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentGetEmbedded} obj Optional instance to populate.
     * @return {module:model/CommentGetEmbedded} The populated <code>CommentGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = CommentGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CommentGetEmbeddedEmbedded} _embedded
 */
CommentGetEmbedded.prototype['_embedded'] = undefined;






export default CommentGetEmbedded;

