/**
 * Swagger Unicast
 * Documento de la API de Unicast
 *
 * OpenAPI spec version: 1.3.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Comment from './model/Comment';
import Comment2 from './model/Comment2';
import CommentGetEmbedded from './model/CommentGetEmbedded';
import CommentGetEmbedded2 from './model/CommentGetEmbedded2';
import CommentGetEmbedded2Embedded from './model/CommentGetEmbedded2Embedded';
import CommentGetEmbeddedEmbedded from './model/CommentGetEmbeddedEmbedded';
import CommentGetResponse from './model/CommentGetResponse';
import CommentGetResponse2 from './model/CommentGetResponse2';
import Degree from './model/Degree';
import Degree2 from './model/Degree2';
import DegreeGetEmbedded from './model/DegreeGetEmbedded';
import DegreeGetEmbedded2 from './model/DegreeGetEmbedded2';
import DegreeGetEmbedded2Embedded from './model/DegreeGetEmbedded2Embedded';
import DegreeGetEmbeddedEmbedded from './model/DegreeGetEmbeddedEmbedded';
import DegreeGetResponse from './model/DegreeGetResponse';
import DegreeGetResponse2 from './model/DegreeGetResponse2';
import DegreeList from './model/DegreeList';
import Display from './model/Display';
import Display2 from './model/Display2';
import DisplayGetEmbedded from './model/DisplayGetEmbedded';
import DisplayGetEmbedded2 from './model/DisplayGetEmbedded2';
import DisplayGetEmbedded2Embedded from './model/DisplayGetEmbedded2Embedded';
import DisplayGetEmbeddedEmbedded from './model/DisplayGetEmbeddedEmbedded';
import DisplayGetResponse from './model/DisplayGetResponse';
import DisplayGetResponse2 from './model/DisplayGetResponse2';
import DisplayId from './model/DisplayId';
import GetResponse from './model/GetResponse';
import GetResponse2 from './model/GetResponse2';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import InlineObject10 from './model/InlineObject10';
import InlineObject11 from './model/InlineObject11';
import InlineObject12 from './model/InlineObject12';
import InlineObject13 from './model/InlineObject13';
import InlineObject14 from './model/InlineObject14';
import InlineObject15 from './model/InlineObject15';
import InlineObject16 from './model/InlineObject16';
import InlineObject17 from './model/InlineObject17';
import InlineObject18 from './model/InlineObject18';
import InlineObject19 from './model/InlineObject19';
import InlineObject2 from './model/InlineObject2';
import InlineObject3 from './model/InlineObject3';
import InlineObject4 from './model/InlineObject4';
import InlineObject5 from './model/InlineObject5';
import InlineObject6 from './model/InlineObject6';
import InlineObject7 from './model/InlineObject7';
import InlineObject8 from './model/InlineObject8';
import InlineObject9 from './model/InlineObject9';
import Message from './model/Message';
import Message2 from './model/Message2';
import MessageGetEmbedded from './model/MessageGetEmbedded';
import MessageGetEmbedded2 from './model/MessageGetEmbedded2';
import MessageGetEmbedded2Embedded from './model/MessageGetEmbedded2Embedded';
import MessageGetEmbeddedEmbedded from './model/MessageGetEmbeddedEmbedded';
import MessageGetResponse from './model/MessageGetResponse';
import MessageGetResponse2 from './model/MessageGetResponse2';
import Notification from './model/Notification';
import Notification2 from './model/Notification2';
import PaginationPage from './model/PaginationPage';
import PaginationPage2 from './model/PaginationPage2';
import ReproductionList from './model/ReproductionList';
import ReproductionList2 from './model/ReproductionList2';
import ReproductionListGetEmbedded from './model/ReproductionListGetEmbedded';
import ReproductionListGetEmbedded2 from './model/ReproductionListGetEmbedded2';
import ReproductionListGetEmbedded2Embedded from './model/ReproductionListGetEmbedded2Embedded';
import ReproductionListGetEmbeddedEmbedded from './model/ReproductionListGetEmbeddedEmbedded';
import ReproductionListGetResponse from './model/ReproductionListGetResponse';
import ReproductionListGetResponse2 from './model/ReproductionListGetResponse2';
import Subject from './model/Subject';
import Subject2 from './model/Subject2';
import SubjectGetEmbedded from './model/SubjectGetEmbedded';
import SubjectGetEmbedded2 from './model/SubjectGetEmbedded2';
import SubjectGetEmbedded2Embedded from './model/SubjectGetEmbedded2Embedded';
import SubjectGetEmbeddedEmbedded from './model/SubjectGetEmbeddedEmbedded';
import SubjectGetResponse from './model/SubjectGetResponse';
import SubjectGetResponse2 from './model/SubjectGetResponse2';
import Token from './model/Token';
import Token2 from './model/Token2';
import University from './model/University';
import University2 from './model/University2';
import UniversityGetEmbedded from './model/UniversityGetEmbedded';
import UniversityGetEmbedded2 from './model/UniversityGetEmbedded2';
import UniversityGetEmbedded2Embedded from './model/UniversityGetEmbedded2Embedded';
import UniversityGetEmbeddedEmbedded from './model/UniversityGetEmbeddedEmbedded';
import UniversityGetResponse from './model/UniversityGetResponse';
import UniversityGetResponse2 from './model/UniversityGetResponse2';
import User from './model/User';
import User2 from './model/User2';
import UserGetEmbedded from './model/UserGetEmbedded';
import UserGetEmbedded2 from './model/UserGetEmbedded2';
import UserGetEmbedded2Embedded from './model/UserGetEmbedded2Embedded';
import UserGetEmbeddedEmbedded from './model/UserGetEmbeddedEmbedded';
import UserGetResponse from './model/UserGetResponse';
import UserGetResponse2 from './model/UserGetResponse2';
import UserIsNotified from './model/UserIsNotified';
import UserIsNotified2 from './model/UserIsNotified2';
import UserIsNotifiedGetEmbedded from './model/UserIsNotifiedGetEmbedded';
import UserIsNotifiedGetEmbedded2 from './model/UserIsNotifiedGetEmbedded2';
import UserIsNotifiedGetEmbedded2Embedded from './model/UserIsNotifiedGetEmbedded2Embedded';
import UserIsNotifiedGetEmbeddedEmbedded from './model/UserIsNotifiedGetEmbeddedEmbedded';
import UserIsNotifiedGetResponse from './model/UserIsNotifiedGetResponse';
import UserIsNotifiedGetResponse2 from './model/UserIsNotifiedGetResponse2';
import Video from './model/Video';
import Video2 from './model/Video2';
import VideoGetEmbedded from './model/VideoGetEmbedded';
import VideoGetEmbedded2 from './model/VideoGetEmbedded2';
import VideoGetEmbedded2Embedded from './model/VideoGetEmbedded2Embedded';
import VideoGetEmbeddedEmbedded from './model/VideoGetEmbeddedEmbedded';
import VideoGetResponse from './model/VideoGetResponse';
import VideoGetResponse2 from './model/VideoGetResponse2';
import VideoToUpload from './model/VideoToUpload';
import VideoToUpload2 from './model/VideoToUpload2';
import Vote from './model/Vote';
import Vote2 from './model/Vote2';
import VoteGetEmbedded from './model/VoteGetEmbedded';
import VoteGetEmbeddedEmbedded from './model/VoteGetEmbeddedEmbedded';
import VoteGetResponse from './model/VoteGetResponse';
import VoteId from './model/VoteId';
import CommentApi from './api/CommentApi';
import DegreeApi from './api/DegreeApi';
import DisplayApi from './api/DisplayApi';
import MessageApi from './api/MessageApi';
import NotificationApi from './api/NotificationApi';
import ReproductionListApi from './api/ReproductionListApi';
import SubjectApi from './api/SubjectApi';
import UniversityApi from './api/UniversityApi';
import UserApi from './api/UserApi';
import VideoApi from './api/VideoApi';
import VoteApi from './api/VoteApi';


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
* @version 1.3.4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment,

    /**
     * The Comment2 model constructor.
     * @property {module:model/Comment2}
     */
    Comment2,

    /**
     * The CommentGetEmbedded model constructor.
     * @property {module:model/CommentGetEmbedded}
     */
    CommentGetEmbedded,

    /**
     * The CommentGetEmbedded2 model constructor.
     * @property {module:model/CommentGetEmbedded2}
     */
    CommentGetEmbedded2,

    /**
     * The CommentGetEmbedded2Embedded model constructor.
     * @property {module:model/CommentGetEmbedded2Embedded}
     */
    CommentGetEmbedded2Embedded,

    /**
     * The CommentGetEmbeddedEmbedded model constructor.
     * @property {module:model/CommentGetEmbeddedEmbedded}
     */
    CommentGetEmbeddedEmbedded,

    /**
     * The CommentGetResponse model constructor.
     * @property {module:model/CommentGetResponse}
     */
    CommentGetResponse,

    /**
     * The CommentGetResponse2 model constructor.
     * @property {module:model/CommentGetResponse2}
     */
    CommentGetResponse2,

    /**
     * The Degree model constructor.
     * @property {module:model/Degree}
     */
    Degree,

    /**
     * The Degree2 model constructor.
     * @property {module:model/Degree2}
     */
    Degree2,

    /**
     * The DegreeGetEmbedded model constructor.
     * @property {module:model/DegreeGetEmbedded}
     */
    DegreeGetEmbedded,

    /**
     * The DegreeGetEmbedded2 model constructor.
     * @property {module:model/DegreeGetEmbedded2}
     */
    DegreeGetEmbedded2,

    /**
     * The DegreeGetEmbedded2Embedded model constructor.
     * @property {module:model/DegreeGetEmbedded2Embedded}
     */
    DegreeGetEmbedded2Embedded,

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
     * The DegreeGetResponse2 model constructor.
     * @property {module:model/DegreeGetResponse2}
     */
    DegreeGetResponse2,

    /**
     * The DegreeList model constructor.
     * @property {module:model/DegreeList}
     */
    DegreeList,

    /**
     * The Display model constructor.
     * @property {module:model/Display}
     */
    Display,

    /**
     * The Display2 model constructor.
     * @property {module:model/Display2}
     */
    Display2,

    /**
     * The DisplayGetEmbedded model constructor.
     * @property {module:model/DisplayGetEmbedded}
     */
    DisplayGetEmbedded,

    /**
     * The DisplayGetEmbedded2 model constructor.
     * @property {module:model/DisplayGetEmbedded2}
     */
    DisplayGetEmbedded2,

    /**
     * The DisplayGetEmbedded2Embedded model constructor.
     * @property {module:model/DisplayGetEmbedded2Embedded}
     */
    DisplayGetEmbedded2Embedded,

    /**
     * The DisplayGetEmbeddedEmbedded model constructor.
     * @property {module:model/DisplayGetEmbeddedEmbedded}
     */
    DisplayGetEmbeddedEmbedded,

    /**
     * The DisplayGetResponse model constructor.
     * @property {module:model/DisplayGetResponse}
     */
    DisplayGetResponse,

    /**
     * The DisplayGetResponse2 model constructor.
     * @property {module:model/DisplayGetResponse2}
     */
    DisplayGetResponse2,

    /**
     * The DisplayId model constructor.
     * @property {module:model/DisplayId}
     */
    DisplayId,

    /**
     * The GetResponse model constructor.
     * @property {module:model/GetResponse}
     */
    GetResponse,

    /**
     * The GetResponse2 model constructor.
     * @property {module:model/GetResponse2}
     */
    GetResponse2,

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
     * The InlineObject10 model constructor.
     * @property {module:model/InlineObject10}
     */
    InlineObject10,

    /**
     * The InlineObject11 model constructor.
     * @property {module:model/InlineObject11}
     */
    InlineObject11,

    /**
     * The InlineObject12 model constructor.
     * @property {module:model/InlineObject12}
     */
    InlineObject12,

    /**
     * The InlineObject13 model constructor.
     * @property {module:model/InlineObject13}
     */
    InlineObject13,

    /**
     * The InlineObject14 model constructor.
     * @property {module:model/InlineObject14}
     */
    InlineObject14,

    /**
     * The InlineObject15 model constructor.
     * @property {module:model/InlineObject15}
     */
    InlineObject15,

    /**
     * The InlineObject16 model constructor.
     * @property {module:model/InlineObject16}
     */
    InlineObject16,

    /**
     * The InlineObject17 model constructor.
     * @property {module:model/InlineObject17}
     */
    InlineObject17,

    /**
     * The InlineObject18 model constructor.
     * @property {module:model/InlineObject18}
     */
    InlineObject18,

    /**
     * The InlineObject19 model constructor.
     * @property {module:model/InlineObject19}
     */
    InlineObject19,

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
     * The InlineObject4 model constructor.
     * @property {module:model/InlineObject4}
     */
    InlineObject4,

    /**
     * The InlineObject5 model constructor.
     * @property {module:model/InlineObject5}
     */
    InlineObject5,

    /**
     * The InlineObject6 model constructor.
     * @property {module:model/InlineObject6}
     */
    InlineObject6,

    /**
     * The InlineObject7 model constructor.
     * @property {module:model/InlineObject7}
     */
    InlineObject7,

    /**
     * The InlineObject8 model constructor.
     * @property {module:model/InlineObject8}
     */
    InlineObject8,

    /**
     * The InlineObject9 model constructor.
     * @property {module:model/InlineObject9}
     */
    InlineObject9,

    /**
     * The Message model constructor.
     * @property {module:model/Message}
     */
    Message,

    /**
     * The Message2 model constructor.
     * @property {module:model/Message2}
     */
    Message2,

    /**
     * The MessageGetEmbedded model constructor.
     * @property {module:model/MessageGetEmbedded}
     */
    MessageGetEmbedded,

    /**
     * The MessageGetEmbedded2 model constructor.
     * @property {module:model/MessageGetEmbedded2}
     */
    MessageGetEmbedded2,

    /**
     * The MessageGetEmbedded2Embedded model constructor.
     * @property {module:model/MessageGetEmbedded2Embedded}
     */
    MessageGetEmbedded2Embedded,

    /**
     * The MessageGetEmbeddedEmbedded model constructor.
     * @property {module:model/MessageGetEmbeddedEmbedded}
     */
    MessageGetEmbeddedEmbedded,

    /**
     * The MessageGetResponse model constructor.
     * @property {module:model/MessageGetResponse}
     */
    MessageGetResponse,

    /**
     * The MessageGetResponse2 model constructor.
     * @property {module:model/MessageGetResponse2}
     */
    MessageGetResponse2,

    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification,

    /**
     * The Notification2 model constructor.
     * @property {module:model/Notification2}
     */
    Notification2,

    /**
     * The PaginationPage model constructor.
     * @property {module:model/PaginationPage}
     */
    PaginationPage,

    /**
     * The PaginationPage2 model constructor.
     * @property {module:model/PaginationPage2}
     */
    PaginationPage2,

    /**
     * The ReproductionList model constructor.
     * @property {module:model/ReproductionList}
     */
    ReproductionList,

    /**
     * The ReproductionList2 model constructor.
     * @property {module:model/ReproductionList2}
     */
    ReproductionList2,

    /**
     * The ReproductionListGetEmbedded model constructor.
     * @property {module:model/ReproductionListGetEmbedded}
     */
    ReproductionListGetEmbedded,

    /**
     * The ReproductionListGetEmbedded2 model constructor.
     * @property {module:model/ReproductionListGetEmbedded2}
     */
    ReproductionListGetEmbedded2,

    /**
     * The ReproductionListGetEmbedded2Embedded model constructor.
     * @property {module:model/ReproductionListGetEmbedded2Embedded}
     */
    ReproductionListGetEmbedded2Embedded,

    /**
     * The ReproductionListGetEmbeddedEmbedded model constructor.
     * @property {module:model/ReproductionListGetEmbeddedEmbedded}
     */
    ReproductionListGetEmbeddedEmbedded,

    /**
     * The ReproductionListGetResponse model constructor.
     * @property {module:model/ReproductionListGetResponse}
     */
    ReproductionListGetResponse,

    /**
     * The ReproductionListGetResponse2 model constructor.
     * @property {module:model/ReproductionListGetResponse2}
     */
    ReproductionListGetResponse2,

    /**
     * The Subject model constructor.
     * @property {module:model/Subject}
     */
    Subject,

    /**
     * The Subject2 model constructor.
     * @property {module:model/Subject2}
     */
    Subject2,

    /**
     * The SubjectGetEmbedded model constructor.
     * @property {module:model/SubjectGetEmbedded}
     */
    SubjectGetEmbedded,

    /**
     * The SubjectGetEmbedded2 model constructor.
     * @property {module:model/SubjectGetEmbedded2}
     */
    SubjectGetEmbedded2,

    /**
     * The SubjectGetEmbedded2Embedded model constructor.
     * @property {module:model/SubjectGetEmbedded2Embedded}
     */
    SubjectGetEmbedded2Embedded,

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
     * The SubjectGetResponse2 model constructor.
     * @property {module:model/SubjectGetResponse2}
     */
    SubjectGetResponse2,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The Token2 model constructor.
     * @property {module:model/Token2}
     */
    Token2,

    /**
     * The University model constructor.
     * @property {module:model/University}
     */
    University,

    /**
     * The University2 model constructor.
     * @property {module:model/University2}
     */
    University2,

    /**
     * The UniversityGetEmbedded model constructor.
     * @property {module:model/UniversityGetEmbedded}
     */
    UniversityGetEmbedded,

    /**
     * The UniversityGetEmbedded2 model constructor.
     * @property {module:model/UniversityGetEmbedded2}
     */
    UniversityGetEmbedded2,

    /**
     * The UniversityGetEmbedded2Embedded model constructor.
     * @property {module:model/UniversityGetEmbedded2Embedded}
     */
    UniversityGetEmbedded2Embedded,

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
     * The UniversityGetResponse2 model constructor.
     * @property {module:model/UniversityGetResponse2}
     */
    UniversityGetResponse2,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The User2 model constructor.
     * @property {module:model/User2}
     */
    User2,

    /**
     * The UserGetEmbedded model constructor.
     * @property {module:model/UserGetEmbedded}
     */
    UserGetEmbedded,

    /**
     * The UserGetEmbedded2 model constructor.
     * @property {module:model/UserGetEmbedded2}
     */
    UserGetEmbedded2,

    /**
     * The UserGetEmbedded2Embedded model constructor.
     * @property {module:model/UserGetEmbedded2Embedded}
     */
    UserGetEmbedded2Embedded,

    /**
     * The UserGetEmbeddedEmbedded model constructor.
     * @property {module:model/UserGetEmbeddedEmbedded}
     */
    UserGetEmbeddedEmbedded,

    /**
     * The UserGetResponse model constructor.
     * @property {module:model/UserGetResponse}
     */
    UserGetResponse,

    /**
     * The UserGetResponse2 model constructor.
     * @property {module:model/UserGetResponse2}
     */
    UserGetResponse2,

    /**
     * The UserIsNotified model constructor.
     * @property {module:model/UserIsNotified}
     */
    UserIsNotified,

    /**
     * The UserIsNotified2 model constructor.
     * @property {module:model/UserIsNotified2}
     */
    UserIsNotified2,

    /**
     * The UserIsNotifiedGetEmbedded model constructor.
     * @property {module:model/UserIsNotifiedGetEmbedded}
     */
    UserIsNotifiedGetEmbedded,

    /**
     * The UserIsNotifiedGetEmbedded2 model constructor.
     * @property {module:model/UserIsNotifiedGetEmbedded2}
     */
    UserIsNotifiedGetEmbedded2,

    /**
     * The UserIsNotifiedGetEmbedded2Embedded model constructor.
     * @property {module:model/UserIsNotifiedGetEmbedded2Embedded}
     */
    UserIsNotifiedGetEmbedded2Embedded,

    /**
     * The UserIsNotifiedGetEmbeddedEmbedded model constructor.
     * @property {module:model/UserIsNotifiedGetEmbeddedEmbedded}
     */
    UserIsNotifiedGetEmbeddedEmbedded,

    /**
     * The UserIsNotifiedGetResponse model constructor.
     * @property {module:model/UserIsNotifiedGetResponse}
     */
    UserIsNotifiedGetResponse,

    /**
     * The UserIsNotifiedGetResponse2 model constructor.
     * @property {module:model/UserIsNotifiedGetResponse2}
     */
    UserIsNotifiedGetResponse2,

    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video,

    /**
     * The Video2 model constructor.
     * @property {module:model/Video2}
     */
    Video2,

    /**
     * The VideoGetEmbedded model constructor.
     * @property {module:model/VideoGetEmbedded}
     */
    VideoGetEmbedded,

    /**
     * The VideoGetEmbedded2 model constructor.
     * @property {module:model/VideoGetEmbedded2}
     */
    VideoGetEmbedded2,

    /**
     * The VideoGetEmbedded2Embedded model constructor.
     * @property {module:model/VideoGetEmbedded2Embedded}
     */
    VideoGetEmbedded2Embedded,

    /**
     * The VideoGetEmbeddedEmbedded model constructor.
     * @property {module:model/VideoGetEmbeddedEmbedded}
     */
    VideoGetEmbeddedEmbedded,

    /**
     * The VideoGetResponse model constructor.
     * @property {module:model/VideoGetResponse}
     */
    VideoGetResponse,

    /**
     * The VideoGetResponse2 model constructor.
     * @property {module:model/VideoGetResponse2}
     */
    VideoGetResponse2,

    /**
     * The VideoToUpload model constructor.
     * @property {module:model/VideoToUpload}
     */
    VideoToUpload,

    /**
     * The VideoToUpload2 model constructor.
     * @property {module:model/VideoToUpload2}
     */
    VideoToUpload2,

    /**
     * The Vote model constructor.
     * @property {module:model/Vote}
     */
    Vote,

    /**
     * The Vote2 model constructor.
     * @property {module:model/Vote2}
     */
    Vote2,

    /**
     * The VoteGetEmbedded model constructor.
     * @property {module:model/VoteGetEmbedded}
     */
    VoteGetEmbedded,

    /**
     * The VoteGetEmbeddedEmbedded model constructor.
     * @property {module:model/VoteGetEmbeddedEmbedded}
     */
    VoteGetEmbeddedEmbedded,

    /**
     * The VoteGetResponse model constructor.
     * @property {module:model/VoteGetResponse}
     */
    VoteGetResponse,

    /**
     * The VoteId model constructor.
     * @property {module:model/VoteId}
     */
    VoteId,

    /**
    * The CommentApi service constructor.
    * @property {module:api/CommentApi}
    */
    CommentApi,

    /**
    * The DegreeApi service constructor.
    * @property {module:api/DegreeApi}
    */
    DegreeApi,

    /**
    * The DisplayApi service constructor.
    * @property {module:api/DisplayApi}
    */
    DisplayApi,

    /**
    * The MessageApi service constructor.
    * @property {module:api/MessageApi}
    */
    MessageApi,

    /**
    * The NotificationApi service constructor.
    * @property {module:api/NotificationApi}
    */
    NotificationApi,

    /**
    * The ReproductionListApi service constructor.
    * @property {module:api/ReproductionListApi}
    */
    ReproductionListApi,

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
    VideoApi,

    /**
    * The VoteApi service constructor.
    * @property {module:api/VoteApi}
    */
    VoteApi
};
