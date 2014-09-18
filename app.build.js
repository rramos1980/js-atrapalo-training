({
    baseUrl: "app/",
    optimize: "none",
    "paths" : {
        "backbone" : "vendors/backbone/backbone",
        "underscore" : "vendors/underscore/underscore",
        "jquery" : "vendors/jquery/dist/jquery"
    },
    shim: {
        'backbone' : {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    },
    name: "scripts/main",
    out: "app/scripts/main.dist.js"
})
