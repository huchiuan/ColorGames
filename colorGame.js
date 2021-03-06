
var numberSquares=6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDislpay = document.querySelector("#message");
var h1 =document.querySelector("h1");
var restButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();
function init(){
    // mode button event listeners
    setupModeButtons();
    //set up squares listener
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0;i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numberSquares =3 :numberSquares =6;
            
            // if(this.textContent ==="Easy"){
            //     numberSquares=3;
            // }
            // else{
            //     numberSquares=6;
            // }
            reset();
        });
    }
}

function setupSquares(){
    for(var i =0; i<squares.length;i++){
        //add initiaal colors to squares
        squares[i].style.backgroundColor = colors[i]
        // add click listeners to squares
        squares[i].addEventListener("click",function(){
        //grab color of clicked suquare
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDislpay.textContent="Correct";
            restButton.textContent="Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor= "#232323";
            messageDislpay.textContent="Try Again";
        }
        });
    }
}


function reset(){
    colors = generateRandomColors(numberSquares);

    pickedColor=pickColor();
    //

    colorDisplay.textContent = pickedColor;
    restButton.textContent="New Colors";//可以寫restButton.
    messageDislpay.textContent="";
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.backgroundColor = colors[i];
        }
       else{
           squares[i].style.display= "none";
       }
    }
  h1.style.backgroundColor="steelblue";

}
// easyBtn.addEventListener("click",function(){
// hardBtn.classList.remove("selected");
// easyBtn.classList.add("selected");
// numberSquares=3;
// colors=generateRandomColors(numberSquares);
// pickedColor=pickColor();
// colorDisplay.textContent= pickedColor;
// for(var i=0;i<squares.length;i++){
//    if(colors[i]){
//        squares[i].style.backgroundColor=colors[i];
//    }
//    else{
//        squares[i].style.display ="none";

//    }
// }

// })
// hardBtn.addEventListener("click",function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numberSquares=6;
//     colors=generateRandomColors(numberSquares);
//     pickedColor=pickColor();

//     colorDisplay.textContent= pickedColor;
//     for(var i=0;i<squares.length;i++){

//         squares[i].style.backgroundColor=colors[i];

//         squares[i].style.display ="block";

// }


// })


restButton.addEventListener("click",function(){
    reset();
})


// colorDisplay.textContent= pickedColor ;

function changeColors(color){
    //loop through all squares
    for(var i =0;i<squares.length;i++){
    //change each
    squares[i].style.backgroundColor=color;
    }

}
function pickColor(){
    var random =Math.floor(Math.random() *colors.length );
    return colors[random];
}

function generateRandomColors(num){
// make arrary
var arr =[]
//add num random colors to arr
for(var i=0;i<num;i++){
//get random color and puh into arr
 arr.push(randomColor())
}
//return that array


return arr;

}

function randomColor(){
    // pick a "red" from 0~255
    var r = Math.floor(Math.random()*256);
    //picl a "green" from 0~255
    var g = Math.floor(Math.random()*256);
    // pick a blue
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", "+ g + ", " + b + ")";
}