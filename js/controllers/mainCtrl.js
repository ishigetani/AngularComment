/**
 * Created by ishigetani on 2014/12/26.
 */

angular.module('mainCtrl', []).controller('mainController', function($scope, $http, Comment) {
    $scope.commentData = {};
    $scope.commentData.author = 'test';

    $scope.loading = true;

    Comment.get().success(function(data) {
        $scope.comments = data.response;
        $scope.loading = false;
    }).error(function(data) {
        $.notify("Error.", 'error');
    });

    $scope.submitComment = function() {
        Comment.save($scope.commentData).success(function(data) {
            $scope.comments.unshift(data.response);
            $scope.commentData.text = '';
            $.notify("Complete.", 'success');
        }).error(function(data) {
            $.notify("Save Error.", 'error');
        });
    };

    $scope.deleteComment = function(index) {
        Comment.deleteId($scope.comments[index].Comment.id).success(function(data){
            $scope.comments.splice(index, 1);
            $.notify("Complete.", 'success');
        }).error(function(data) {
            $.notify("Delete Error.", 'error');
        })
    }
});