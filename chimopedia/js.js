function putSidebar() {
  /*サイドバ－取りつけ*/
  var sidebarelement = document.getElementById("sidebarkun");
  sidebarelement.outerHTML =
    '<font size="2" color="#0645ad"><div id="sbmenu"><a href="/chimopedia">メインページあるよ(笑)</a><br><a id="sbomakase" href="/chimopedia/omakase.html">おまかせ表示</a><br>うんち<br>おしり<br>↑をふくための紙<br>野獣先輩</div><br><font size="2" color="gray" class="さいどの棒のやつ">ヘルプ</font><div id="sbhelp">助けて<br>井戸</div><br><font size="2" color="gray" class="さいどの棒のやつ">クレジット</font><div id="sbcredit"><a href="https://fruuurf.github.io/Furafuramentaiko/wiki風自己紹介ページ/">こっからいろいろ借りたべ</a><br><a href="https://github.com/fruuurf">↑ありがとう</a></div><br><font size="2" color="gray" class="さいどの棒のやつ">他言語版</font><div id="sblanguages"></div></font>';
}

function titlename(){
  var site = location.href.split('/');
  document.title = decodeURI(site[5]) + " - chimopedia";
}

function otherLanguage(otherlang){
   var sidebarelement = document.getElementById("sblanguages").innerHTML;
   sidebarelement=sidebarelement+"<a href='"+otherlang+".html'>"+otherlang+"</a><br>";
  document.getElementById("sblanguages").innerHTML=sidebarelement;
}
