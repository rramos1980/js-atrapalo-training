require.config({
    paths: {
        'backbone' : 'vendors/backbone/backbone',
        'underscore' : 'vendors/underscore/underscore',
        'jquery' : 'vendors/jquery/dist/jquery'
    },

    baseUrl: '/'
});

require(['scripts/modules/aBackboneModel'],
    function(myModel) {
        console.log(myModel);
    }
);