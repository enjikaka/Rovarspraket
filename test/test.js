(function() {
  
  var strings = ['"Nåja", sa herr Blomkvist och noppade med överlägsen min av ett grässtrå', 'Brott lönar sej inte!', 'Mästerdetektiven Blomkvist', 'Oj', 'Hah'],
      el = document.getElementById('test');
  
  function append(el, str) {
    var prev = el.innerHTML;
    
    el.innerHTML = prev+str;
  }
  
  for (var i = strings.length - 1; i >= 0; i--) {
    var status = strings[i] == strings[i].toRovarspraket().fromRovarspraket();
    append(el, '<li class="'+status.toString()+'">'+strings[i]+': '+status.toString()+'</li>');
  }
  
})();