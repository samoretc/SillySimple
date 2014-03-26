var SILLY = (function(module) {
	
	module.DoIt = function(reultObject){
		reultObject.prepend(Date() + '<br/>'); 
	};

	return module;
}(SILLY || {}));