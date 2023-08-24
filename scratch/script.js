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
