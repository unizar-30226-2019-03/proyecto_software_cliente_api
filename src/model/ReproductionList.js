/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReproductionList model module.
 * @module model/ReproductionList
 * @version 1.3.12
 */
class ReproductionList {
    /**
     * Constructs a new <code>ReproductionList</code>.
     * @alias module:model/ReproductionList
     * @param name {String} 
     */
    constructor(name) { 
        
        ReproductionList.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ReproductionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReproductionList} obj Optional instance to populate.
     * @return {module:model/ReproductionList} The populated <code>ReproductionList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReproductionList();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('numVideos')) {
                obj['numVideos'] = ApiClient.convertToType(data['numVideos'], 'Number');
            }
            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ReproductionList.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ReproductionList.prototype['name'] = undefined;

/**
 * @member {Number} numVideos
 */
ReproductionList.prototype['numVideos'] = undefined;

/**
 * @member {String} thumbnail
 */
ReproductionList.prototype['thumbnail'] = undefined;






export default ReproductionList;

