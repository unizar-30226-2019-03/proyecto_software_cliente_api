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
import CommentGetEmbedded2 from './CommentGetEmbedded2';
import CommentGetEmbedded2Embedded from './CommentGetEmbedded2Embedded';
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';

/**
 * The CommentGetResponse2 model module.
 * @module model/CommentGetResponse2
 * @version 1.3.12
 */
class CommentGetResponse2 {
    /**
     * Constructs a new <code>CommentGetResponse2</code>.
     * @alias module:model/CommentGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/CommentGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);CommentGetEmbedded2.initialize(this);
        CommentGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentGetResponse2} obj Optional instance to populate.
     * @return {module:model/CommentGetResponse2} The populated <code>CommentGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            CommentGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = CommentGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
CommentGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/CommentGetEmbedded2Embedded} _embedded
 */
CommentGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement CommentGetEmbedded2 interface:
/**
 * @member {module:model/CommentGetEmbedded2Embedded} _embedded
 */
CommentGetEmbedded2.prototype['_embedded'] = undefined;




export default CommentGetResponse2;

