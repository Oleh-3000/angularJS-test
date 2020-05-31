function GalleryListCtrl( $http ) {
	let self =this;

	self.images = [];
	
	self.numbers = [
		4,8,12
	];
	self.itemNumber = self.numbers[2];
	
	self.arrFavorite = [];
	
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
					self.arrFavorite.push(obj);
				}

				addLocalStorage(self.arrFavorite);
			};
			
			console.log('favorite', self.arrFavorite);



			self.favoriteFilter = function (arr) {
				let newArr = [...arr];
				console.log( 'select favorite aaaa', newArr  );
				if( self.classifitacionSelect === 'Favorite' ){
					newArr = [...self.arrFavorite]
					console.log( 'select favorite', newArr  );
					return newArr;
					
				}
			};
			
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
