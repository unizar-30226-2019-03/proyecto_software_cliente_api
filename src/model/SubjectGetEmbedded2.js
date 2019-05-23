/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SubjectGetEmbedded2Embedded from './SubjectGetEmbedded2Embedded';

/**
 * The SubjectGetEmbedded2 model module.
 * @module model/SubjectGetEmbedded2
 * @version 1.3.8
 */
class SubjectGetEmbedded2 {
    /**
     * Constructs a new <code>SubjectGetEmbedded2</code>.
     * @alias module:model/SubjectGetEmbedded2
     */
    constructor() { 
        
        SubjectGetEmbedded2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectGetEmbedded2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectGetEmbedded2} obj Optional instance to populate.
     * @return {module:model/SubjectGetEmbedded2} The populated <code>SubjectGetEmbedded2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectGetEmbedded2();

            if (data.hasOwnProperty('_embedded')) {
                obj['_embedded'] = SubjectGetEmbedded2Embedded.constructFromObject(data['_embedded']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectGetEmbedded2Embedded} _embedded
 */
SubjectGetEmbedded2.prototype['_embedded'] = undefined;






export default SubjectGetEmbedded2;

