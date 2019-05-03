'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoApi = exports.UserApi = exports.UniversityApi = exports.SubjectApi = exports.DegreeApi = exports.VideoToUpload = exports.Video = exports.User = exports.UniversityGetResponse = exports.UniversityGetEmbeddedEmbedded = exports.UniversityGetEmbedded = exports.University = exports.Token = exports.SubjectGetResponse = exports.SubjectGetEmbeddedEmbedded = exports.SubjectGetEmbedded = exports.Subject = exports.PaginationPage = exports.InlineObject3 = exports.InlineObject2 = exports.InlineObject1 = exports.InlineObject = exports.GetResponse = exports.DegreeList = exports.DegreeGetResponse = exports.DegreeGetEmbeddedEmbedded = exports.DegreeGetEmbedded = exports.Degree = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Degree = require('./model/Degree');

var _Degree2 = _interopRequireDefault(_Degree);

var _DegreeGetEmbedded = require('./model/DegreeGetEmbedded');

var _DegreeGetEmbedded2 = _interopRequireDefault(_DegreeGetEmbedded);

var _DegreeGetEmbeddedEmbedded = require('./model/DegreeGetEmbeddedEmbedded');

var _DegreeGetEmbeddedEmbedded2 = _interopRequireDefault(_DegreeGetEmbeddedEmbedded);

var _DegreeGetResponse = require('./model/DegreeGetResponse');

var _DegreeGetResponse2 = _interopRequireDefault(_DegreeGetResponse);

var _DegreeList = require('./model/DegreeList');

var _DegreeList2 = _interopRequireDefault(_DegreeList);

var _GetResponse = require('./model/GetResponse');

var _GetResponse2 = _interopRequireDefault(_GetResponse);

var _InlineObject = require('./model/InlineObject');

var _InlineObject2 = _interopRequireDefault(_InlineObject);

var _InlineObject3 = require('./model/InlineObject1');

var _InlineObject4 = _interopRequireDefault(_InlineObject3);

var _InlineObject5 = require('./model/InlineObject2');

var _InlineObject6 = _interopRequireDefault(_InlineObject5);

var _InlineObject7 = require('./model/InlineObject3');

var _InlineObject8 = _interopRequireDefault(_InlineObject7);

var _PaginationPage = require('./model/PaginationPage');

var _PaginationPage2 = _interopRequireDefault(_PaginationPage);

var _Subject = require('./model/Subject');

var _Subject2 = _interopRequireDefault(_Subject);

var _SubjectGetEmbedded = require('./model/SubjectGetEmbedded');

var _SubjectGetEmbedded2 = _interopRequireDefault(_SubjectGetEmbedded);

var _SubjectGetEmbeddedEmbedded = require('./model/SubjectGetEmbeddedEmbedded');

var _SubjectGetEmbeddedEmbedded2 = _interopRequireDefault(_SubjectGetEmbeddedEmbedded);

var _SubjectGetResponse = require('./model/SubjectGetResponse');

var _SubjectGetResponse2 = _interopRequireDefault(_SubjectGetResponse);

var _Token = require('./model/Token');

var _Token2 = _interopRequireDefault(_Token);

var _University = require('./model/University');

var _University2 = _interopRequireDefault(_University);

var _UniversityGetEmbedded = require('./model/UniversityGetEmbedded');

var _UniversityGetEmbedded2 = _interopRequireDefault(_UniversityGetEmbedded);

var _UniversityGetEmbeddedEmbedded = require('./model/UniversityGetEmbeddedEmbedded');

var _UniversityGetEmbeddedEmbedded2 = _interopRequireDefault(_UniversityGetEmbeddedEmbedded);

var _UniversityGetResponse = require('./model/UniversityGetResponse');

var _UniversityGetResponse2 = _interopRequireDefault(_UniversityGetResponse);

var _User = require('./model/User');

var _User2 = _interopRequireDefault(_User);

var _Video = require('./model/Video');

var _Video2 = _interopRequireDefault(_Video);

var _VideoToUpload = require('./model/VideoToUpload');

var _VideoToUpload2 = _interopRequireDefault(_VideoToUpload);

var _DegreeApi = require('./api/DegreeApi');

var _DegreeApi2 = _interopRequireDefault(_DegreeApi);

var _SubjectApi = require('./api/SubjectApi');

var _SubjectApi2 = _interopRequireDefault(_SubjectApi);

var _UniversityApi = require('./api/UniversityApi');

var _UniversityApi2 = _interopRequireDefault(_UniversityApi);

var _UserApi = require('./api/UserApi');

var _UserApi2 = _interopRequireDefault(_UserApi);

var _VideoApi = require('./api/VideoApi');

var _VideoApi2 = _interopRequireDefault(_VideoApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Documento_de_la_API_de_Unicast.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SwaggerUnicast = require('index'); // See note below*.
* var xxxSvc = new SwaggerUnicast.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SwaggerUnicast.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SwaggerUnicast.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SwaggerUnicast.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.8
*/
exports.ApiClient = _ApiClient2.default;
exports.Degree = _Degree2.default;
exports.DegreeGetEmbedded = _DegreeGetEmbedded2.default;
exports.DegreeGetEmbeddedEmbedded = _DegreeGetEmbeddedEmbedded2.default;
exports.DegreeGetResponse = _DegreeGetResponse2.default;
exports.DegreeList = _DegreeList2.default;
exports.GetResponse = _GetResponse2.default;
exports.InlineObject = _InlineObject2.default;
exports.InlineObject1 = _InlineObject4.default;
exports.InlineObject2 = _InlineObject6.default;
exports.InlineObject3 = _InlineObject8.default;
exports.PaginationPage = _PaginationPage2.default;
exports.Subject = _Subject2.default;
exports.SubjectGetEmbedded = _SubjectGetEmbedded2.default;
exports.SubjectGetEmbeddedEmbedded = _SubjectGetEmbeddedEmbedded2.default;
exports.SubjectGetResponse = _SubjectGetResponse2.default;
exports.Token = _Token2.default;
exports.University = _University2.default;
exports.UniversityGetEmbedded = _UniversityGetEmbedded2.default;
exports.UniversityGetEmbeddedEmbedded = _UniversityGetEmbeddedEmbedded2.default;
exports.UniversityGetResponse = _UniversityGetResponse2.default;
exports.User = _User2.default;
exports.Video = _Video2.default;
exports.VideoToUpload = _VideoToUpload2.default;
exports.DegreeApi = _DegreeApi2.default;
exports.SubjectApi = _SubjectApi2.default;
exports.UniversityApi = _UniversityApi2.default;
exports.UserApi = _UserApi2.default;
exports.VideoApi = _VideoApi2.default; /**
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