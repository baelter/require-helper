'use strict';
/**
 * Helper to avoid:
 * var DatasetEditController = require('../../../app/hello/dataset/edit/DatasetEditController');
 * Just use rrequire('DatasetEditController') instead!
 */
var path = require('path');
var rrequire = function (filename) {
  var absPath = __dirname;
  var projectRoot = process.cwd();
  var projectRelativePath = absPath.replace(projectRoot, '').replace('test', 'app');
  var absSrcPath = path.join(projectRoot, projectRelativePath, filename);
  return require(absSrcPath);
};

module.exports = rrequire;
