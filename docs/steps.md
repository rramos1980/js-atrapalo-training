#Atrapalo Js Training#

### start ###
We will install Yeoman and Webapp generator:

```
npm install -g yo
```

```
npm install -g generator-webapp
```

```
yo webapp
```

If everything is ok you can run the application with:

```
Grunt serve
```

## step1 ##

As we want to use require, we remove al javascript tags from index.html and to avoid automatic inclusion, we remove gruntwiredep task.

## step2 ##

Script loading with require.

* We will install requirejs with bower but first we will configure bower to install our dependencies in app/vendors.
  To do so, change .bowerrc as follows:

  ```
  {
      "directory": "app/vendors"
  }
  ```

* Install require with bower:
```
bower install requirejs --save
```

Check that now we have requirejs in our folder "app/vendors". Remember to include this new folder to .gitignore.

Full bower api reference: http://bower.io/docs/api/

* Include require script in index.html. We will use scrips/main.js as data main for requirejs.

## step3 ##

We will require directly from main some test modules without dependencies:

* A module defined with only an Object.
* A module defined with a callback function.

Check the mechanichs, inspecting source we will see script tags on the header of the page (head.appendChild())

## step4 ##

Module with dependencies. We will create a backbone model that depends on Backbone library:

First, install backbone latest version using bower:

```
bower install backbone --save
```

We will play with require config to setup paths and baseUrl configs:

We will define a require.config:

```
require.config({
    paths: {
        'backbone' : '../vendors/backbone/backbone'
    }
});
```

Note that a path is always baseUrl + path + '.js'

We will add underscore and jquery to paths as well.

No we can play changing our baseUrl to '/' an make the changes needed.

## step5 ##

Playing with shims

To play arround with shim we will install backbone#1.0.0

```
bower install backbone#1.0.0 --save
```

Note that we have a conflict between versions to be saved, we can save our decision in "resolutions".

Now we have errors as backbone 1.0.0 is not AMD ready

## step6 ##

Generating a production build with Optimizer:

First we will install Optimizer using npm:

```
npm install -g requirejs
```

We build set up a basic build config:

```
{
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
}
```

And run optimizer:

```
r.js -o app.build.js
```

We can try with 'optimize: "none"' to see generated code (not uglifyed).