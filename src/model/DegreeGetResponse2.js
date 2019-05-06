/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DegreeGetEmbedded2 from './DegreeGetEmbedded2';
import DegreeGetEmbedded2Embedded from './DegreeGetEmbedded2Embedded';
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';

/**
 * The DegreeGetResponse2 model module.
 * @module model/DegreeGetResponse2
 * @version 1.1.5
 */
class DegreeGetResponse2 {
    /**
     * Constructs a new <code>DegreeGetResponse2</code>.
     * @alias module:model/DegreeGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/DegreeGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);DegreeGetEmbedded2.initialize(this);
        DegreeGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DegreeGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeGetResponse2} obj Optional instance to populate.
     * @return {module:model/DegreeGetResponse2} The populated <code>DegreeGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DegreeGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            DegreeGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = DegreeGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
DegreeGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/DegreeGetEmbedded2Embedded} _embedded
 */
DegreeGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement DegreeGetEmbedded2 interface:
/**
 * @member {module:model/DegreeGetEmbedded2Embedded} _embedded
 */
DegreeGetEmbedded2.prototype['_embedded'] = undefined;




export default DegreeGetResponse2;

