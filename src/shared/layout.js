'use strict';
import sidebar from '../content/sidebar/sidebar';
export default angular.module('app.layout', [])
  .directive('contentSidebar', sidebar);
