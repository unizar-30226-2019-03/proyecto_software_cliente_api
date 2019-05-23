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

/**
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 1.3.8
 */
class InlineObject9 {
    /**
     * Constructs a new <code>InlineObject9</code>.
     * @alias module:model/InlineObject9
     * @param subjectId {Number} Id de la asignatura de la que se va a borar  el profesor
     * @param professorId {Number} Id del profesor que se va a eliminar
     */
    constructor(subjectId, professorId) { 
        
        InlineObject9.initialize(this, subjectId, professorId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, subjectId, professorId) { 
        obj['subject_id'] = subjectId;
        obj['professor_id'] = professorId;
    }

    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject9();

            if (data.hasOwnProperty('subject_id')) {
                obj['subject_id'] = ApiClient.convertToType(data['subject_id'], 'Number');
            }
            if (data.hasOwnProperty('professor_id')) {
                obj['professor_id'] = ApiClient.convertToType(data['professor_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Id de la asignatura de la que se va a borar  el profesor
 * @member {Number} subject_id
 */
InlineObject9.prototype['subject_id'] = undefined;

/**
 * Id del profesor que se va a eliminar
 * @member {Number} professor_id
 */
InlineObject9.prototype['professor_id'] = undefined;






export default InlineObject9;

