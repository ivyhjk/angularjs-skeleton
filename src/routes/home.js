(function(angular){
	'use strict';

	angular.module('angularApp').config(['$stateProvider',
		function($stateProvider) {
			$stateProvider
				.state('app.home', {
					url : '/',
					templateUrl : 'home/index.html'
				});
		}
	]);
})(angular);
