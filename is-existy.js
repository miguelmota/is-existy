(function(root) {

  function isExisty(v) {
    return !(v === null || v === undefined);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isExisty;
    }
    exports.isExisty = isExisty;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isExisty;
    });
  } else {
    root.isExisty = isExisty;
  }

})(this);

