function GalleryItemCtrl($routeParams, $http) {
	
	let self = this;

	self.imageId = $routeParams.imageId;
	console.log('params :', this.imageId);
	
	let url = 'https://picsum.photos/id';

	$http.get('https://picsum.photos/v2/list')
		.then(function (resp) {
			self.image = {};
			resp.data.forEach((item) => {
				if( item.id === self.imageId ) {
					console.log('item', item);
					self.image = {...item};
				}
			});
		});
}

angular.module('galleryItem').
	component('galleryItem', {
		templateUrl: 'gallery-item/gallery-item.template.html',
		controller: ['$routeParams', '$http', GalleryItemCtrl ] 
});
