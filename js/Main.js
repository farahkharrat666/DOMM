function Bold(){
console.log (document.querySelectorAll(div,p))
console.log(documenet.getElementById("texto"));
var ban=document.getElementById("texto").style.fontWeight;
if(ban==normal){
    document.getElementById("texto").style.fontWeight = "bold";
}
else{
    document.getElementById("texto").style.fontWeight ="normal";
}
}
function Italic(){
    console.log(document.querySelectorAll(div,p))
    var ban=document.getElementById("texto").style.fontWeight;
if(ban==normal){
    document.getElementById("texto").style.fontWeight ="Italic"
}
else{
    document.getElementById("texto").style.fontWeight="normal";
}
}
function underline(){
    under=document.getElementById(div,p);
    if(under.style.textDecoration=="underline"){
        under.style.textDecoration="none"
    }
    else{
        under.style.textDecoration="underline";
    }
}
function lien(){
   var teststyle=document.getElementById("styloo").selectOption[0].text;
   var span=document.getElementById("texto");
   if(teststyle.fontFamily == "TimesNewRoman"){
       span.fontFamily="TimesNewRoman"
   }
   if(teststyle.fontFamily =="cursive"){
       span.fontFamily="cursive";
   }
   if(teststyle.fontFamily="Georgia"){
       span.fontFamily="Georgia";
   }
}
function taille(){
   var  testsize=documenet.getElementById("size").selectOption[0].text;
    var spin=documenet.getElementById("texto");
    if(testsize.fontSize="10"){
        spin.fontSize == "10";
    }
    if(testsize.fontSize="20"){
        spin.fontSize="20"
    }
    if(testsize.fontSize="40"){
        spin.fontSize="40";
    
    }
    if(testsize.fontSize="60"){
        spin.fontSize="60";
    }


    }

