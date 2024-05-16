// countdown timer function
function countdown() {
    //input from user 
    var seconds = document.getElementById("seconds").ariaValueMax;
    // function to perform countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}