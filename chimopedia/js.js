function putSidebar() {
  /*サイドバ－取りつけ*/
  var sidebarelement = document.getElementById("sidebarkun");
  sidebarelement.outerHTML =
    '<font size="2" color="#0645ad"><div id="sbmenu"><a href="/chimopedia">メインページあるよ(笑)</a><br><a onclick="randompage()">おまかせ表示</a><br>うんち<br>おしり<br>↑をふくための紙<br>野獣先輩</div><br><font size="2" color="gray" class="さいどの棒のやつ">ヘルプ</font><div id="sbhelp">助けて<br>井戸</div><br><font size="2" color="gray">クレジット</font><div id="sbcredit"><a href="https://furafuramentaiko.github.io/Furafuramentaiko/wiki風自己紹介ページ/">こっからいろいろ借りたべ</a><br><a href="https://github.com/Furafuramentaiko">↑ありがとう</a></div><br><font size="2" color="gray" class="さいどの棒のやつ">他言語版</font><div id="sblanguages"></div></font>';
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

/*おまかせ*/
function randompage(){
  var articles=["口感很筋道"];
  location.href="https://13kakeru13.github.io/chimopedia/a/"+articles[Math.floor(Math.random()*articles.length)]
}
