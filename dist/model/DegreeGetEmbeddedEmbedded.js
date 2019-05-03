'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Degree = require('./Degree');

var _Degree2 = _interopRequireDefault(_Degree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The DegreeGetEmbeddedEmbedded model module.
 * @module model/DegreeGetEmbeddedEmbedded
 * @version 1.0.8
 */
var DegreeGetEmbeddedEmbedded = function () {
  /**
   * Constructs a new <code>DegreeGetEmbeddedEmbedded</code>.
   * @alias module:model/DegreeGetEmbeddedEmbedded
   */
  function DegreeGetEmbeddedEmbedded() {
    _classCallCheck(this, DegreeGetEmbeddedEmbedded);

    DegreeGetEmbeddedEmbedded.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DegreeGetEmbeddedEmbedded, null, [{
    key: 'initialize',
    value: function initialize(obj) {}

    /**
     * Constructs a <code>DegreeGetEmbeddedEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DegreeGetEmbeddedEmbedded} obj Optional instance to populate.
     * @return {module:model/DegreeGetEmbeddedEmbedded} The populated <code>DegreeGetEmbeddedEmbedded</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DegreeGetEmbeddedEmbedded();

        if (data.hasOwnProperty('degrees')) {
          obj['degrees'] = _ApiClient2.default.convertToType(data['degrees'], [_Degree2.default]);
        }
      }
      return obj;
    }
  }]);

  return DegreeGetEmbeddedEmbedded;
}();

/**
 * @member {Array.<module:model/Degree>} degrees
 */


DegreeGetEmbeddedEmbedded.prototype['degrees'] = undefined;

exports.default = DegreeGetEmbeddedEmbedded;