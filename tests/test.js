var MultiDimensional = require('../main');
var test = require('tape').test;


// tests

test('Methods Exist', function(t) {

    var multidimensional = new MultiDimensional([3, 4, 5]);

    t.equal(multidimensional.position([0, 0, 0]), null);
    t.equal(Array.isArray(multidimensional.matrix), true);
    t.end();
});


test('Set all to a String', function(t) {

    var multidimensional = new MultiDimensional([5, 4, 3], 'Hi there');

    t.equal(multidimensional.position([3, 2, 1]), 'Hi there');
    t.end();
});

test('Set a Value to a String', function(t) {

    var multidimensional = new MultiDimensional([5, 4, 3]);

    t.equal(multidimensional.position([3, 2, 1]), null);
    multidimensional.position([3, 2, 1], 'Jambalaya');
    t.equal(multidimensional.position([3, 2, 1]), 'Jambalaya');
    
    t.end();
});
