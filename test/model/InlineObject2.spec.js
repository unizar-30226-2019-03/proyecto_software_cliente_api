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
    instance = new SwaggerUnicast.InlineObject2();
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

  describe('InlineObject2', function() {
    it('should create an instance of InlineObject2', function() {
      // uncomment below and update the code to test InlineObject2
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be.a(SwaggerUnicast.InlineObject2);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property surnames (base name: "surnames")', function() {
      // uncomment below and update the code to test the property surnames
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property universityId (base name: "university_id")', function() {
      // uncomment below and update the code to test the property universityId
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property degreeId (base name: "degree_id")', function() {
      // uncomment below and update the code to test the property degreeId
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property photo (base name: "photo")', function() {
      // uncomment below and update the code to test the property photo
      //var instane = new SwaggerUnicast.InlineObject2();
      //expect(instance).to.be();
    });

  });

}));
