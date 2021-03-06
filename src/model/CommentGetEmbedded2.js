/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommentGetEmbedded2Embedded from './CommentGetEmbedded2Embedded';

/**
 * The CommentGetEmbedded2 model module.
 * @module model/CommentGetEmbedded2
 * @version 1.3.12
 */
class CommentGetEmbedded2 {
    /**
     * Constructs a new <code>CommentGetEmbedded2</code>.
     * @alias module:model/CommentGetEmbedded2
     */
    constructor() { 
        
        CommentGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/CommentGetEmbedded2} The populated <code>CommentGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = CommentGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CommentGetEmbedded2Embedded} _embedded
 */
CommentGetEmbedded2.prototype['_embedded'] = undefined;






export default CommentGetEmbedded2;

