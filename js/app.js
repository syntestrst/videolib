/**
 * Created by test on 16/04/2015.
 */
angular.module('ytblib', ['ui.router','ngDragDrop','ui.bootstrap','ytbe.controllers','ytbe.services','ytbe.directives'])



    // provider-injector
    // Config block.
    // You can have as many of these as you want.
    // You can only inject Providers (not instances)
    // into config blocks.
    .config(function($stateProvider, $urlRouterProvider) {



        $stateProvider


            .state('slogin', {
                url:'/login',
                views: {
                    'login': {
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })

            .state('sdata',{
                url:'/data',
                views: {
                    'navbar': {
                        templateUrl: 'views/navbar.html',
                        controller: 'NavbarCtrl',
                        cache: false
                    },

                    'searchbar': {
                        templateUrl: 'views/searchbar.html',
                        controller: 'SearchbarCtrl',
                        cache: false
                    },

                    'listview': {
                        templateUrl: 'views/listview.html',
                        controller: 'ListviewCtrl',
                        cache: false
                    },
                    'playview':{
                        templateUrl: 'views/playvideo.html',
                        cache: false
                    },

                    'item': {
                        templateUrl: 'views/item.html',
                        controller: 'ItemCtrl',
                        cache: false
                    }
                }
            })


        $urlRouterProvider.otherwise('/login');


    }).run(function($http,$state){
        // CACHE
        //$http.defaults.cache = true;
        // SET SPECIFIC HEADER
        $http.defaults.headers.common.Accept = "application/json";
        /*$http.defaults.headers.common.Origin = "https://www.googleapis.com";
        $http.defaults.headers.common.Referer = "https://www.googleapis.com";*/
    })

