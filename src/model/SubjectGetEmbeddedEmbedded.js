/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Subject from './Subject';

/**
 * The SubjectGetEmbeddedEmbedded model module.
 * @module model/SubjectGetEmbeddedEmbedded
 * @version 1.1.4
 */
class SubjectGetEmbeddedEmbedded {
    /**
     * Constructs a new <code>SubjectGetEmbeddedEmbedded</code>.
     * @alias module:model/SubjectGetEmbeddedEmbedded
     */
    constructor() { 
        
        SubjectGetEmbeddedEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/SubjectGetEmbeddedEmbedded} The populated <code>SubjectGetEmbeddedEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetEmbeddedEmbedded();

            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], [Subject]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Subject>} subjects
 */
SubjectGetEmbeddedEmbedded.prototype['subjects'] = undefined;






export default SubjectGetEmbeddedEmbedded;

