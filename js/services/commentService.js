/**
 * Created by ishigetani on 2014/12/26.
 */

angular.module('commentService', []).factory('Comment', function($http, Constant){
    return {
        get : function() {
            return $http.get(Constant.BaseUrl+'api/comments')
        },
        save : function(commentData) {
            return $http({
                method: 'POST',
                url: Constant.BaseUrl+'api/comments/save',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(commentData)
            });
        },
        deleteId : function(id) {
            return $http.delete(Constant.BaseUrl+'api/comments/deleteId/'+id);
        }
    }
});