/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.0
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
    instance = new SwaggerUnicast.MessageGetEmbedded2();
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

  describe('MessageGetEmbedded2', function() {
    it('should create an instance of MessageGetEmbedded2', function() {
      // uncomment below and update the code to test MessageGetEmbedded2
      //var instane = new SwaggerUnicast.MessageGetEmbedded2();
      //expect(instance).to.be.a(SwaggerUnicast.MessageGetEmbedded2);
    });

    it('should have the property embedded (base name: "_embedded")', function() {
      // uncomment below and update the code to test the property embedded
      //var instane = new SwaggerUnicast.MessageGetEmbedded2();
      //expect(instance).to.be();
    });

  });

}));
