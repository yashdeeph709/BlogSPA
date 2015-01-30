var app=angular.module('PostCollection',[]);
	app.controller('Postctrl',['$scope',function($scope){
	var posts=[{
	"postid":1,
	"title":"10 tools for web designers",
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
	$scope.post=$scope.posts[0];
	$scope.showpost=function(postid){
		console.log(postid);
		$scope.post=$scope.posts[postid-1];
	};
}]);
