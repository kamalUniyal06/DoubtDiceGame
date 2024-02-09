
let btn = document.querySelector(".btn");
console.log(btn);


let player1 =()=>{

    let randRollFirst1 = Math.floor(Math.random()*6)+1;
console.log(randRollFirst1);

let selectImage1 = "images/dice-"+ randRollFirst1 + ".png";
console.log(selectImage1);
    
    btn.addEventListener("click",()=>{
        document.querySelector(".player1").setAttribute("src",selectImage1);
    });
    
}

let player2 =()=>{
    

let randRollFirst2 = Math.floor(Math.random()*6)+1;
console.log(randRollFirst2);

let selectImage2 = "images/dice-"+ randRollFirst2 + ".png";
console.log(selectImage2);
    
    btn.addEventListener("click",()=>{
        document.querySelector(".player2").setAttribute("src",selectImage2);
    });
}


let playGame =()=>{
    player1();
    player2();  
 };


 playGame(); 



