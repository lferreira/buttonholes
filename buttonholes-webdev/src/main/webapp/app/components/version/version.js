'use strict';

angular.module('suitApp.version', [
  'suitApp.version.interpolate-filter',
  'suitApp.version.version-directive'
])

.value('version', '0.1');
