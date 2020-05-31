angular.
module('MyApp').
config(['$routeProvider',
	function config($routeProvider) {
		$routeProvider.
		when('/gallery-list', {
			template: '<gallery-list></gallery-list>'
		}).
		when('/gallery-item-:imageId', {
			template: '<gallery-item></gallery-item>'
		}).
		when('/favorite-list', {
			template: '<favorite-list></favorite-list>'
		}).
		otherwise('/gallery-list');
	}
]);
