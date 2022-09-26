potato_EL = document.querySelector("#potato");
potato_num_EL = document.querySelector("#potatoes_num");
hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");

console.log(potato_num_EL);

potato = 0;
hands = 0;

function potato_click(){
    potato++;
}
function buy_hand(){
    if (potato > 50){
        hands++;
        potato -= 50;
    }
    
}

potato_EL.addEventListener("click", potato_click); // når vi klikker på cookie
hand_EL.addEventListener("click", buy_hand)

var timer = setInterval(myTimer, 10); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    potato += hands;
    potato_num_EL.innerHTML = potato;
    
}