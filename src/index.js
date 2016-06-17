import angular from 'angular'
import { dtaDragDirective } from './dta-drag.directive'
import { dtaDropDirective } from './dta-drop.directive'

export default angular.module('dtaDragAndDrop', [])
  .directive('dtaDrag', dtaDragDirective)
  .directive('dtaDrop', dtaDropDirective)
  .name
