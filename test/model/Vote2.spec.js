/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.10
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
    instance = new SwaggerUnicast.Vote2();
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

  describe('Vote2', function() {
    it('should create an instance of Vote2', function() {
      // uncomment below and update the code to test Vote2
      //var instane = new SwaggerUnicast.Vote2();
      //expect(instance).to.be.a(SwaggerUnicast.Vote2);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerUnicast.Vote2();
      //expect(instance).to.be();
    });

    it('should have the property clarity (base name: "clarity")', function() {
      // uncomment below and update the code to test the property clarity
      //var instane = new SwaggerUnicast.Vote2();
      //expect(instance).to.be();
    });

    it('should have the property quality (base name: "quality")', function() {
      // uncomment below and update the code to test the property quality
      //var instane = new SwaggerUnicast.Vote2();
      //expect(instance).to.be();
    });

    it('should have the property suitability (base name: "suitability")', function() {
      // uncomment below and update the code to test the property suitability
      //var instane = new SwaggerUnicast.Vote2();
      //expect(instance).to.be();
    });

  });

}));
