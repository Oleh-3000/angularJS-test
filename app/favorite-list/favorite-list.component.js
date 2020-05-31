angular.
module('favoriteList').
component('favoriteList',{
	templateUrl:'favorite-list/favorite-list.template.html',
	controller: function favoriteListCtrl () {
		let self =this;
		self.title = 'Favorite List';
		self.favoriteList =  JSON.parse(localStorage.favoriteGallery);
	}
});
