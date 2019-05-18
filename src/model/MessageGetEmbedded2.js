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
import MessageGetEmbedded2Embedded from './MessageGetEmbedded2Embedded';

/**
 * The MessageGetEmbedded2 model module.
 * @module model/MessageGetEmbedded2
 * @version 1.3.2
 */
class MessageGetEmbedded2 {
    /**
     * Constructs a new <code>MessageGetEmbedded2</code>.
     * @alias module:model/MessageGetEmbedded2
     */
    constructor() { 
        
        MessageGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/MessageGetEmbedded2} The populated <code>MessageGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = MessageGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MessageGetEmbedded2Embedded} _embedded
 */
MessageGetEmbedded2.prototype['_embedded'] = undefined;






export default MessageGetEmbedded2;

