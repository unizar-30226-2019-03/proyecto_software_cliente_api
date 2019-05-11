/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DisplayGetEmbedded2 from './DisplayGetEmbedded2';
import DisplayGetEmbedded2Embedded from './DisplayGetEmbedded2Embedded';
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';

/**
 * The DisplayGetResponse2 model module.
 * @module model/DisplayGetResponse2
 * @version 1.2.1
 */
class DisplayGetResponse2 {
    /**
     * Constructs a new <code>DisplayGetResponse2</code>.
     * @alias module:model/DisplayGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/DisplayGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);DisplayGetEmbedded2.initialize(this);
        DisplayGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisplayGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisplayGetResponse2} obj Optional instance to populate.
     * @return {module:model/DisplayGetResponse2} The populated <code>DisplayGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisplayGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            DisplayGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = DisplayGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
DisplayGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/DisplayGetEmbedded2Embedded} _embedded
 */
DisplayGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement DisplayGetEmbedded2 interface:
/**
 * @member {module:model/DisplayGetEmbedded2Embedded} _embedded
 */
DisplayGetEmbedded2.prototype['_embedded'] = undefined;




export default DisplayGetResponse2;
