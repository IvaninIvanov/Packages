var _ = require('underscore');
function range(arr){
  return _.max(arr) - _.min(arr);
}
module.exports.range = range;
