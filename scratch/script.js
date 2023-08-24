//ヘッダー追加
document.getElementById("header").innerHTML =
    '<h3><a id="myaccount" href="https://scratch.mit.edu">Scratch</a></h3><h3><a href="/aboutme.html">さちｍｋについて</a></h3><h3><a href="/scratch/diary">日記</a></h3><h3><a href="/scratch/link">相互リンク</a></h3>';


//ユザネが入るところを自分のユザネに置き換える
var myname="SatimK_w2";
document.getElementById("myaccount").outerHTML='<a id="myaccount" href="https://scratch.mit.edu/users/'+myname+'/">Scratch</a>';
var mns=document.querySelectorAll(".usn");
for(let i=0;i<mns.length;i++){
    mns[i].textContent=myname;
}


//広告のプログラム
function reloadad() {
  var projectlist = ["710055697/embed?fps=29", "705386223/embed?fps=26"];
  var commentlist = [
    "不登校の頃に作った作品です。<br> 作品作りをやめても他にすることが無かったので作品作りが捗りました() <br> 制作時間4時間ぐらい？ これが僕の(宣伝などをあまりしていない) 作品の中でいちばん評価されてます()",
    "不登校の頃に作った作品です。 <br> 作品作りをやめても他にすることが無かったので作品作りが捗りました() <br> 制作時間4時間ぐらい？ なぜか伸びないシリーズです()",
  ];
  // まず宣伝したいもののリストとコメントのリストを作る
  var randomnum = Math.floor(Math.random() * projectlist.length);
  // ランダムな数字を決める
  var prInfo = projectlist[randomnum];
  // 宣伝したいプロジェクトの一部を取得
  var showed_prCode =
    ' <iframe src="https://turbowarp.org/' +
    prInfo +
    '" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen> </iframe>';
  // 表示させる内容を決める
  document.getElementById("advertisedproject").innerHTML = showed_prCode;
  // 作品を表示

  document.getElementById("withcomment").innerHTML =
    " <p style='font-size:0.6em;'> " + commentlist[randomnum] + " </p>";
  //コメントを表示
}
reloadad();
