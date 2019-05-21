/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DisplayId from './DisplayId';
import Video from './Video';

/**
 * The Display model module.
 * @module model/Display
 * @version 1.3.6
 */
class Display {
    /**
     * Constructs a new <code>Display</code>.
     * @alias module:model/Display
     */
    constructor() { 
        
        Display.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Display</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Display} obj Optional instance to populate.
     * @return {module:model/Display} The populated <code>Display</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Display();

            if (data.hasOwnProperty('id')) {
                obj['id'] = DisplayId.constructFromObject(data['id']);
            }
            if (data.hasOwnProperty('video')) {
                obj['video'] = Video.constructFromObject(data['video']);
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
Display.prototype['id'] = undefined;

/**
 * @member {module:model/Video} video
 */
Display.prototype['video'] = undefined;

/**
 * @member {Date} timestampLastTime
 */
Display.prototype['timestampLastTime'] = undefined;

/**
 * @member {Number} secsFromBeg
 */
Display.prototype['secsFromBeg'] = undefined;






export default Display;

