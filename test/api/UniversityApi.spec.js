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
    instance = new SwaggerUnicast.UniversityApi();
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

  describe('UniversityApi', function() {
    describe('addUniversity', function() {
      it('should call addUniversity successfully', function(done) {
        //uncomment below and update the code to test addUniversity
        //instance.addUniversity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUniversity', function() {
      it('should call deleteUniversity successfully', function(done) {
        //uncomment below and update the code to test deleteUniversity
        //instance.deleteUniversity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUniversitiesContaining', function() {
      it('should call findUniversitiesContaining successfully', function(done) {
        //uncomment below and update the code to test findUniversitiesContaining
        //instance.findUniversitiesContaining(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUniversitiesStartsWith', function() {
      it('should call findUniversitiesStartsWith successfully', function(done) {
        //uncomment below and update the code to test findUniversitiesStartsWith
        //instance.findUniversitiesStartsWith(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDegreesFromUniversity', function() {
      it('should call getDegreesFromUniversity successfully', function(done) {
        //uncomment below and update the code to test getDegreesFromUniversity
        //instance.getDegreesFromUniversity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubjectsFromUniversity', function() {
      it('should call getSubjectsFromUniversity successfully', function(done) {
        //uncomment below and update the code to test getSubjectsFromUniversity
        //instance.getSubjectsFromUniversity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUniversities', function() {
      it('should call getUniversities successfully', function(done) {
        //uncomment below and update the code to test getUniversities
        //instance.getUniversities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
