/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.1.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PaginationPage2 model module.
 * @module model/PaginationPage2
 * @version 1.1.2
 */
class PaginationPage2 {
    /**
     * Constructs a new <code>PaginationPage2</code>.
     * @alias module:model/PaginationPage2
     * @param size {Number} 
     * @param totalElements {Number} 
     * @param totalPages {Number} 
     * @param _number {Number} 
     */
    constructor(size, totalElements, totalPages, _number) { 
        
        PaginationPage2.initialize(this, size, totalElements, totalPages, _number);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, size, totalElements, totalPages, _number) { 
        obj['size'] = size;
        obj['totalElements'] = totalElements;
        obj['totalPages'] = totalPages;
        obj['number'] = _number;
    }

    /**
     * Constructs a <code>PaginationPage2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationPage2} obj Optional instance to populate.
     * @return {module:model/PaginationPage2} The populated <code>PaginationPage2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationPage2();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} size
 */
PaginationPage2.prototype['size'] = undefined;

/**
 * @member {Number} totalElements
 */
PaginationPage2.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
PaginationPage2.prototype['totalPages'] = undefined;

/**
 * @member {Number} number
 */
PaginationPage2.prototype['number'] = undefined;






export default PaginationPage2;

