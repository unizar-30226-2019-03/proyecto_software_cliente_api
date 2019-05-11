/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetResponse2 from './GetResponse2';
import MessageGetEmbedded2 from './MessageGetEmbedded2';
import MessageGetEmbedded2Embedded from './MessageGetEmbedded2Embedded';
import PaginationPage2 from './PaginationPage2';

/**
 * The MessageGetResponse2 model module.
 * @module model/MessageGetResponse2
 * @version 1.2.1
 */
class MessageGetResponse2 {
    /**
     * Constructs a new <code>MessageGetResponse2</code>.
     * @alias module:model/MessageGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/MessageGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);MessageGetEmbedded2.initialize(this);
        MessageGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetResponse2} obj Optional instance to populate.
     * @return {module:model/MessageGetResponse2} The populated <code>MessageGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            MessageGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = MessageGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
MessageGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/MessageGetEmbedded2Embedded} _embedded
 */
MessageGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement MessageGetEmbedded2 interface:
/**
 * @member {module:model/MessageGetEmbedded2Embedded} _embedded
 */
MessageGetEmbedded2.prototype['_embedded'] = undefined;




export default MessageGetResponse2;
