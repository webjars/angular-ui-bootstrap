/*global requirejs */

// Ensure any request for this webjar brings in dependencies.
requirejs.config({
    shim: {
        'ui-bootstrap': [ 'webjars!angular.js' ],
        'ui-bootstrap-tpls': [ 'webjars!angular.js' ]
    }
});
