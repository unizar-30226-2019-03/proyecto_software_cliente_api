/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Subject2 from './Subject2';

/**
 * The SubjectGetEmbedded2Embedded model module.
 * @module model/SubjectGetEmbedded2Embedded
 * @version 1.3.7
 */
class SubjectGetEmbedded2Embedded {
    /**
     * Constructs a new <code>SubjectGetEmbedded2Embedded</code>.
     * @alias module:model/SubjectGetEmbedded2Embedded
     */
    constructor() { 
        
        SubjectGetEmbedded2Embedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetEmbedded2Embedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetEmbedded2Embedded} obj Optional instance to populate.
     * @return {module:model/SubjectGetEmbedded2Embedded} The populated <code>SubjectGetEmbedded2Embedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetEmbedded2Embedded();

            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], [Subject2]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Subject2>} subjects
 */
SubjectGetEmbedded2Embedded.prototype['subjects'] = undefined;






export default SubjectGetEmbedded2Embedded;

