/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import GetResponse from './model/GetResponse';
import GetResponseLinks from './model/GetResponseLinks';
import HalLink from './model/HalLink';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject2 from './model/InlineObject2';
import PaginationPage from './model/PaginationPage';
import Subject from './model/Subject';
import SubjectGetEmbedded from './model/SubjectGetEmbedded';
import SubjectGetResponse from './model/SubjectGetResponse';
import SubjectWithLinks from './model/SubjectWithLinks';
import Token from './model/Token';
import University from './model/University';
import UniversityGetEmbedded from './model/UniversityGetEmbedded';
import UniversityGetResponse from './model/UniversityGetResponse';
import UniversityWithLinks from './model/UniversityWithLinks';
import VideoToUpload from './model/VideoToUpload';
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
* @version 1.0.6
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The GetResponse model constructor.
     * @property {module:model/GetResponse}
     */
    GetResponse,

    /**
     * The GetResponseLinks model constructor.
     * @property {module:model/GetResponseLinks}
     */
    GetResponseLinks,

    /**
     * The HalLink model constructor.
     * @property {module:model/HalLink}
     */
    HalLink,

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
     * The SubjectGetResponse model constructor.
     * @property {module:model/SubjectGetResponse}
     */
    SubjectGetResponse,

    /**
     * The SubjectWithLinks model constructor.
     * @property {module:model/SubjectWithLinks}
     */
    SubjectWithLinks,

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
     * The UniversityGetResponse model constructor.
     * @property {module:model/UniversityGetResponse}
     */
    UniversityGetResponse,

    /**
     * The UniversityWithLinks model constructor.
     * @property {module:model/UniversityWithLinks}
     */
    UniversityWithLinks,

    /**
     * The VideoToUpload model constructor.
     * @property {module:model/VideoToUpload}
     */
    VideoToUpload,

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
