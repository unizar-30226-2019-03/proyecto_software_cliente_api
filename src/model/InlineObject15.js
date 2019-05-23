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

/**
 * The InlineObject15 model module.
 * @module model/InlineObject15
 * @version 1.3.7
 */
class InlineObject15 {
    /**
     * Constructs a new <code>InlineObject15</code>.
     * @alias module:model/InlineObject15
     * @param videoId {Number} Id del video sobre el que votar
     * @param suitability {Number} adecuacion
     * @param clarity {Number} claridad
     * @param quality {Number} calidad
     */
    constructor(videoId, suitability, clarity, quality) { 
        
        InlineObject15.initialize(this, videoId, suitability, clarity, quality);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, videoId, suitability, clarity, quality) { 
        obj['video_id'] = videoId;
        obj['suitability'] = suitability;
        obj['clarity'] = clarity;
        obj['quality'] = quality;
    }

    /**
     * Constructs a <code>InlineObject15</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject15} obj Optional instance to populate.
     * @return {module:model/InlineObject15} The populated <code>InlineObject15</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject15();

            if (data.hasOwnProperty('video_id')) {
                obj['video_id'] = ApiClient.convertToType(data['video_id'], 'Number');
            }
            if (data.hasOwnProperty('suitability')) {
                obj['suitability'] = ApiClient.convertToType(data['suitability'], 'Number');
            }
            if (data.hasOwnProperty('clarity')) {
                obj['clarity'] = ApiClient.convertToType(data['clarity'], 'Number');
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id del video sobre el que votar
 * @member {Number} video_id
 */
InlineObject15.prototype['video_id'] = undefined;

/**
 * adecuacion
 * @member {Number} suitability
 */
InlineObject15.prototype['suitability'] = undefined;

/**
 * claridad
 * @member {Number} clarity
 */
InlineObject15.prototype['clarity'] = undefined;

/**
 * calidad
 * @member {Number} quality
 */
InlineObject15.prototype['quality'] = undefined;






export default InlineObject15;

