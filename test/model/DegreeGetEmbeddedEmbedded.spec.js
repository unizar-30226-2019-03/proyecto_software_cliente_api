/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.2.0
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
    instance = new SwaggerUnicast.DegreeGetEmbeddedEmbedded();
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

  describe('DegreeGetEmbeddedEmbedded', function() {
    it('should create an instance of DegreeGetEmbeddedEmbedded', function() {
      // uncomment below and update the code to test DegreeGetEmbeddedEmbedded
      //var instane = new SwaggerUnicast.DegreeGetEmbeddedEmbedded();
      //expect(instance).to.be.a(SwaggerUnicast.DegreeGetEmbeddedEmbedded);
    });

    it('should have the property degrees (base name: "degrees")', function() {
      // uncomment below and update the code to test the property degrees
      //var instane = new SwaggerUnicast.DegreeGetEmbeddedEmbedded();
      //expect(instance).to.be();
    });

  });

}));
