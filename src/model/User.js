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
 * The User model module.
 * @module model/User
 * @version 1.3.2
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surnames')) {
                obj['surnames'] = ApiClient.convertToType(data['surnames'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} username
 */
User.prototype['username'] = undefined;

/**
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * @member {String} surnames
 */
User.prototype['surnames'] = undefined;

/**
 * @member {String} photo
 */
User.prototype['photo'] = undefined;

/**
 * @member {String} description
 */
User.prototype['description'] = undefined;

/**
 * @member {module:model/User.RoleEnum} role
 * @default 'ROLE_USER'
 */
User.prototype['role'] = 'ROLE_USER';





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
User['RoleEnum'] = {

    /**
     * value: "ROLE_USER"
     * @const
     */
    "USER": "ROLE_USER",

    /**
     * value: "ROLE_PROFESSOR"
     * @const
     */
    "PROFESSOR": "ROLE_PROFESSOR",

    /**
     * value: "ROLE_ADMIN"
     * @const
     */
    "ADMIN": "ROLE_ADMIN"
};



export default User;

