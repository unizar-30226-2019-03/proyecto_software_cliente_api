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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The VideoToUpload model module.
 * @module model/VideoToUpload
 * @version 1.0.8
 */
var VideoToUpload = function () {
  /**
   * Constructs a new <code>VideoToUpload</code>.
   * @alias module:model/VideoToUpload
   * @param file {File} 
   * @param thumbnail {File} 
   * @param title {String} 
   * @param description {String} 
   * @param subjectId {Number} 
   */
  function VideoToUpload(file, thumbnail, title, description, subjectId) {
    _classCallCheck(this, VideoToUpload);

    VideoToUpload.initialize(this, file, thumbnail, title, description, subjectId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VideoToUpload, null, [{
    key: 'initialize',
    value: function initialize(obj, file, thumbnail, title, description, subjectId) {
      obj['file'] = file;
      obj['thumbnail'] = thumbnail;
      obj['title'] = title;
      obj['description'] = description;
      obj['subject_id'] = subjectId;
    }

    /**
     * Constructs a <code>VideoToUpload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VideoToUpload} obj Optional instance to populate.
     * @return {module:model/VideoToUpload} The populated <code>VideoToUpload</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VideoToUpload();

        if (data.hasOwnProperty('file')) {
          obj['file'] = _ApiClient2.default.convertToType(data['file'], File);
        }
        if (data.hasOwnProperty('thumbnail')) {
          obj['thumbnail'] = _ApiClient2.default.convertToType(data['thumbnail'], File);
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('subject_id')) {
          obj['subject_id'] = _ApiClient2.default.convertToType(data['subject_id'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return VideoToUpload;
}();

/**
 * @member {File} file
 */


VideoToUpload.prototype['file'] = undefined;

/**
 * @member {File} thumbnail
 */
VideoToUpload.prototype['thumbnail'] = undefined;

/**
 * @member {String} title
 */
VideoToUpload.prototype['title'] = undefined;

/**
 * @member {String} description
 */
VideoToUpload.prototype['description'] = undefined;

/**
 * @member {Number} subject_id
 */
VideoToUpload.prototype['subject_id'] = undefined;

exports.default = VideoToUpload;