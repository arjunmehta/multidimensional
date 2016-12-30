# MultiDimensional

[![Build Status](https://travis-ci.org/arjunmehta/multidimensional.svg)](https://travis-ci.org/arjunmehta/multidimensional)

Create and manage self aware multi-dimensional arrays of anything. Use this module to:

- **Make multi-dimensional array instances with as many dimensions as you'd like.**
- **Initialize the array with any type of value or object.**
- **Set and Get positions within the array to any value or object.**
- **Do all this with a simple and scalable interface.**

**IMPORTANT**: Currently, multi-dimensional arrays are fixed in size. That means if you manipulate any of the dimensional arrays (eg. with `push`, `pop`, `slice` etc) you will get unexpected behaviours.

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

### Get Position Values

**IMPORTANT**: Position indexes start at `[0, 0, 0]`. So if you created an array of size 3x4x5 (`[3, 4, 5]`), the highest index will be `[2, 3, 4]`.


```javascript
threedimensional.position([2, 2, 2])
```

### Set Position Values
```javascript
threedimensional.position([2, 2, 2], 'New Value')
```


## Advanced Usage

### Self-Aware Values with Callback
When constructing your multi-dimensional array, you can use a callback function to construct and return an item for each position.

The callback is called with the `position` and the `multidimensional` instance it will be added to.

```javascript
// create a 3x3x4 array with all positions set to a unique Cell object.
var threedimensional = new MultiDimensional([3, 3, 4], function(position, multidimensional) {
    return {
        mydescription: 'I am a cell at position ' + position.join(),
        myposition: position,
        myparent: multidimensional
    }
})
```


## License
The MIT License (MIT)<br/>
Copyright (c) 2015 Arjun Mehta
