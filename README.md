# MultiDimensional

[![Build Status](https://travis-ci.org/arjunmehta/multidimensional.svg)](https://travis-ci.org/arjunmehta/multidimensional)

Create and manage self aware multi-dimensional arrays of anything. Use this module to:

- **Make multi-dimensional array instances with as many dimensions as you'd like.**
- **Initialize the array with any type of value or object.**
- **Set and Get positions within the array to any value or object.**
- **Do all this with a simple and scalable interface.**

## Basic Usage

## Install
```bash
npm install --save multidimensional
```

## Basic Usage

```javascript
var MultiDimensional = require('multidimensional')
```

### Initialize a New Instance
To create a new MultiDimensional, create a new instance and pass in the dimensional sizes as an array. By default all values will initialize as `null`:

```javascript
// create a 3x3 array
var twodimensional = new MultiDimensional([3, 3])

// create a 3x3x4 array
var threedimensional = new MultiDimensional([3, 3, 4])

// create a 4x3x4x2 array
var fourdimensional = new MultiDimensional([4, 3, 4, 2])

// etc...
```

### Set Initial Values

If you want to create a new instance with initial values, you can pass in an initial value for all positions:
```javascript
// create a 3x4 array with all positions set to 0
var twodimensional = new MultiDimensional([3, 4], 0)

// create a 3x3x4 array with all positions set to 'Default String'
var threedimensionalAsStrings = new MultiDimensional([3, 3, 4], 'Default String')
```

Or pass in a callback to return a value or object to be put in `position`. The callback takes the `position` and the `multidimensional` instance it will be added to.
```javascript
// create a 3x3x4 array with all positions set to a unique Cell object.
var threedimensional = new MultiDimensional([3, 3, 4], function(position, multidimensional) {
    return new Cell(position, multidimensional.dimensions)
})

function Cell(position, overallDimensions) {
    this.position = position
    this.overallDimensions = overallDimensions
}
```


### Get Position Values

**IMPORTANT**: Position indexes start at `[0, 0, 0]`. So if you created an array of size 3x4x5 (`[3, 4, 5]`), the highest index will be `[2, 3, 4]`.


```javascript
threedimensional.position([2, 2, 2])
```

### Set Position Values
```javascript
threedimensional.position([2, 2, 2], 'New Value')
```

## License
The MIT License (MIT)<br/>
Copyright (c) 2015 Arjun Mehta
