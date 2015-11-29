function MultiDimensional(dimensions, cb) {
    var initialPosition = createInitialArray([], dimensions.length);
    this.matrix = createNDimensionArray(this, dimensions, initialPosition, cb);

    return this;
}

MultiDimensional.prototype.position = function(position) {
    return getElement(this.matrix, position);
};

MultiDimensional.prototype.set = function(position, value) {
    return setElement(this.matrix, position, value);
};


// MultiDimensional Array Algorithms

function createNDimensionArray(multidimensional, dimensions, position, cb) {

    var width;
    var rest;
    var newArray;
    var i;
    var currentDimension;
    var returnValue;

    if (dimensions.length > 0) {

        width = dimensions[0];
        rest = dimensions.slice(1);
        newArray = [];
        currentDimension = position.length - 1 - rest.length;
        position[currentDimension] = 0;

        for (i = 0; i < width; i++) {
            newArray[i] = createNDimensionArray(multidimensional, rest, position, cb);
            position[currentDimension]++;
        }

        returnValue = newArray;

    } else {

        // console.log('Setting position', position, 'to', cb);

        if (typeof cb === 'function') {
            returnValue = cb(multidimensional, position, dimensions);
        } else if (cb !== undefined) {
            returnValue = cb;
        } else {
            returnValue = null;
        }
    }

    return returnValue;
}

function getElement(array, indices) {

    var returnValue;

    if (indices.length === 0) {
        returnValue = array;
    } else {
        returnValue = getElement(array[indices[0]], indices.slice(1));
    }

    return returnValue;
}

function setElement(array, indices, value) {

    if (indices.length === 1) {
        array[indices[0]] = value;
    } else {
        setElement(array[indices[0]], indices.slice(1), value);
    }
}

function createInitialArray(arr, length) {

    var i;
    for (i = 0; i < length; i++) {
        arr[i] = 0;
    }

    return arr;
}


module.exports = MultiDimensional;
