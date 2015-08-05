(function() {
  'use strict';

  angular
    .module('wemeet')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
