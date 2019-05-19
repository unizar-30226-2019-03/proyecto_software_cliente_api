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
import Degree from './Degree';

/**
 * The DegreeList model module.
 * @module model/DegreeList
 * @version 1.3.4
 */
class DegreeList {
    /**
     * Constructs a new <code>DegreeList</code>.
     * @alias module:model/DegreeList
     */
    constructor() { 
        
        DegreeList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegreeList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeList} obj Optional instance to populate.
     * @return {module:model/DegreeList} The populated <code>DegreeList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegreeList();

            if (data.hasOwnProperty('degrees')) {
                obj['degrees'] = ApiClient.convertToType(data['degrees'], [Degree]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Degree>} degrees
 */
DegreeList.prototype['degrees'] = undefined;






export default DegreeList;

