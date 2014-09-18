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

Check that now we have requirejs in our folder "app/vendors". Remember to include this new folder to .gitignore

* Include require script in index.html. We will use scrips/main.js as data main for requirejs.
