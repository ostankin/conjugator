export function getBySelector(structure, selector, allowStructures) {
  var result = structure;
  if (typeof structure == 'undefined')
    return undefined;
  if (typeof selector == 'undefined' || selector.length == 0)
    return undefined;
  selector.forEach(function(s){
    var selectedValue = result[s];
    var defaultValue = result['default'];
    if (typeof defaultValue != 'undefined') {
        result = defaultValue;
    }
    if (typeof selectedValue != 'undefined') {
      result = selectedValue;
    }
  });
  if (result == structure) {
    return undefined;
  }
  if (!allowStructures) {
    while (Object.prototype.toString.call(result) === '[object Object]') {
      result = getBySelector(result, ['default']);
    }
  }
  return result;
}
