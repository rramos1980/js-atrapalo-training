require(['modules/aModuleDefinedWithAnObject', 'modules/aModuleDefinedWithADefinitionFunction'],
    function(objectModule, callbackModule) {
        console.log(objectModule, callbackModule);
});