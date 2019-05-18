/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.3.2
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     * @param username {String} Nombre de usuario del nuevo usuario
     * @param password {String} Contraseña del nuevo usuario
     * @param name {String} Nombre del nuevo usuario
     * @param surnames {String} Apellidos del nuevo usuario
     * @param email {String} Email del nuevo usuario
     * @param description {String} Descripción para el nuevo usuario
     * @param universityId {Number} Universidad del usuario
     * @param degreeId {Number} Carrera del usuario
     * @param photo {File} Foto del usuario
     */
    constructor(username, password, name, surnames, email, description, universityId, degreeId, photo) { 
        
        InlineObject.initialize(this, username, password, name, surnames, email, description, universityId, degreeId, photo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password, name, surnames, email, description, universityId, degreeId, photo) { 
        obj['username'] = username;
        obj['password'] = password;
        obj['name'] = name;
        obj['surnames'] = surnames;
        obj['email'] = email;
        obj['description'] = description;
        obj['university_id'] = universityId;
        obj['degree_id'] = degreeId;
        obj['photo'] = photo;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surnames')) {
                obj['surnames'] = ApiClient.convertToType(data['surnames'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * Nombre de usuario del nuevo usuario
 * @member {String} username
 */
InlineObject.prototype['username'] = undefined;

/**
 * Contraseña del nuevo usuario
 * @member {String} password
 */
InlineObject.prototype['password'] = undefined;

/**
 * Nombre del nuevo usuario
 * @member {String} name
 */
InlineObject.prototype['name'] = undefined;

/**
 * Apellidos del nuevo usuario
 * @member {String} surnames
 */
InlineObject.prototype['surnames'] = undefined;

/**
 * Email del nuevo usuario
 * @member {String} email
 */
InlineObject.prototype['email'] = undefined;

/**
 * Descripción para el nuevo usuario
 * @member {String} description
 */
InlineObject.prototype['description'] = undefined;

/**
 * Universidad del usuario
 * @member {Number} university_id
 */
InlineObject.prototype['university_id'] = undefined;

/**
 * Carrera del usuario
 * @member {Number} degree_id
 */
InlineObject.prototype['degree_id'] = undefined;

/**
 * Foto del usuario
 * @member {File} photo
 */
InlineObject.prototype['photo'] = undefined;






export default InlineObject;

