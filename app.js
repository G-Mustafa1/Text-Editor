function Clearall(){
   document.getElementById('new-div').innerHTML="";
} 
function Clear(){
   let Clear1 = document.getElementById('new-div')
   let Clear2 = Clear1.slice(0 , -1);
   document.getElementById('new-div').innerHTML=Clear2;
}
let textarea = document.getElementById('new-div')
function fontsize(a){
   let value1 = a.value
   textarea.style.fontSize = value1 + "px";
}
function upercase(){
   if(textarea.style.textTransform =="uppercase"){
      textarea.style.textTransform="none"
   }
   else{
      textarea.style.textTransform="uppercase"
   }
}

function btnbold(){
   if(textarea.style.fontWeight =='bold'){
      textarea.style.fontWeight='normal'
   }
   else{
      textarea.style.fontWeight='bold'
   }
}
function btnitalic(){
   if(textarea.style.fontStyle =='italic'){
      textarea.style.fontStyle ='normal'
   }
   else{
      textarea.style.fontStyle ='italic'
   }
}
function btnUnderline(){
   if(textarea.style.textDecoration =='underline'){
      textarea.style.textDecoration ='none'
   }
   else{
      textarea.style.textDecoration ='underline'
   }
}
function left(){
   textarea.style.textAlign ='left'
}
function center(){
   textarea.style.textAlign ='center'
}
function right(){
   textarea.style.textAlign ='right'
}
function colorchange(a){
   let color = a.value;
   textarea.style.color = color;
}
let fontChanger = document.getElementById("font_family");
fontChanger.addEventListener("input", function() {
   textarea.style.fontFamily = fontChanger.value;
 });