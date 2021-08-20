
// while the page is loaded dafault mode of game  is hard
var numColors = 6
// while loading the function will automatically generate random colors
var colors = generateRandomColors(numColors
    );


// [
//     "rgb(255, 0, 0)",     //RED
//     "rgb(255, 255, 0)",   //YELLOW
//     "rgb(0, 255, 0)",     //GREEN
//     "rgb(0, 255, 255)",   //CYAN
//     "rgb(0, 0, 255)",     //BLUE
//     "rgb(255, 0, 255)"    //MAGENTA
// ]
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var hardBtn = document.querySelector(".hardBtn");
var easyBtn = document.querySelector(".easyBtn");
var reset = document.querySelector(".reset");
var h1 = document.querySelector("h1");


var pickedColor = pickColor(numColors);
colorDisplay.textContent = pickedColor;

// resetButton Click event
reset.addEventListener("click", function () {
    colors = generateRandomColors(numColors
        );
    pickedColor = pickColor(numColors);
    for(var i=0; i<squares.length; i++){
       squares[i].style.backgroundColor = colors[i] ;
    }
    this.textContent = "New Colors";
    message.textContent = "";
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "rgb(142, 242, 150)"
})
// easy button click event
easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numColors = 3;
    colors = generateRandomColors(numColors);
    pickedColor = pickColor(numColors);
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";

        }

    }
    // disable the button after one click otherwise it will act as reset button
    this.setAttribute("disabled","disabled");
    // enable other mode button by removing the disable attribute
    hardBtn.removeAttribute("disabled");
 
})
// hardbutton click event
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    
    easyBtn.classList.remove("selected");
    numColors = 6;
    colors = generateRandomColors(numColors);
    pickedColor = pickColor(numColors);
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

  

    }
    this.setAttribute("disabled","disabled");
    easyBtn.removeAttribute("disabled");
})






for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            message.textContent = "Correct";
            message.style.color = "rgb(0,200,0)";
            message.style.fontSize = "24px";
            h1.style.backgroundColor = this.style.backgroundColor;
           changeColors(pickedColor);
           reset.textContent = "Play Again!"
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
            message.style.color = "orange";
            message.style.fontSize = "24px";

        }

    })
}


function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = color
}
}

function pickColor(num){
    return colors[Math.floor(Math.random()*num)];

}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}