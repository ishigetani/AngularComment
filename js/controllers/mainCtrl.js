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
    });

    $scope.submitComment = function() {
        Comment.save($scope.commentData).success(function(data) {
            $scope.comments.push(data.response);
            $scope.commentData.text = '';
        }).error(function(data) {
            console.log(data);
        });
    };

    $scope.deleteComment = function(id) {
        Comment.deleteId(id).success(function(data){
            Comment.get().success(function(allData) {
                $scope.comments = allData.response;
            });
        })
    }
});