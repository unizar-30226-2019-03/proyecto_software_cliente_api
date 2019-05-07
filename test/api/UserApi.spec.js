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
    instance = new SwaggerUnicast.UserApi();
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

  describe('UserApi', function() {
    describe('addUser', function() {
      it('should call addUser successfully', function(done) {
        //uncomment below and update the code to test addUser
        //instance.addUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authUser', function() {
      it('should call authUser successfully', function(done) {
        //uncomment below and update the code to test authUser
        //instance.authUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersContainingName', function() {
      it('should call findUsersContainingName successfully', function(done) {
        //uncomment below and update the code to test findUsersContainingName
        //instance.findUsersContainingName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersContainingSurname', function() {
      it('should call findUsersContainingSurname successfully', function(done) {
        //uncomment below and update the code to test findUsersContainingSurname
        //instance.findUsersContainingSurname(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersContainingUsername', function() {
      it('should call findUsersContainingUsername successfully', function(done) {
        //uncomment below and update the code to test findUsersContainingUsername
        //instance.findUsersContainingUsername(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersStartsWithName', function() {
      it('should call findUsersStartsWithName successfully', function(done) {
        //uncomment below and update the code to test findUsersStartsWithName
        //instance.findUsersStartsWithName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersStartsWithSurnames', function() {
      it('should call findUsersStartsWithSurnames successfully', function(done) {
        //uncomment below and update the code to test findUsersStartsWithSurnames
        //instance.findUsersStartsWithSurnames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findUsersStartsWithUsername', function() {
      it('should call findUsersStartsWithUsername successfully', function(done) {
        //uncomment below and update the code to test findUsersStartsWithUsername
        //instance.findUsersStartsWithUsername(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDegreeOfUser', function() {
      it('should call getDegreeOfUser successfully', function(done) {
        //uncomment below and update the code to test getDegreeOfUser
        //instance.getDegreeOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubjectsOfUser', function() {
      it('should call getSubjectsOfUser successfully', function(done) {
        //uncomment below and update the code to test getSubjectsOfUser
        //instance.getSubjectsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUniversityOfUser', function() {
      it('should call getUniversityOfUser successfully', function(done) {
        //uncomment below and update the code to test getUniversityOfUser
        //instance.getUniversityOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
