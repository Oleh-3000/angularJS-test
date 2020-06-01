function GalleryListCtrl( $http ) {
	let self = this;
	
	self.title = 'Gallery List'
	self.numbers = [
		4,8,12
	];
	self.itemNumber = self.numbers[2];
	
	const arrFavorite = [];
	
	
	if(localStorage.favoriteGallery) {
		self.imagesArr = JSON.parse(localStorage.favoriteGallery);
	} else {
		$http.get('https://picsum.photos/v2/list')
			.then(function (resp) {
				self.images = [...resp.data];

				self.images.forEach((image)=>{
					image.favorite = false;
				});

				addLocalStorage(self.images);
			});

		self.imagesArr = JSON.parse(localStorage.favoriteGallery);
	}
	
	self.addFavorite = function (obj) {
		obj.favorite = !obj.favorite;

		if(obj.favorite) {
			arrFavorite.push(obj);
			
			let tempIndex = self.imagesArr.findIndex(function (item) {
				return item.id === obj.id 
			});
			
			self.imagesArr[tempIndex] = obj;
			
			addLocalStorage(self.imagesArr);
		} else {
			let tempIndex = self.imagesArr.findIndex(function (item) {
				return item.id === obj.id
			});

			self.imagesArr[tempIndex] = obj;

			addLocalStorage(self.imagesArr);
		}
	};
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

