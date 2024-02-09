
let btn = document.querySelector(".btn");
let result = document.querySelector(".display");
console.log(btn);
let randRollFirst1 = Math.floor(Math.random()*6)+1;
console.log(randRollFirst1);

let randRollFirst2 = Math.floor(Math.random()*6)+1;
console.log(randRollFirst2);

let whoWon =()=>{
    if(randRollFirst1===randRollFirst2)
    {
        result.innerHTML = "Match Draw";
    }
    else if(randRollFirst1>randRollFirst2)
    {
        result.innerHTML = "Player 1 Won!"
    }
    else
    result.innerHTML = "Player 2 Won!"
}

let player1 =()=>{
    

let selectImage1 = "images/dice-"+ randRollFirst1 + ".png";
console.log(selectImage1);
    
    btn.addEventListener("click",()=>{
        document.querySelector(".player1").setAttribute("src",selectImage1);
        whoWon();
       
    });
    
}

let player2 =()=>{
    


let selectImage2 = "images/dice-"+ randRollFirst2 + ".png";
console.log(selectImage2);
    
    btn.addEventListener("click",()=>{
        document.querySelector(".player2").setAttribute("src",selectImage2);
      whoWon();
    });
}


let playGame =()=>{
    player1();
    player2();  
 };


 playGame(); 



