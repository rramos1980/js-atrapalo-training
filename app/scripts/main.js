require.config({
    paths: {
        'backbone' : 'vendors/backbone/backbone',
        'underscore' : 'vendors/underscore/underscore',
        'jquery' : 'vendors/jquery/dist/jquery'
    },

    shim: {
        'backbone' : {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    },

    baseUrl: '/'
});

require(['scripts/modules/aBackboneModel'],
    function(myModel) {
        console.log(myModel);
    }
);