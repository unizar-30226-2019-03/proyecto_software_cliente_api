/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject19 model module.
 * @module model/InlineObject19
 * @version 1.3.4
 */
class InlineObject19 {
    /**
     * Constructs a new <code>InlineObject19</code>.
     * @alias module:model/InlineObject19
     * @param reproListId {Number} 
     * @param videoId {Number} 
     */
    constructor(reproListId, videoId) { 
        
        InlineObject19.initialize(this, reproListId, videoId);
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
     * Constructs a <code>InlineObject19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject19} obj Optional instance to populate.
     * @return {module:model/InlineObject19} The populated <code>InlineObject19</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject19();

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
InlineObject19.prototype['repro_list_id'] = undefined;

/**
 * @member {Number} video_id
 */
InlineObject19.prototype['video_id'] = undefined;






export default InlineObject19;

