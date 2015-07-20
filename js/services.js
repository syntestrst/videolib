/**
 * Created by test on 17/04/2015.
 */


angular.module('ytbe.services', ['ngResource']).factory('Content',['$resource',function($resource){

        return $resource('server/content.php');

    }]);