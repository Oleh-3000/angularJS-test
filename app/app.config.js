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
		otherwise('/gallery-list');
	}
]);
