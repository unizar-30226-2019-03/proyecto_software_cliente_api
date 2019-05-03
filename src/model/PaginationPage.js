/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PaginationPage model module.
 * @module model/PaginationPage
 * @version 1.0.8
 */
class PaginationPage {
    /**
     * Constructs a new <code>PaginationPage</code>.
     * @alias module:model/PaginationPage
     * @param size {Number} 
     * @param totalElements {Number} 
     * @param totalPages {Number} 
     * @param _number {Number} 
     */
    constructor(size, totalElements, totalPages, _number) { 
        
        PaginationPage.initialize(this, size, totalElements, totalPages, _number);
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
     * Constructs a <code>PaginationPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationPage} obj Optional instance to populate.
     * @return {module:model/PaginationPage} The populated <code>PaginationPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationPage();

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
PaginationPage.prototype['size'] = undefined;

/**
 * @member {Number} totalElements
 */
PaginationPage.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
PaginationPage.prototype['totalPages'] = undefined;

/**
 * @member {Number} number
 */
PaginationPage.prototype['number'] = undefined;






export default PaginationPage;

