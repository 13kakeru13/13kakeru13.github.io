function addheader(){
  var headerelement = document.getElementById("header");
  headerelement.outerHTML = '<div id="header"><a href="/"><b>うえーい</b></a><a href="/"><b>でゅえーい</b></a><a href="/"><b>ふえーい</b></a><a href="/"><b>ぬうぇーい</b></a></div>';
}
function addfooter(){
  var footerelement = document.getElementById("footer");
  footerelement.outerHTML = '<div id="footer"><div class="footer-list"><ul><li><p>項目</p></li><li><a href="/" target="_parent"><p>あいうえお</p></a></li></ul><ul><li><p>項目</p></li><li><a href="/" target="_parent"><p>あいうえお</p></a></li></ul></div></div>';
}
