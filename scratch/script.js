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
    var prdatalist=[
        ["710055697/embed?fps=29","僕の(宣伝などをあまりしていない) 作品の中でいちばん評価されてます"],
        ["705386223/embed?fps=26","なぜか伸びないシリーズです"]
    ];
    var randomnum = Math.floor(Math.random() * prdatalist.length);
    var showed_prCode =
    '<iframe src="https://turbowarp.org/'+prdatalist[randomnum][0]+'" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    document.getElementById("advertisedproject").innerHTML=showed_prCode;
    document.getElementById("withcomment").innerHTML="<p style='font-size:0.6em;'>"+prdatalist[randomnum][1]+"</p>";
}
reloadad();

function adhyoji(){
    if(document.getElementById("adsp").style.display=="none"){
        document.getElementById("adsp").style.display="block";
    }else{
        document.getElementById("adsp").style.display="none";
    }
}
