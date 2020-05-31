angular.
module('favoriteList').
component('favoriteList',{
	templateUrl:'favorite-list/favorite-list.template.html',
	controller: function favoriteListCtrl () {
		let self = this;
		self.title = 'Favorite List';
		let tempArr = JSON.parse(localStorage.favoriteGallery).filter(function (item) {
			if( item.favorite ) {
				return item;
			}
		});
		self.favoriteList =  [...tempArr];
	}
});
