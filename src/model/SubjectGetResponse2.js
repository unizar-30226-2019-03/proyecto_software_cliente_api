/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.3
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
import SubjectGetEmbedded2 from './SubjectGetEmbedded2';
import SubjectGetEmbedded2Embedded from './SubjectGetEmbedded2Embedded';

/**
 * The SubjectGetResponse2 model module.
 * @module model/SubjectGetResponse2
 * @version 1.3.3
 */
class SubjectGetResponse2 {
    /**
     * Constructs a new <code>SubjectGetResponse2</code>.
     * @alias module:model/SubjectGetResponse2
     * @implements module:model/GetResponse2
     * @implements module:model/SubjectGetEmbedded2
     */
    constructor() { 
        GetResponse2.initialize(this);SubjectGetEmbedded2.initialize(this);
        SubjectGetResponse2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetResponse2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetResponse2} obj Optional instance to populate.
     * @return {module:model/SubjectGetResponse2} The populated <code>SubjectGetResponse2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetResponse2();
            GetResponse2.constructFromObject(data, obj);
            SubjectGetEmbedded2.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage2.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = SubjectGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage2} page
 */
SubjectGetResponse2.prototype['page'] = undefined;

/**
 * @member {module:model/SubjectGetEmbedded2Embedded} _embedded
 */
SubjectGetResponse2.prototype['_embedded'] = undefined;


// Implement GetResponse2 interface:
/**
 * @member {module:model/PaginationPage2} page
 */
GetResponse2.prototype['page'] = undefined;
// Implement SubjectGetEmbedded2 interface:
/**
 * @member {module:model/SubjectGetEmbedded2Embedded} _embedded
 */
SubjectGetEmbedded2.prototype['_embedded'] = undefined;




export default SubjectGetResponse2;

