let count = 00;
let awaycount = 00;
const HomeScore = document.getElementById("home-score");
const AwayScore = document.getElementById("away-score");
const saveEl = document.getElementById("save-el");
 const homeTeam = document.getElementById("homey").innerText;
const awayTeam = document.getElementById("awayh1").innerText;
const winningMessage = document.getElementById("winning")



function addOne () {
    count = count + 1;
    document.getElementById("home-score").innerText = count;
    
}

function addTwo () {
    count = count + 2;
    document.getElementById("home-score").innerText = count;
    
}

function addThree () {
    count += 3;
    document.getElementById("home-score").innerText = count;
    
}

function addOneToAway() {
    awaycount += 1;
    AwayScore.innerText = awaycount;
}
function addTwoToAway() {
    awaycount += 2;
    AwayScore.innerText = awaycount;
}
function addThreeToAway() {
    awaycount += 3;
    AwayScore.innerText = awaycount;
}

function winning() {
    
    for (AwayScore; i < HomeScore; AwayScore++) {
        if (i < HomeScore) {
            return winningMessage.innerText = "yaay we are wiining";
        }
    }
    
}
console.log(winning());

function checkScores () {
    saveEl.innerText = homeTeam + " " + count + " - " + awayTeam +" "+  awaycount;
    winning();
   
}

function newGame () {
    HomeScore.textContent = 00;
    AwayScore.textContent = 00;
    count = 0;
    awaycount = 0;
    saveEl.textContent = homeTeam + " " + count + " - " + awayTeam +" "+  awaycount;
}
// Add who is winning 


