(function(angular) {
    'use strict';

    /**
     * @ngdoc overview
     * @name angularApp
     * @description
     * # angularApp
     *
     * Main module of the application.
     */
    angular.module('angularApp', [
        'ui.router',
        'ui.router.util'
    ]);

    angular.module('angularApp').constant('paths', {
        // controllers : 'src/controllers',
        // routes : 'src/routes',
        views : 'src/views/',
    });

    angular.module('angularApp').config(['$urlRouterProvider', '$stateProvider', 'paths',
        function($urlRouterProvider, $stateProvider, paths) {
            var parent = $stateProvider.state;

            $stateProvider.state = function(name, definition) {
                if (typeof definition.templateUrl !== 'undefined') {
                    definition.templateUrl = paths.views + definition.templateUrl;
                }

                if (typeof definition.views !== 'undefined') {
                    var key = null;
                    var value = null;

                    for (key in definition.views) {
                        value = definition.views[ key ];

                        if (typeof value.templateUrl !== 'undefined') {
                            value.templateUrl = paths.views + value.templateUrl;
                        }

                        definition.views[ key ] = value;
                    }
                }

                var response = parent(name, definition);

                return this;
            };

            $urlRouterProvider.otherwise('/');
        }
    ]);

    angular.module('angularApp').config(['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('app', {
                    // views : {
                    //  menu : {
                    //      templateUrl : 'elements/menu.html',
                    //  }
                    // },
                    // views: {
                    //     "viewA": { template: "index.viewA" },
                    //     "viewB": { template: "index.viewB" },
                    //     // "" : {template : ':D'}
                    // }
                    // templateUrl : 'home/index.html'
                    abstract: true,
                    views : {
                        "" : {
                            templateUrl : 'layouts/default.html'
                        },
                        menu : {
                            templateUrl : 'elements/menu.html'
                        }
                    }
                })
                // Test
                .state('app.test', {
                    url : '/test',
                    templateUrl : 'test/index.html'
                })
                .state('app.test.holi', {
                    url : '/holi',
                    templateUrl : 'test/holi.html'
                });
        }
    ]);
})(angular);
