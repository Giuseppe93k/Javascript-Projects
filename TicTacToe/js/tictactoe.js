// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win condition.
let selectedSquares = [];

//this function is for placing an x or an o in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already
    // The .some() method is used to check each element of the selectedSqaure array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn is it
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/exno.png")';
            //Active player may only be 'x' or 'o' so, if not 'X' it must be 'O'
        } else {
            // if acrtivePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/lono.png")';
        }
        //squarenumber and activePlayer are concatenated togheter and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // This calls  a function to check for any win condition
        checkWinConditions();
        // This condition is for changing the active player
        if (activePlayer === 'X') {
            //if activePlayer is 'X' change it to 'O'
            activePlayer ='O';
            //if active player is anything other than 'X'
        } else {
            //change the activeplayer to 'X'
            activePlayer = 'X';
        }
        // This function playy placement sound
        audio('./media/bubble.mp3');
        //This condition checks to see if it is computer turn
        if (activePlayer === 'O') {
            //this function disables clicking for computer turn 
            disableClick();
            // This function waits 1 second before the computer places an image and enables click
            setTimeout(function () {computersTurn(); }, 1000);
        }
        // Returning true is needed for our computerTurn() function to work
        return true;
    }
    //This function results in a random square being selected by computer
    function computersTurn() {
        //This boolean is needed for the while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evalueted returns true , the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                // this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawline() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    // X 1, 4, 7 condition 
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    // O 0, 1, 2 condition 
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
    // O 6, 7, 8  condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    // o 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}
    // This condition checks for a tie. If none of the above condition are met and 
    // 9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //This functionm plays the tie game sound
        audio('./media/tie1.mp3');
        //this function sets a .3 seconds timer before the resetgame is called 
        setTimeout(function () {resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. it is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //this 3 variables will be used to check for 3 in a row 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //This 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function
        if ( a === true && b === true && c === true) {return true;}
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents ='none';
    //this makes our body clickable again after 1 second 
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you set as a parameter
//placement sount('./media/place.mp3)
function audio(audioURL) {
    //we create a neew audio subject and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line accesses our HTML canvas element.
    const canvas = document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas
    const c = canvas.getContext("2d");
    //This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        // This line indicates where the start of a lines Y axis is.
        y1 = coordY1,
        // This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        // This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        // this variable store temporary x axis data we update in our animation loop
        x = x1,
        // this variable store temporary y axis data we update in our animation loop
        y = y1;
// This function interacts with the canvas
function animateLineDrawing() {
    //This variable creates a loop
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This method clears content from the last loop iteration
    c.clearRect(0, 0, 608, 608);
    // This method starts a new a path
    c.beginPath();
    //this method moves us to the starting point in our line
    c.moveTo(x1, y1);
    // this method indicates the end point in our line 
    c.lineTo(x, y);
    //this method sets the width of our line
    c.lineWidth = 10;
    //this method set the color of our line
    c.strokeStyle = "rgba(70, 255, 33, .8)";
    //this method draws everything we laid out above
    c.stroke();
    // This condition checks if we've reached the endpoint 
    if (x1 <= x2 && y1 <= y2) {
        //this condition add 10 to the previous end x endpoint
        if (x < x2) { x += 10; }
        // This condition adds 10 to the previous end y endpoint
        if (y < y2) { y += 10; }
        //this is neccesary for the 6, 4 , 2 win condition
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
    }
    // This is necessary for the  6,4,2win condition
    if (x1 <= x2 && y1 >= y2) {
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
    }
}
// This function clears our canvas after our win line is drawn
function clear() {
    //This line starts our animation loop
    const animationLoop = requestAnimationFrame(clear);
    //this line clears our canvas
    c.clearRect(0, 0, 608, 608);
    //this line stops our animation loop
    cancelAnimationFrame(animationLoop);
}
//This line disallows clicking while the win sound is playing
disableClick();
//this line plays the win sound
audio('./media/win1.mp3');
//this line calls the main animation loop
animateLineDrawing();
//This line eaits 1 second. Then clears canvas, rests game and allows clicking again
setTimeout(function () {clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win 
function resetGame() {
    //this for loop itarates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //this variable gets the HTML element i
        let square = document.getElementById(String(i));
        //this removes our elements backgrouonfimage
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}