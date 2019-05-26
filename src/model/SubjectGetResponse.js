/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetResponse from './GetResponse';
import PaginationPage from './PaginationPage';
import SubjectGetEmbedded from './SubjectGetEmbedded';
import SubjectGetEmbeddedEmbedded from './SubjectGetEmbeddedEmbedded';

/**
 * The SubjectGetResponse model module.
 * @module model/SubjectGetResponse
 * @version 1.3.10
 */
class SubjectGetResponse {
    /**
     * Constructs a new <code>SubjectGetResponse</code>.
     * @alias module:model/SubjectGetResponse
     * @implements module:model/GetResponse
     * @implements module:model/SubjectGetEmbedded
     */
    constructor() { 
        GetResponse.initialize(this);SubjectGetEmbedded.initialize(this);
        SubjectGetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetResponse} obj Optional instance to populate.
     * @return {module:model/SubjectGetResponse} The populated <code>SubjectGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetResponse();
            GetResponse.constructFromObject(data, obj);
            SubjectGetEmbedded.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = PaginationPage.constructFromObject(data['page']);
            }
            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = SubjectGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationPage} page
 */
SubjectGetResponse.prototype['page'] = undefined;

/**
 * @member {module:model/SubjectGetEmbeddedEmbedded} _embedded
 */
SubjectGetResponse.prototype['_embedded'] = undefined;


// Implement GetResponse interface:
/**
 * @member {module:model/PaginationPage} page
 */
GetResponse.prototype['page'] = undefined;
// Implement SubjectGetEmbedded interface:
/**
 * @member {module:model/SubjectGetEmbeddedEmbedded} _embedded
 */
SubjectGetEmbedded.prototype['_embedded'] = undefined;




export default SubjectGetResponse;

