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
    instance = new SwaggerUnicast.UserIsNotified2();
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

  describe('UserIsNotified2', function() {
    it('should create an instance of UserIsNotified2', function() {
      // uncomment below and update the code to test UserIsNotified2
      //var instane = new SwaggerUnicast.UserIsNotified2();
      //expect(instance).to.be.a(SwaggerUnicast.UserIsNotified2);
    });

    it('should have the property checked (base name: "checked")', function() {
      // uncomment below and update the code to test the property checked
      //var instane = new SwaggerUnicast.UserIsNotified2();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instane = new SwaggerUnicast.UserIsNotified2();
      //expect(instance).to.be();
    });

  });

}));
