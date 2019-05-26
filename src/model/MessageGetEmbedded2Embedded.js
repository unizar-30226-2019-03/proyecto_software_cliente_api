/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Message2 from './Message2';

/**
 * The MessageGetEmbedded2Embedded model module.
 * @module model/MessageGetEmbedded2Embedded
 * @version 1.3.11
 */
class MessageGetEmbedded2Embedded {
    /**
     * Constructs a new <code>MessageGetEmbedded2Embedded</code>.
     * @alias module:model/MessageGetEmbedded2Embedded
     */
    constructor() { 
        
        MessageGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/MessageGetEmbedded2Embedded} The populated <code>MessageGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetEmbedded2Embedded();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Message2>} messages
 */
MessageGetEmbedded2Embedded.prototype['messages'] = undefined;






export default MessageGetEmbedded2Embedded;

