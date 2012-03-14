// http://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
String.prototype.toRovarspraket = function () {
  
  return this.toString().replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)/gi, function(str) {
    return str+'o'+str.toLowerCase();
  });
  
};

String.prototype.fromRovarspraket = function () {
  
  return this.toString().replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)+o+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)/gi, function(str) {
    return str.substr(0, 1);
  });
  
};