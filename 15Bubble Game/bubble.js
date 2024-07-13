
function makeBubble(){

    let clutter = "";
    for(let i = 1 ; i<=80 ; i++){
        // clutter = `<div class="bubble">10</div>`;
        // But here things are overwritting , So
        let num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`;

    }
    document.querySelector('#panelBottom').innerHTML = clutter;
}

let timer = 60;
function runTimer(){
    let time = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(time);
        }
    },1000)
}

function hitTimer(){
    let num = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = num;
}


let score = 0;
function scoredisplay(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

makeBubble();
runTimer();
hitTimer();
scoredisplay();

// Now we use event Bubbling , becuse we have many bubbles so we can't make that no. of evenlistener , so we apply evenlistener on their parent , so when we click on that bubble , if eventlistener is not present on this then evenlistener call is goes to it's parent that is "parent bottom";

document.querySelector('#panelBottom').addEventListener('click' , function(details){
    console.log(details.target);
});


