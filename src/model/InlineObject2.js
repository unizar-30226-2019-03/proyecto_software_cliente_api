/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.3.6
 */
class InlineObject2 {
    /**
     * Constructs a new <code>InlineObject2</code>.
     * @alias module:model/InlineObject2
     */
    constructor() { 
        
        InlineObject2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject2();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surnames')) {
                obj['surnames'] = ApiClient.convertToType(data['surnames'], 'String');
            }
            if (data.hasOwnProperty('university_id')) {
                obj['university_id'] = ApiClient.convertToType(data['university_id'], 'Number');
            }
            if (data.hasOwnProperty('degree_id')) {
                obj['degree_id'] = ApiClient.convertToType(data['degree_id'], 'Number');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], File);
            }
        }
        return obj;
    }


}

/**
 * Nuevo nombre del usuario
 * @member {String} username
 */
InlineObject2.prototype['username'] = undefined;

/**
 * Nueva contraseña del usuario
 * @member {String} password
 */
InlineObject2.prototype['password'] = undefined;

/**
 * Nuevo email del usuario
 * @member {String} email
 */
InlineObject2.prototype['email'] = undefined;

/**
 * Nueva descripción para el usuario
 * @member {String} description
 */
InlineObject2.prototype['description'] = undefined;

/**
 * Nuevo nombre para el usuario
 * @member {String} name
 */
InlineObject2.prototype['name'] = undefined;

/**
 * Nuevos apellidos para el usuario
 * @member {String} surnames
 */
InlineObject2.prototype['surnames'] = undefined;

/**
 * Nueva universidad del usuario
 * @member {Number} university_id
 */
InlineObject2.prototype['university_id'] = undefined;

/**
 * Nueva carrera del usuario
 * @member {Number} degree_id
 */
InlineObject2.prototype['degree_id'] = undefined;

/**
 * Nueva foto del usuario
 * @member {File} photo
 */
InlineObject2.prototype['photo'] = undefined;






export default InlineObject2;

