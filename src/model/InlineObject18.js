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

/**
 * The InlineObject18 model module.
 * @module model/InlineObject18
 * @version 1.3.10
 */
class InlineObject18 {
    /**
     * Constructs a new <code>InlineObject18</code>.
     * @alias module:model/InlineObject18
     * @param reproListId {Number} 
     * @param videoId {Number} 
     */
    constructor(reproListId, videoId) { 
        
        InlineObject18.initialize(this, reproListId, videoId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reproListId, videoId) { 
        obj['repro_list_id'] = reproListId;
        obj['video_id'] = videoId;
    }

    /**
     * Constructs a <code>InlineObject18</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject18} obj Optional instance to populate.
     * @return {module:model/InlineObject18} The populated <code>InlineObject18</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject18();

            if (data.hasOwnProperty('repro_list_id')) {
                obj['repro_list_id'] = ApiClient.convertToType(data['repro_list_id'], 'Number');
            }
            if (data.hasOwnProperty('video_id')) {
                obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} repro_list_id
 */
InlineObject18.prototype['repro_list_id'] = undefined;

/**
 * @member {Number} video_id
 */
InlineObject18.prototype['video_id'] = undefined;






export default InlineObject18;

