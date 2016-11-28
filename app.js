var app = angular.module('portfolio', []);

$scope.projectInfo = [
{
	title: 'Project One',
	src: "https://images.unsplash.com/photo-1475439242971-afb6fcc1ba22?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c221a5935a8ea54887ae7178aeff7725/350x350",
	description: 'This is my first project!'
},
{

}
];

app.directive('myProject', function(){
	return {
		restrict: 'E',
		// template: '<div class="grid-item"><p class="grid-heading">Project Two</p><img src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869"><p class="grid-description">This is my second project!</p></div>',
		template: '',
		replace: false
	};
});