const upperkey="QWERTYUIOPASDFGHJKLZXCVBNM"
const downcasse="qwertyuiopasdfghjklzxcvbnm"
const number="123456789"
const symbol="!@#$%^&*><"
const inputel1=document.getElementById("inputel1")
let passwordlength=12;
let all=upperkey + downcasse + number + symbol

const inputel2=document.getElementById("inputel2")
function klikni(){
    let randompass=""
    let randompass2=""
    randompass+=upperkey[Math.floor(Math.random()*upperkey.length)]
    randompass+=downcasse[Math.floor(Math.random()*downcasse.length)]
    randompass+=number[Math.floor(Math.random()*number.length)]
    randompass+=symbol[Math.floor(Math.random()*symbol.length)]
    while(passwordlength > randompass.length){
        randompass+=all[Math.floor(Math.random()*all.length)];
     randompass2+=all[Math.floor(Math.random()*all.length)];
    }
    inputel1.value=randompass
    inputel2.value=randompass2
}