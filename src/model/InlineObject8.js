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

/**
 * The InlineObject8 model module.
 * @module model/InlineObject8
 * @version 1.3.11
 */
class InlineObject8 {
    /**
     * Constructs a new <code>InlineObject8</code>.
     * @alias module:model/InlineObject8
     * @param subjectId {Number} Id de la asignatura a la que se va a añadir el profesor
     * @param professorId {Number} Id del profesor que se va a añadir
     */
    constructor(subjectId, professorId) { 
        
        InlineObject8.initialize(this, subjectId, professorId);
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
     * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject8} obj Optional instance to populate.
     * @return {module:model/InlineObject8} The populated <code>InlineObject8</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject8();

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
 * Id de la asignatura a la que se va a añadir el profesor
 * @member {Number} subject_id
 */
InlineObject8.prototype['subject_id'] = undefined;

/**
 * Id del profesor que se va a añadir
 * @member {Number} professor_id
 */
InlineObject8.prototype['professor_id'] = undefined;






export default InlineObject8;

