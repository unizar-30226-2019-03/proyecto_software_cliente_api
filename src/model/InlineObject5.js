/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.1.3
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * @alias module:model/InlineObject5
     * @param secsFromBeg {Number} Segundos que se han visualizados del video
     * @param videoId {Number} Id del video que se esta visualizando
     */
    constructor(secsFromBeg, videoId) { 
        
        InlineObject5.initialize(this, secsFromBeg, videoId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secsFromBeg, videoId) { 
        obj['secs_from_beg'] = secsFromBeg;
        obj['video_id'] = videoId;
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

            if (data.hasOwnProperty('secs_from_beg')) {
                obj['secs_from_beg'] = ApiClient.convertToType(data['secs_from_beg'], 'Number');
            }
            if (data.hasOwnProperty('video_id')) {
                obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Segundos que se han visualizados del video
 * @member {Number} secs_from_beg
 */
InlineObject5.prototype['secs_from_beg'] = undefined;

/**
 * Id del video que se esta visualizando
 * @member {Number} video_id
 */
InlineObject5.prototype['video_id'] = undefined;






export default InlineObject5;

