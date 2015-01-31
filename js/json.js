var data=angular.module('PostCollection',[]);
	data.controller('Postctrl',['$scope',function($scope){
	var posts=[{
	"postid":1,
	"title":"10f tools for web designers",
	"author":"Yashdeep hinge",
	"content":"helllo world to github blog on testing production will start soon"
	},{
	"postid":2,
	"title":"10 tools for web developers",
	"author":"Yashdeep hinge",
	"content":"helllo world to github blog on testing production will start soon"	
	},{
	"postid":3,
	"title":"modules for angular dev's",
	"author":"Yashdeep hinge",
	"content":"helllo world to github blog on testing production will start soon"
	}];
	$scope.posts=posts;
	}]);
	