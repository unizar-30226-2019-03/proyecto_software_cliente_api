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
import MessageGetEmbeddedEmbedded from './MessageGetEmbeddedEmbedded';

/**
 * The MessageGetEmbedded model module.
 * @module model/MessageGetEmbedded
 * @version 1.3.10
 */
class MessageGetEmbedded {
    /**
     * Constructs a new <code>MessageGetEmbedded</code>.
     * @alias module:model/MessageGetEmbedded
     */
    constructor() { 
        
        MessageGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetEmbedded} obj Optional instance to populate.
     * @return {module:model/MessageGetEmbedded} The populated <code>MessageGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = MessageGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MessageGetEmbeddedEmbedded} _embedded
 */
MessageGetEmbedded.prototype['_embedded'] = undefined;






export default MessageGetEmbedded;

