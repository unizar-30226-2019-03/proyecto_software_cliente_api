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


import ApiClient from "../ApiClient";
import Subject2 from '../model/Subject2';
import User2 from '../model/User2';
import Video2 from '../model/Video2';
import VideoGetResponse2 from '../model/VideoGetResponse2';

/**
* Video service.
* @module api/VideoApi
* @version 1.3.0
*/
export default class VideoApi {

    /**
    * Constructs a new VideoApi. 
    * @alias module:api/VideoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addVideo operation.
     * @callback module:api/VideoApi~addVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subida de un nuevo video
     * Adicion de nuevo video
     * @param {File} file 
     * @param {File} thumbnail 
     * @param {String} title 
     * @param {String} description 
     * @param {Number} subjectId 
     * @param {module:api/VideoApi~addVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video2}
     */
    addVideo(file, thumbnail, title, description, subjectId, callback) {
      let postBody = null;
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling addVideo");
      }
      // verify the required parameter 'thumbnail' is set
      if (thumbnail === undefined || thumbnail === null) {
        throw new Error("Missing the required parameter 'thumbnail' when calling addVideo");
      }
      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling addVideo");
      }
      // verify the required parameter 'description' is set
      if (description === undefined || description === null) {
        throw new Error("Missing the required parameter 'description' when calling addVideo");
      }
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling addVideo");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file,
        'thumbnail': thumbnail,
        'title': title,
        'description': description,
        'subject_id': subjectId
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Video2;
      return this.apiClient.callApi(
        '/videos/upload', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVideo operation.
     * @callback module:api/VideoApi~deleteVideoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Eliminacion de un video (si se es el autor del mismo)
     * @param {Number} id 
     * @param {module:api/VideoApi~deleteVideoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteVideo(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteVideo");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': id
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/videos/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findVideosContainingTitle operation.
     * @callback module:api/VideoApi~findVideosContainingTitleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca videos que contengan una string en el titulo
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {String} opts.title String a buscar en el titulo de videos
     * @param {module:api/VideoApi~findVideosContainingTitleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse2}
     */
    findVideosContainingTitle(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'projection': opts['projection'],
        'title': opts['title']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse2;
      return this.apiClient.callApi(
        '/videos/search/titleContaining', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findVideosStartsWithTitle operation.
     * @callback module:api/VideoApi~findVideosStartsWithTitleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Busca videos que empiecen por un nombre dado
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {String} opts.title Comienzo del nombre de los videos a buscar
     * @param {module:api/VideoApi~findVideosStartsWithTitleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video2}
     */
    findVideosStartsWithTitle(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'projection': opts['projection'],
        'title': opts['title']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Video2;
      return this.apiClient.callApi(
        '/videos/search/titleStartsWith', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideo operation.
     * @callback module:api/VideoApi~getVideoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Video2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener el video con un id dado
     * @param {Number} id Id del video
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Video2}
     */
    getVideo(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideo");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = Video2;
      return this.apiClient.callApi(
        '/videos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoSubject operation.
     * @callback module:api/VideoApi~getVideoSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subject2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener la asignatura de un video
     * @param {Number} id Id del video
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad en la respuesta (default to 'subjectWithUniversity')
     * @param {module:api/VideoApi~getVideoSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subject2}
     */
    getVideoSubject(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideoSubject");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = Subject2;
      return this.apiClient.callApi(
        '/videos/{id}/subject', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideoUploader operation.
     * @callback module:api/VideoApi~getVideoUploaderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtener el uploader de un video
     * @param {Number} id Id del video
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideoUploaderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User2}
     */
    getVideoUploader(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getVideoUploader");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/hal+json'];
      let returnType = User2;
      return this.apiClient.callApi(
        '/videos/{id}/uploader', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideos operation.
     * @callback module:api/VideoApi~getVideosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de videos
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse2}
     */
    getVideos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse2;
      return this.apiClient.callApi(
        '/videos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideosFromSubject operation.
     * @callback module:api/VideoApi~getVideosFromSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de videos de una asignatura
     * @param {Number} subjectId Id de la asignatura
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideosFromSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse2}
     */
    getVideosFromSubject(subjectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling getVideosFromSubject");
      }

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection'],
        'subject_id': subjectId
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse2;
      return this.apiClient.callApi(
        '/videos/search/subjectVideos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideosFromUploader operation.
     * @callback module:api/VideoApi~getVideosFromUploaderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de videos que ha subido un usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideosFromUploaderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse2}
     */
    getVideosFromUploader(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse2;
      return this.apiClient.callApi(
        '/videos/search/uploaderVideos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVideosOfUserSubjects operation.
     * @callback module:api/VideoApi~getVideosOfUserSubjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VideoGetResponse2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista de videos de las asignaturas de un usuario
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl  (default to 'no-cache, no-store, must-revalidate')
     * @param {String} opts.pragma  (default to 'no-cache')
     * @param {String} opts.expires  (default to '0')
     * @param {Number} opts.page Número de la página a devolver
     * @param {Array.<String>} opts.sort Parámetros en la forma `($propertyname,)+[asc|desc]?`
     * @param {module:model/String} opts.projection Incluir si se quiere obtener tambien la universidad y/o la asignatura en la respuesta (default to 'videoWithSubject')
     * @param {module:api/VideoApi~getVideosOfUserSubjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VideoGetResponse2}
     */
    getVideosOfUserSubjects(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'csv'),
        'projection': opts['projection']
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl'],
        'Pragma': opts['pragma'],
        'Expires': opts['expires']
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VideoGetResponse2;
      return this.apiClient.callApi(
        '/videos/search/userSubjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
