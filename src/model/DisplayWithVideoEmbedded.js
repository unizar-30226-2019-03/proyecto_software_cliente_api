/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Display from './Display';
import DisplayId from './DisplayId';
import Video from './Video';

/**
 * The DisplayWithVideoEmbedded model module.
 * @module model/DisplayWithVideoEmbedded
 * @version 1.2.0
 */
class DisplayWithVideoEmbedded {
    /**
     * Constructs a new <code>DisplayWithVideoEmbedded</code>.
     * @alias module:model/DisplayWithVideoEmbedded
     * @extends module:model/Display
     * @implements module:model/Display
     */
    constructor() { 
        Display.initialize(this);
        DisplayWithVideoEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayWithVideoEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayWithVideoEmbedded} obj Optional instance to populate.
     * @return {module:model/DisplayWithVideoEmbedded} The populated <code>DisplayWithVideoEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayWithVideoEmbedded();
            Display.constructFromObject(data, obj);
            Display.constructFromObject(data, obj);

            if (data.hasOwnProperty('video')) {
                obj['video'] = Video.constructFromObject(data['video']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Video} video
 */
DisplayWithVideoEmbedded.prototype['video'] = undefined;


// Implement Display interface:
/**
 * @member {module:model/DisplayId} id
 */
Display.prototype['id'] = undefined;
/**
 * @member {Date} timestampLastTime
 */
Display.prototype['timestampLastTime'] = undefined;
/**
 * @member {Number} secsFromBeg
 */
Display.prototype['secsFromBeg'] = undefined;




export default DisplayWithVideoEmbedded;
