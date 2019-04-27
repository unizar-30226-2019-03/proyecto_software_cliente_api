/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.3
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
 * The SubjectWithLinks model module.
 * @module model/SubjectWithLinks
 * @version 1.0.3
 */
class SubjectWithLinks {
    /**
     * Constructs a new <code>SubjectWithLinks</code>.
     * @alias module:model/SubjectWithLinks
     * @implements module:model/Subject
     */
    constructor() { 
        Subject.initialize(this, name);
        SubjectWithLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>SubjectWithLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectWithLinks} obj Optional instance to populate.
     * @return {module:model/SubjectWithLinks} The populated <code>SubjectWithLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectWithLinks();
            Subject.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('_links')) {
                obj['_links'] = ApiClient.convertToType(data['_links'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SubjectWithLinks.prototype['name'] = undefined;

/**
 * @member {Object} _links
 */
SubjectWithLinks.prototype['_links'] = undefined;


// Implement Subject interface:
/**
 * @member {String} name
 */
Subject.prototype['name'] = undefined;




export default SubjectWithLinks;
