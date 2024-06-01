let randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);
let box = document.querySelector('#container');
let start = document.getElementById('start');
let box2 = document.querySelectorAll('img');
console.log(box2)
let score = 0;
let numberAttempt = 1;
let scoreMenu = document.querySelector('.score');
let x = 0;

let dialog = document.querySelector('.dialog');


scoreMenu.innerHTML = `Ваши очки: ${score} попытка ${numberAttempt}`

//dialog.innerHTML = `???`

//console.log(document.querySelector('#free'))
//document.querySelector('#free').src = 'img/door2.jpg';

// avto 1000
let buttonResult = document.querySelector('#buttonResult');
let result = document.querySelector('.result');


buttonResult.addEventListener('click', ()=>{

    result.innerHTML = `<p>После 1000 попыток, если бы вы поменяли свой первоначальный выбор, вы бы выиграли ${monti()}  раз</p>`
    
})












box.addEventListener('click', e=>{
    console.log('click');
    if(x==0){
        dialog.innerHTML = `Ты мне нравишься, я помогу тебе, открою дверь где нет приза!!!<br>Изменишь ли ты свой выбор??? Нажми на дверь еще раз!`;
        console.log(e.target.dataset.box+randomNumber)
        console.log(document.querySelector('#one').src)
        
        switch (e.target.dataset.box+randomNumber) {
            case '00':
                document.querySelector('#free').src = 'img/door2.jpg'; 
              break;
              case '01':
                document.querySelector('#free').src = 'img/door2.jpg'; 
              break;
              case '02':
                document.querySelector('#two').src = 'img/door2.jpg'; 
              break;
              case '10':
                document.querySelector('#free').src = 'img/door2.jpg'; 
              break;
              case '11':
                document.querySelector('#one').src = 'img/door2.jpg'; 
              break;
              case '12':
                document.querySelector('#one').src = 'img/door2.jpg'; 
              break;
              case '20':
                document.querySelector('#two').src = 'img/door2.jpg'; 
              break;
              case '21':
                document.querySelector('#one').src = 'img/door2.jpg'; 
              break;
              case '22':
                document.querySelector('#one').src = 'img/door2.jpg'; 
              break;
  
            default:
                dialog.innerHTML = `И куда мы жмем?`;
                x=-1

                break;
          }

x++

    }
    else
     if(x==1){
                if(e.target.dataset.box==randomNumber){
            e.target.src='img/door3.jpg';
            score++;
            scoreMenu.innerHTML = `Ваши очки: ${score} попытка ${numberAttempt}`
        }else{e.target.src= 'img/door2.jpg'}
        x++
    }
    else{return false}


    


//перезагрузка страницыwindow.location.reload();
})

start.onclick = () =>{
    for(let i = 0; i < box2.length; i++){
        console.log(box2[i].src = 'img/door1.jpg');

    }
    randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    numberAttempt++;
    scoreMenu.innerHTML = `Ваши очки: ${score} попытка ${numberAttempt}`
    return x = 0;

}



function monti() {
   
    let victory = 0;
    for (let index = 0; index <= 1000; index++) {
        randomNumber = Math.floor(Math.random() * 3);
        randomChoice = Math.floor(Math.random() * 3);
        
        if(randomNumber!==randomChoice){
            victory++

        }
        
    }
    return victory;
    
}

console.log(monti());