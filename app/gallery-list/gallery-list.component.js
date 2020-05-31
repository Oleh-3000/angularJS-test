function GalleryListCtrl( $http ) {
	let self =this;

	self.title = 'Gallery List'
	
	self.images = [];
	
	self.numbers = [
		4,8,12
	];
	self.itemNumber = self.numbers[2];
	
	let arrFavorite = [];
	
	self.classifitacion = [
		'All', 'Favorite'
	];
	
	self.classifitacionSelect = self.classifitacion[0];
	
	$http.get('https://picsum.photos/v2/list')
		.then(function (resp) {
			self.images = [...resp.data];
			self.images.forEach((image)=>{
				image.favorite = false;
			});
			console.log('resp',resp);
			
			// let arrFavorite = [];
			
			self.addFavorite = function (obj) {
				obj.favorite = !obj.favorite;
				// console.log('obj info', obj);
				
				if(obj.favorite) {
					arrFavorite.push(obj);
				}

				addLocalStorage(arrFavorite);
				
				// console.log( localStorage.favoriteGallery );
			};
			
			console.log('favorite', arrFavorite);

			return self.images;
		});
	
	
	console.log('favorite111', arrFavorite);
	console.log('images',self.images);
	
}


function addLocalStorage(arr) {
	localStorage.setItem( "favoriteGallery", JSON.stringify(arr) );
}


angular.
	module('galleryList').
	component('galleryList', {
		templateUrl: 'gallery-list/gallery-list.template.html',
		controller: ['$http', GalleryListCtrl,]
	});

