function arabyah(arby){
    var text=arby.replaceAll('\u0644\u0627','\ufefb');
    var scripts=["\u0627","\u0628","\u0629","\u062a","\u062b","\u062c","\u062d",
                 "\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634",
                 "\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641",
                 "\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648",
                 "\u0649","\u064a","\ufefb","\u0640","\u0624"]
    var forms=[
        ["\ufe8d","\ufe8e","\ufe8e","\ufe8d"],
        ["\ufe8f","\ufe90","\ufe92","\ufe91"],
        ["\ufe93","\ufe94","\ufe93","\ufe93"],
        ["\ufe95","\ufe96","\ufe98","\ufe97"],
        ["\ufe99","\ufe9a","\ufe9c","\ufe9b"],
        ["\ufe9d","\ufe9e","\ufea0","\ufe9f"],
        ["\ufea1","\ufea2","\ufea4","\ufea3"],
        ["\ufea5","\ufea6","\ufea8","\ufea7"],
        ["\ufea9","\ufeaa","\ufeaa","\ufea9"],
        ["\ufeab","\ufeac","\ufeac","\ufeab"],
        ["\ufead","\ufeae","\ufeae","\ufead"],
        ["\ufeaf","\ufeb0","\ufeb0","\ufeaf"],
        ["\ufeb1","\ufeb2","\ufeb4","\ufeb3"],
        ["\ufeb5","\ufeb6","\ufeb8","\ufeb7"],
        ["\ufeb9","\ufeba","\ufebc","\ufebb"],
        ["\ufebd","\ufebe","\ufec0","\ufebf"],
        ["\ufec1","\ufec2","\ufec4","\ufec3"],
        ["\ufec5","\ufec6","\ufec8","\ufec7"],
        ["\ufec9","\ufeca","\ufecc","\ufecb"],
        ["\ufecd","\ufece","\ufed0","\ufecf"],
        ["\ufed1","\ufed2","\ufed4","\ufed3"],
        ["\ufed5","\ufed6","\ufed8","\ufed7"],
        ["\ufed9","\ufeda","\ufedc","\ufedb"],
        ["\ufedd","\ufede","\ufee0","\ufedf"],
        ["\ufee1","\ufee2","\ufee4","\ufee3"],
        ["\ufee5","\ufee6","\ufee8","\ufee7"],
        ["\ufee9","\ufeea","\ufeec","\ufeeb"],
        ["\ufeed","\ufeee","\ufeee","\ufeed"],
        ["\ufeef","\ufef0","\ufbe9","\ufeef"],
        ["\ufef1","\ufef2","\ufef4","\ufef3"],
        ["\ufefb","\ufefc","\ufefc","\ufefb"],
        ["\u0640","\u0640","\u0640","\u0640"],
        ["\ufe85","\ufe86","\ufe86","\ufe85"]
        ];
    var shuten="ذداﻻؤرةوز";
    var result="";
    var y=0;
    var v;
    for(let i=text.length;i>=0;i--){
        if(!scripts.includes(text.charAt(i-1))&&!scripts.includes(text.charAt(i+1))){
            y=0;/*前後がアラビア文字じゃない場合*/
        }
        if(scripts.includes(text.charAt(i-1))){
            y=1;/*前がアラビア文字の場合*/
        }
        if(scripts.includes(text.charAt(i+1))){
            y=3;/*後ろがアラビア文字の場合*/
        }
        if((scripts.includes(text.charAt(i-1)))&&(scripts.includes(text.charAt(i+1)))){
            y=2;/*前後がアラビア文字の場合*/
        }
        if(scripts.includes(text.charAt(i+1))&&shuten.includes(text.charAt(i-1))){
            y=3;/*前後がアラビア文字で前が終点文字の場合*/
        }
        if(!scripts.includes(text.charAt(i+1))&&shuten.includes(text.charAt(i-1))){
            y=0;/*前が終点文字で後ろがない場合*/
        }
        if(shuten.includes(text.charAt(i+1))&&shuten.includes(text.charAt(i-1))&&shuten.includes(text.charAt(i))){
            y=0;/*前後と自分自身が終点文字の場合*/
        }
        if(scripts.includes(text.charAt(i))){
            v=forms[scripts.indexOf(text.charAt(i))][y];
        }else{
            v=text.charAt(i);
        }
        result+=v;
    }
    return(result);
}
