score = 0;
scoreIncrease = 1;
function increaseScore() {
    score += scoreIncrease;
    document.getElementById("scoreCount").innerHTML = "var score = " + score + ";";
}