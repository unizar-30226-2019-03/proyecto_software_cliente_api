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
import DisplayId from './DisplayId';
import Video2 from './Video2';

/**
 * The Display2 model module.
 * @module model/Display2
 * @version 1.3.12
 */
class Display2 {
    /**
     * Constructs a new <code>Display2</code>.
     * @alias module:model/Display2
     */
    constructor() { 
        
        Display2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Display2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Display2} obj Optional instance to populate.
     * @return {module:model/Display2} The populated <code>Display2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Display2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = DisplayId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = Video2.constructFromObject(data['video']);
            }
            if (data.hasOwnProperty('timestampLastTime')) {
                obj['timestampLastTime'] = ApiClient.convertToType(data['timestampLastTime'], 'Date');
            }
            if (data.hasOwnProperty('secsFromBeg')) {
                obj['secsFromBeg'] = ApiClient.convertToType(data['secsFromBeg'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DisplayId} id
 */
Display2.prototype['id'] = undefined;

/**
 * @member {module:model/Video2} video
 */
Display2.prototype['video'] = undefined;

/**
 * @member {Date} timestampLastTime
 */
Display2.prototype['timestampLastTime'] = undefined;

/**
 * @member {Number} secsFromBeg
 */
Display2.prototype['secsFromBeg'] = undefined;






export default Display2;

