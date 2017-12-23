(function () {

    var angular = require('angular');

    var common = require('./common/common.module');
    var components = require('./components/components.module');
    
    angular.module('app', [
        common,
        components
    ]);

})();