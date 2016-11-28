var app = angular.module('portfolio', []);

app.controller('projectInfoCtrl', function($scope){



$scope.projectInfo = [
{
	title: 'Project One',
	src: 'https://images.unsplash.com/photo-1475439242971-afb6fcc1ba22?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c221a5935a8ea54887ae7178aeff7725/350x350',
	description: 'This is my first project!'
},
{
	title: 'Project Two',
	src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
	description: 'This is my second project!'
},
{
	title: 'Project Three',
	src: 'https://images.unsplash.com/photo-1467703834117-04386e3dadd8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=ed3a925e8a253265c74c2b185d9ac7d6',
	description: 'This is my third project!'
},
{
	title: 'Project Four',
	src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=69b4e9aa5ba392b92c28eff906787604',
	description: 'This is my fourth project!'
},
{
	title: 'Project Five',
	src: 'https://images.unsplash.com/photo-1476052492661-714447484e01?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=a4375015dbf508b3ea6748ee848ebb08',
	description: 'This is my fifth project!'
},
{
	title: 'Project Six',
	src: 'https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=7ace99394369686e3597208395e6240c',
	description: 'This is my sixth project!'
},
{
	title: 'Project Seven',
	src: 'https://images.unsplash.com/photo-1468224970805-92d72c619545?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=b712cc36433b1055d83d7ca700e87474',
	description: 'This is my seventh project'
},
{
	title: 'Project Eight',
	src: 'https://images.unsplash.com/photo-1474635183442-1d29a9be83d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=2c15607e1cb575f7e6953ba6bfabfddb',
	description: 'This is my eighth project!'
},
{
	title: 'Project Nine',
	src: 'https://images.unsplash.com/photo-1462663608395-404cb6246eaf?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=47d882ec1d9e97c67aeafe03e8780dc0',
	description: 'This is my ninth project!'
},
];

});

app.directive('myProject', function(){
	return {
		restrict: 'E',
		// template: '<div class="grid-item"><p class="grid-heading">Project Two</p><img src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869"><p class="grid-description">This is my second project!</p></div>',
		templateUrl: 'project.html'
	};
});