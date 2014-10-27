angular.module('gearWorks.services', [])
.factory('gearWorksAPIservice', function($http) {
	var gearWorksAPI = {};
	gearWorksAPI.userRESTLogin = function(email, password) {
		return $http({
			method: 'POST',
			data: $.param({
				"email": email,
				"password": password
			}),
			url: '/user-rest-login'
		});
	};
	return gearWorksAPI;
});