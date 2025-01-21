

const cards = document.querySelectorAll('.skill');
const p = document.querySelector('.textCont p');
let plus;
plus = ((document.body.clientWidth) - 1000)/2.5

setInterval(()=>{gradient(p)},700);

for(let i =0;i<cards.length;i++,plus+=250){
    if(i %2 == 0){
        cards[i].style.left = plus +'px';
    }else{
        cards[i].style.left = plus +'px';
        cards[i].style.top = '800px';
    }
}
function rndNum(min,max){
 return Math.random() * (max - min) + min;
}

function gradient(lnk){
 lnk.style.color = `rgb(${rndNum(1,200)},${rndNum(1,200)},${rndNum(1,200)})`
}
