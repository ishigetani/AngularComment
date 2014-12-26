/**
 * Created by ishigetani on 2014/12/26.
 */

angular.module('commentService', []).factory('Comment', function($http, Constant){
    return {
        get : function() {
            return $http.get(Constant.BaseUrl+'api/comments')
        }
    }
});