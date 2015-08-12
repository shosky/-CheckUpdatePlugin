var exec = require('cordova/exec');

var CheckUpdatePlugin = {
	check:function(key, successCallback, errorCallback) {
    	exec(null,null, "CheckUpdatePlugin",
        "checkVersion", []);
	}
};

module.exports= CheckUpdatePlugin;

