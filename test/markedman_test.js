'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.markedman = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  callGruntWithMarkedman: function(test) {
    test.expect(5);

    grunt.util.spawn({
      grunt: true,
      args: [ '--gruntfile', 'test/fixtures/Gruntfile.js', 'markedman']
    } , function (err, result, code) {

      var files = [
        "grunt-markedman.3", "main_grunt-markedman.1", "main_grunt-markedman.3",
        "service_grunt-markedman.3", "service_grunt-markedman.8"
      ];
      for (var i=0; i<5; i++) {
        var actual = grunt.file.read('test/tmp/' + files[i]);
        var expected = grunt.file.read('test/expected/' + files[i]);
        test.equal(actual, expected, 'file "' + files[i] + '" isnt what it\'s supposed to be.' );
      }

      test.done();
    });
  }
};
