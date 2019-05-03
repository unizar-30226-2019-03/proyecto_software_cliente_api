/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Degree from './model/Degree';
import DegreeGetEmbedded from './model/DegreeGetEmbedded';
import DegreeGetEmbeddedEmbedded from './model/DegreeGetEmbeddedEmbedded';
import DegreeGetResponse from './model/DegreeGetResponse';
import DegreeList from './model/DegreeList';
import GetResponse from './model/GetResponse';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject2 from './model/InlineObject2';
import InlineObject3 from './model/InlineObject3';
import PaginationPage from './model/PaginationPage';
import Subject from './model/Subject';
import SubjectGetEmbedded from './model/SubjectGetEmbedded';
import SubjectGetEmbeddedEmbedded from './model/SubjectGetEmbeddedEmbedded';
import SubjectGetResponse from './model/SubjectGetResponse';
import Token from './model/Token';
import University from './model/University';
import UniversityGetEmbedded from './model/UniversityGetEmbedded';
import UniversityGetEmbeddedEmbedded from './model/UniversityGetEmbeddedEmbedded';
import UniversityGetResponse from './model/UniversityGetResponse';
import User from './model/User';
import Video from './model/Video';
import VideoToUpload from './model/VideoToUpload';
import DegreeApi from './api/DegreeApi';
import SubjectApi from './api/SubjectApi';
import UniversityApi from './api/UniversityApi';
import UserApi from './api/UserApi';
import VideoApi from './api/VideoApi';


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
* @version 1.0.9
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Degree model constructor.
     * @property {module:model/Degree}
     */
    Degree,

    /**
     * The DegreeGetEmbedded model constructor.
     * @property {module:model/DegreeGetEmbedded}
     */
    DegreeGetEmbedded,

    /**
     * The DegreeGetEmbeddedEmbedded model constructor.
     * @property {module:model/DegreeGetEmbeddedEmbedded}
     */
    DegreeGetEmbeddedEmbedded,

    /**
     * The DegreeGetResponse model constructor.
     * @property {module:model/DegreeGetResponse}
     */
    DegreeGetResponse,

    /**
     * The DegreeList model constructor.
     * @property {module:model/DegreeList}
     */
    DegreeList,

    /**
     * The GetResponse model constructor.
     * @property {module:model/GetResponse}
     */
    GetResponse,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The InlineObject2 model constructor.
     * @property {module:model/InlineObject2}
     */
    InlineObject2,

    /**
     * The InlineObject3 model constructor.
     * @property {module:model/InlineObject3}
     */
    InlineObject3,

    /**
     * The PaginationPage model constructor.
     * @property {module:model/PaginationPage}
     */
    PaginationPage,

    /**
     * The Subject model constructor.
     * @property {module:model/Subject}
     */
    Subject,

    /**
     * The SubjectGetEmbedded model constructor.
     * @property {module:model/SubjectGetEmbedded}
     */
    SubjectGetEmbedded,

    /**
     * The SubjectGetEmbeddedEmbedded model constructor.
     * @property {module:model/SubjectGetEmbeddedEmbedded}
     */
    SubjectGetEmbeddedEmbedded,

    /**
     * The SubjectGetResponse model constructor.
     * @property {module:model/SubjectGetResponse}
     */
    SubjectGetResponse,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The University model constructor.
     * @property {module:model/University}
     */
    University,

    /**
     * The UniversityGetEmbedded model constructor.
     * @property {module:model/UniversityGetEmbedded}
     */
    UniversityGetEmbedded,

    /**
     * The UniversityGetEmbeddedEmbedded model constructor.
     * @property {module:model/UniversityGetEmbeddedEmbedded}
     */
    UniversityGetEmbeddedEmbedded,

    /**
     * The UniversityGetResponse model constructor.
     * @property {module:model/UniversityGetResponse}
     */
    UniversityGetResponse,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video,

    /**
     * The VideoToUpload model constructor.
     * @property {module:model/VideoToUpload}
     */
    VideoToUpload,

    /**
    * The DegreeApi service constructor.
    * @property {module:api/DegreeApi}
    */
    DegreeApi,

    /**
    * The SubjectApi service constructor.
    * @property {module:api/SubjectApi}
    */
    SubjectApi,

    /**
    * The UniversityApi service constructor.
    * @property {module:api/UniversityApi}
    */
    UniversityApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VideoApi service constructor.
    * @property {module:api/VideoApi}
    */
    VideoApi
};
