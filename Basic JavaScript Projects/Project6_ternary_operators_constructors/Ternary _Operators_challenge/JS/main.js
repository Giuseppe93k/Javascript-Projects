function Vote_Function() {
    var Age, Vote;
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("x").innerHTML = Vote;
}