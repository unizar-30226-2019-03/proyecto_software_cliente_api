/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerUnicast);
  }
}(this, function(expect, SwaggerUnicast) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerUnicast.VideoGetEmbeddedEmbedded();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VideoGetEmbeddedEmbedded', function() {
    it('should create an instance of VideoGetEmbeddedEmbedded', function() {
      // uncomment below and update the code to test VideoGetEmbeddedEmbedded
      //var instane = new SwaggerUnicast.VideoGetEmbeddedEmbedded();
      //expect(instance).to.be.a(SwaggerUnicast.VideoGetEmbeddedEmbedded);
    });

    it('should have the property videos (base name: "videos")', function() {
      // uncomment below and update the code to test the property videos
      //var instane = new SwaggerUnicast.VideoGetEmbeddedEmbedded();
      //expect(instance).to.be();
    });

  });

}));
