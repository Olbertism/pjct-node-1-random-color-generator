# Readme

A command line program, that generates random color boxes.

```
$ node index.js
```
Output a random color.


```
$ node index.js blue
```
Output a random color, which hue is blended with css default blue. All css default color names are valid arguments.


```
$ node index.js blue dark
```
Output a random color, which hue is blended with css defaut blue and gets darkened by a random amount. "dark" and "light" are valid inputs. 


```
$ node index.js ask
```
WIP! Prompts the user to input a hex code color.


## Dependencies

https://www.npmjs.com/package/chalk

https://www.npmjs.com/package/color

