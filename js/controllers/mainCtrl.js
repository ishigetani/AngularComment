/**
 * Created by ishigetani on 2014/12/26.
 */

angular.module('mainCtrl', []).controller('mainController', function($scope, $http, Comment, $sessionStorage) {
    $scope.commentData = {};

    $scope.$storage = $sessionStorage.$default({
        author: 'Tester'
    });

    Comment.get().success(function(data) {
        $scope.comments = data.response;
    }).error(function(data) {
        $.notify("Error.", 'error');
    });

    $scope.submitComment = function() {
        $scope.commentData.author = $scope.$storage.author;
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
    };

    $scope.editComment = function(id, text) {
        var data = {id: id, text: text, author: $scope.$storage.author};
        return Comment.edit(data);
    };

}).run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});