/**
 * Created by test on 16/04/2015.
 */
angular.module('ytbe.controllers',[]).controller('LoginCtrl',['$scope','$http','$location','$state',function($scope,$http,$location,$state){


    $scope.ajaxPost = function(){
        var postData = {};
        postData.inpLogin = $scope.inpLogin;

        $http({
            method: 'post',
            url: 'server/login.php',
            data: postData
        }).success(function(data){
            if(data.authOK){
                //$scope.message = 'Welcome';
                /*$location.path('/dashboard')*/
                $state.go('sdata');
            }
            else{

                $scope.message = "User inexistant"
                $scope.inpLogin = "";
            }
        });

    }

}]).controller('ItemCtrl',['$scope','$rootScope','Content','$http','$state',function($scope,$rootScope,Content,$http,$state){
    //////////////////////////////////
    // Retrieve = GET
    //////////////////////////////////
    $http({
        method: 'get',
        url: 'server/content.php'
    }).success(function(data, status){
        // this callback will be called asynchronously
        // when the response is available
        $rootScope.Contents = data;

    }).error(function(data, status){
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        switch(status){
            case 401:{
                $scope.message = "Vous devez etre authentifier";
                // interceptor for authOK
            }
            case 500:{
                $scope.message = "Internal error server";
            }
        }
        console.log(data, status);
    })
    //////////////////////////////
    // Create = PUT
    //////////////////////////////
    $scope.PutContents = function() {
        var PostContens = {};
        PostContens.PostContens = $scope.PostContens;

        $http({
            method: 'put',
            url: 'data/john.json',
            data: PostContens
        }).success(function (data, status) {
            $scope.message = "Videos Ajouter";

        }).error(function (data, status) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            switch (status) {
                case 401:
                {
                    $scope.message = "Vous devez etre authentifier";

                }
                case 500:
                {
                    $scope.message = "Internal error server";
                }
            }
            console.log(data, status);
        })
    }
    /* $scope.PutContents = $http.put
     $scope.DelContents = $http.delete*/

    //////////////////////////////////
    // Update = POST
    //////////////////////////////////
    //////////////////////////////////
    // Delete = DELETE
    //////////////////////////////////


}]).controller('SearchbarCtrl',['$scope','$rootScope','$http','$state',function($scope,$rootScope,$http,$state){

    $scope.ajaxGet = function () {

        var params = {};
        //params.max-results = $scope.max-results;
        params.q = $scope.q;
        params.maxresults = $scope.maxresults;
        $http({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search?',
            params: {
                key:'AIzaSyBNmIzTeq2WFTOoXNtAllDUdWZ1-RuY_b0',
                v: '3',
                part: 'snippet',
                'maxResults': $scope.maxresults,
                q: $scope.q
            }
        }).success(function(data,status){
            $rootScope.videos = data;

        }).error(function(data,status){

        })
    }

}]).controller('ListviewCtrl',['$scope','Content','$http','$state',function($scope,Content,$http,$state){


}]).controller('NavbarCtrl',['$scope','Content','$http','$state',function($scope,Content,$http,$state){

    //////////////////////////////
    // use $rootScope in ItemCtrl
    //////////////////////////////
    $scope.Contents

    ///////////////////////////////////////////////////////////////////////
    // Logout = delete $_SESSION PHP and redirect on login page with state
    ///////////////////////////////////////////////////////////////////////
    $scope.logout = function(){
        $http({
            method: 'GET',
            url: 'server/logout.php'
        });
        $state.go('slogin');
    }
}]).controller('OverviewCtrl',['$scope', function($scope) {
    $scope.list1 = {title: 'AngularJS - Drag Me'};
    $scope.list2 = {};
}]);


















