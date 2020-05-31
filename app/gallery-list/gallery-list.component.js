
function GalleryListCtrl( $http ) {
	let self =this;

	self.images = [];
	
	self.numbers = [
		4,8,12
	];
	self.itemNumber = self.numbers[2];
	
	$http.get('https://picsum.photos/v2/list')
		.then(function (resp) {
			self.images = [...resp.data];
			self.images.forEach((image)=>{
				image.favorite = false;
			});
			console.log('resp',resp);
			
			let arrFavorite = [];
			
			self.addFavorite = function (obj) {
				obj.favorite = !obj.favorite;
				// console.log('obj info', obj);
				
				if(obj.favorite) {
					arrFavorite.push(obj);
				}
			};

			
			
			console.log('favorite', arrFavorite);

			addLocalStorage(arrFavorite);
			
			return self.images;
		});
	
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
