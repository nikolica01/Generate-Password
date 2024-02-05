const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
,"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"
,"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
 "|",":",";","<",">",".","?",
"/"];
const passwordlength=12;
const inputel1=document.getElementById("inputel1")
const inputel2=document.getElementById("inputel2")
function generaterandomchar(){
let randomchar=Math.floor(Math.random()*characters.length)
return characters[randomchar]

}
function generaterandompass(){
  let randompass=""
  for (let i=0;i < passwordlength;i++){
    randompass+=generaterandomchar()
  }
  return randompass
}
const finishrandompass=generaterandompass()
const finishrandompass2=generaterandompass()
function klikni(){
  let inputfield1=inputel1.value
  let inputfield2=inputel2.value
  inputfield1=finishrandompass
  inputfield2=finishrandompass2
}


