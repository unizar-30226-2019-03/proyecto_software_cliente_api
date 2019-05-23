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
import GetResponse from './GetResponse';
import MessageGetEmbedded from './MessageGetEmbedded';
import MessageGetEmbeddedEmbedded from './MessageGetEmbeddedEmbedded';
import PaginationPage from './PaginationPage';

/**
 * The MessageGetResponse model module.
 * @module model/MessageGetResponse
 * @version 1.3.8
 */
class MessageGetResponse {
    /**
     * Constructs a new <code>MessageGetResponse</code>.
     * @alias module:model/MessageGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/MessageGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);MessageGetEmbedded.initialize(this);
        MessageGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageGetResponse} obj Optional instance to populate.
     * @return {module:model/MessageGetResponse} The populated <code>MessageGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageGetResponse();
            GetResponse.constructFromObject(data, obj);
            MessageGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = MessageGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
MessageGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/MessageGetEmbeddedEmbedded} _embedded
 */
MessageGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement MessageGetEmbedded interface:
/**
 * @member {module:model/MessageGetEmbeddedEmbedded} _embedded
 */
MessageGetEmbedded.prototype['_embedded'] = undefined;




export default MessageGetResponse;

