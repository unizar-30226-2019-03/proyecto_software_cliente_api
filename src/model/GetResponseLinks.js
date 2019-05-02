/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HalLink from './HalLink';

/**
 * The GetResponseLinks model module.
 * @module model/GetResponseLinks
 * @version 1.0.5
 */
class GetResponseLinks {
    /**
     * Constructs a new <code>GetResponseLinks</code>.
     * @alias module:model/GetResponseLinks
     */
    constructor() { 
        
        GetResponseLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetResponseLinks} obj Optional instance to populate.
     * @return {module:model/GetResponseLinks} The populated <code>GetResponseLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetResponseLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = HalLink.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = HalLink.constructFromObject(data['profile']);
            }
            if (data.hasOwnProperty('search')) {
                obj['search'] = HalLink.constructFromObject(data['search']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/HalLink} self
 */
GetResponseLinks.prototype['self'] = undefined;

/**
 * @member {module:model/HalLink} profile
 */
GetResponseLinks.prototype['profile'] = undefined;

/**
 * @member {module:model/HalLink} search
 */
GetResponseLinks.prototype['search'] = undefined;






export default GetResponseLinks;

