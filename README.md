# random-color-generator

---

## commands

`node index.js` generates a random color

### hue/luminosity passed as arguments

`node index.js {color}<String>` generates a specific color

`node index.js {hue}<String> {luminosity}<String>` generates a color with a specific hue and luminosity\
luminosity must be either **light** _or_ **dark**

### hue/luminosity gathered via console
`node index.js ask` will lead to the program asking the user to specify their hue and/or luminosity decision in the console

---

## funcitonality

A command line interface application that can display the hex value inside of a `#` filled box for:

- [X] random colors 
- [X] user picked colors (one at a time)
- [X] user picked color and luminosity

_additionally_ it can

- [X] ask the user for their color and luminosity choice
- [ ] let the user specify the format (width & height) of the `#` filled box

---

## to-do's

- [X] figure our a way to handle user input (probably cli arguments: [argv array])
- [X] either create a template to use for the 31x9 grid or create an algorithm for dynamic grid
- [X] find console.log color module
- [X] find random Hex Color Generator module
- [X] figure out how to convert hex to hsl (or how to convert given hex to a hsl with higher/lower luminosity) (not necessary, since found module handles all necessities in a well enough manner)

---

## Exercise description

When a user enters node index.js in the command line, a block of approximately 31x9 `#` characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

Users should be able to provide **hue** (e.g. _green or red or blue_) and **luminosity** (e.g. _light or dark_) values, for the application to then generate random colors that match those choices.

## main functions
- [X] When a user enters node index.js in the command line, a block of approximately 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.\
\
 Accept the request and generate random colors that match those choices for:
- [x] hue (e.g. green or red or blue)
- [x] luminosity (e.g. light or dark)

## stretch functions

- [X] if a user adds "ask" as an argument print questions to ask the user for the name of the color and the luminosity
- [ ] if a user types a size in the format of WWxHH (eg. 31x9) before the color and luminosity, it will use this as the size of the box

