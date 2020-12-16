var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;
/*for(var i = 0; i < modesButton.lenght; i++)
{
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
    });
}*/
 

easyBtn.addEventListener("click",function(){
    numberOfSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"; // hides last three squares
        }
    }
})

hardBtn.addEventListener("click",function(){
    numberOfSquares = 6;
    easyBtn.classList.remove("selected");       
    hardBtn.classList.add("selected");
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; // displays all three squares
    }
})

resetButton.addEventListener("click",function(){
    //generate new color
    colors = generateRandomColors(numberOfSquares);
    //pick new color
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change all colors of square
    for(var i = 0;i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
})

for(var i = 0; i <squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //alert("clicked square!");
        //add color to pickedColor
        var  clickedColor = this.style.backgroundColor;
        console.log(pickedColor , clickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            h1.style.backgroundColor = clickedColor;
            changeColor(clickedColor);
            
            
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColor(color){
    // change all square color to correct color
    //using while loop 
    for(var i=0; i<color.length; i++)
    {
        squares[i].style.backgroundColor = color ;
    }
}
function pickColor(){
    //pick random color usinf math.random
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array 
    var arr = []
    //add num random colors to array 
    for(var i=0; i<num; i++){
        arr.push(randomColor()) 
    }

    // return that array
    return arr;
}

function randomColor(){
    //pick red from 0 to 255
    var red = Math.floor(Math.random()*256);
    //pick blue from 0 to 255
    var green = Math.floor(Math.random()*256);
    //pick green from 0 to 255
    var blue = Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

