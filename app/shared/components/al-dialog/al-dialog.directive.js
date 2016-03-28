(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs){

		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/al-dialog/al-dialog.template.html',
	        link: link,
	        transclude: true,
			scope:{
				options:'=?source'
			}
		};

	};
	


	angular.module('alDialog', []).directive('alDialog',directive);
})();