/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Message from './Message';

/**
 * The MessageGetEmbeddedEmbedded model module.
 * @module model/MessageGetEmbeddedEmbedded
 * @version 1.3.7
 */
class MessageGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>MessageGetEmbeddedEmbedded</code>.
     * @alias module:model/MessageGetEmbeddedEmbedded
     */
    constructor() { 
        
        MessageGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/MessageGetEmbeddedEmbedded} The populated <code>MessageGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetEmbeddedEmbedded();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [Message]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Message>} messages
 */
MessageGetEmbeddedEmbedded.prototype['messages'] = undefined;






export default MessageGetEmbeddedEmbedded;

