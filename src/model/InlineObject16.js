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

/**
 * The InlineObject16 model module.
 * @module model/InlineObject16
 * @version 1.3.12
 */
class InlineObject16 {
    /**
     * Constructs a new <code>InlineObject16</code>.
     * @alias module:model/InlineObject16
     * @param receiverId {Number} id del usuario al que enviar el mensaje
     * @param text {String} Cuerpo del mensaje a enviar
     */
    constructor(receiverId, text) { 
        
        InlineObject16.initialize(this, receiverId, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, receiverId, text) { 
        obj['receiver_id'] = receiverId;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>InlineObject16</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject16} obj Optional instance to populate.
     * @return {module:model/InlineObject16} The populated <code>InlineObject16</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject16();

            if (data.hasOwnProperty('receiver_id')) {
                obj['receiver_id'] = ApiClient.convertToType(data['receiver_id'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id del usuario al que enviar el mensaje
 * @member {Number} receiver_id
 */
InlineObject16.prototype['receiver_id'] = undefined;

/**
 * Cuerpo del mensaje a enviar
 * @member {String} text
 */
InlineObject16.prototype['text'] = undefined;






export default InlineObject16;

