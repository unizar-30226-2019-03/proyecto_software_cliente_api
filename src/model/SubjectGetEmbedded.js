/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SubjectGetEmbeddedEmbedded from './SubjectGetEmbeddedEmbedded';

/**
 * The SubjectGetEmbedded model module.
 * @module model/SubjectGetEmbedded
 * @version 1.3.9
 */
class SubjectGetEmbedded {
    /**
     * Constructs a new <code>SubjectGetEmbedded</code>.
     * @alias module:model/SubjectGetEmbedded
     */
    constructor() { 
        
        SubjectGetEmbedded.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetEmbedded} obj Optional instance to populate.
     * @return {module:model/SubjectGetEmbedded} The populated <code>SubjectGetEmbedded</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetEmbedded();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = SubjectGetEmbeddedEmbedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectGetEmbeddedEmbedded} _embedded
 */
SubjectGetEmbedded.prototype['_embedded'] = undefined;






export default SubjectGetEmbedded;

