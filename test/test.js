'use strict';
var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isClassFile = require('../');

test('Should be true for .class files.', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.class'), 0, 4, function (err, buf) {
		t.assert(!err, err);
		t.assert(isClassFile(buf));
	});
});
