// http://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
String.prototype.toRovarspraket = function () {
  
  var consonants = { b: true, c: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true, m: true, n: true, p: true, q: true, r: true, s: true, t: true, v: true, w: true, x: true, z: true },
      str = this.toString().replace('x', 'ks').replace('X', 'Ks'),
      str_arr = str.split(''),
      sostotror = '',
      i,
      character;
  
  for (i = 0; i < str_arr.length; i++) {
    character = str_arr[i];
    sostotror += consonants[character.toLowerCase()] ? character + 'o' + character.toLowerCase() : character;
  }
  
  return sostotror;
};

String.prototype.fromRovarspraket = function () {
  
  return this.toString().replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)+o+(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z)/gi, function(str) {
    return str.substr(0, 1);
  });
  
};