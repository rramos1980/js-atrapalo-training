define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        initialize: function () {
            console.log('initializing the module!');
        }
    });
});