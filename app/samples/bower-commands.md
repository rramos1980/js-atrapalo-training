#Bower Useful Commands#

See instaled packages:

```
bower list
```

See paths for installed packages:

```
bower list --paths
```

Find a package:

```
bower search requirejs
```

Install a package:

```
bower install requirejs
```

and update bower.json (you can use --save-dev as well):

```
bower install requirejs --save
```

Update an installed package:

```
bower update requirejs
```

Uninstall a package:

```
bower uninstall requirejs
```

In deploy you can install al packages with:

```
bower install
```

or for production environmments with --production flag to exclude devDependencies

