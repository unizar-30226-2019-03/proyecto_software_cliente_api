/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetResponse2 from './GetResponse2';
import PaginationPage2 from './PaginationPage2';
import UniversityGetEmbedded2 from './UniversityGetEmbedded2';
import UniversityGetEmbedded2Embedded from './UniversityGetEmbedded2Embedded';

/**
 * The UniversityGetResponse2 model module.
 * @module model/UniversityGetResponse2
 * @version 1.3.11
 */
class UniversityGetResponse2 {
    /**
     * Constructs a new <code>UniversityGetResponse2</code>.
     * @alias module:model/UniversityGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/UniversityGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);UniversityGetEmbedded2.initialize(this);
        UniversityGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversityGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversityGetResponse2} obj Optional instance to populate.
     * @return {module:model/UniversityGetResponse2} The populated <code>UniversityGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversityGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            UniversityGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = UniversityGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
UniversityGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/UniversityGetEmbedded2Embedded} _embedded
 */
UniversityGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement UniversityGetEmbedded2 interface:
/**
 * @member {module:model/UniversityGetEmbedded2Embedded} _embedded
 */
UniversityGetEmbedded2.prototype['_embedded'] = undefined;




export default UniversityGetResponse2;

