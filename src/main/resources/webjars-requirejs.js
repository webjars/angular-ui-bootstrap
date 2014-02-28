/*global requirejs */

// Ensure any request for this webjar brings in dependencies.
requirejs.config({
    paths: {
        'ui-bootstrap': webjars.path('angular-ui-bootstrap', 'ui-bootstrap'),
        'ui-bootstrap-tpls': webjars.path('angular-ui-bootstrap', 'ui-bootstrap-tpls')
    },
    shim: {
        'ui-bootstrap': [ 'angular' ]
    }
});
