let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function excusaAleatoria(){
    function excusaAleatoria1(){
        let numeroAleatorio = Math.floor(Math.random() * who.length);
        if (numeroAleatorio === 0){
            return(who[0]);
        } else if (numeroAleatorio === 1){
            return(who[1]);
        } else if (numeroAleatorio === 2){
            return(who[2]);
        } else {
            return(who[3]);
        }
    }
    function excusaAleatoria2(){
        let numeroAleatorio = Math.floor(Math.random() * action.length);
        if (numeroAleatorio === 0){
            return(action[0]);
        } else if (numeroAleatorio === 1){
            return(action[1]);
        } else if (numeroAleatorio === 2){
            return(action[2]);
        } else {
            return(action[3]);
        }
    }
    function excusaAleatoria3(){
        let numeroAleatorio = Math.floor(Math.random() * what.length);
        if (numeroAleatorio === 0){
            return(what[0]);
        } else if (numeroAleatorio === 1){
            return(what[1]);
        } else {
            return(what[2]);
        } 
    }
    function excusaAleatoria4(){
        let numeroAleatorio = Math.floor(Math.random() * when.length);
        if (numeroAleatorio === 0){
            return(when[0]);
        } else if (numeroAleatorio === 1){
            return(when[1]);
        } else if (numeroAleatorio === 2){
            return(when[2]);
        } else if (numeroAleatorio === 3){
            return(when[3]);
        } else {
            return(when[4]);
        }
    }
    return excusaAleatoria1() + " " + excusaAleatoria2() + " " + excusaAleatoria3() + " " + excusaAleatoria4();
}

window.onload = function(){
    document.getElementById("excuse").innerHTML = excusaAleatoria();
}