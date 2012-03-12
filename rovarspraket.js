// http://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
String.prototype.toRovarspraket = function () {
  "use strict";
  var constants = { b: true, c: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true, m: true, n: true, p: true, q: true, r: true, s: true, t: true, v: true, w: true, x: true, z: true },
    str = this.toString().replace('x', 'ks').replace('X', 'Ks').replace('c', 'k').replace('C', 'K'),
    str_arr = str.split(''),
    sostotror = '',
    i,
    character;
  
  for (i = 0; i < str_arr.length; i++) {
    character = str_arr[i];
    sostotror += constants[character.toLowerCase()] ? character + 'o' + character.toLowerCase() : character;
  }
  
  return sostotror;
};