/**
 * Created by ishigetani on 2014/12/26.
 */

angular.module('mainCtrl', []).controller('mainController', function($scope, $http, Comment) {
    $scope.commentData = {};

    $scope.loading = true;

    Comment.get().success(function(data) {
        $scope.comments = data.response;
        $scope.loading = false;
    });
});