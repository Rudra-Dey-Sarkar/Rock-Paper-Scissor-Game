let round = document.getElementById("rounds").value;
let h = 0, c = 0, d = 0;

document.querySelectorAll(".button").forEach(function (b) {
    b.addEventListener("click", function (e) { 
        let value = e.target.id;
        document.querySelector("#screen").value = "";
        document.getElementById("screen2").style.display="none";
        document.getElementById("screen3").style.display="none";
        document.getElementById("loading1").style.display="inline-flex";
        document.getElementById("loading2").style.display="inline-flex";
        setTimeout(function(){
            document.getElementById("screen2").style.display="";
            document.getElementById("screen3").style.display="";
            document.getElementById("loading1").style.display="none";
            document.getElementById("loading2").style.display="none";
            //Comparison
        if (round > 0) {
            //You Choose 
            if (value == "Rock") {
                document.querySelector("#screen2").src = "fist.png";
            }
            else if (value == "Paper") {
                document.querySelector("#screen2").src = "hand-paper.png";
            }
            else {
                document.querySelector("#screen2").src = "scissors.png";
            }
            //Computer Choose
                let users = ["Rock", "Paper", "Scissor"];
                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                }
            
                let comval = users[getRandomInt(users.length)];
            
                if (comval == "Rock") {
                    document.querySelector("#screen3").src = "fist.png";
                }
                else if (comval == "Paper") {
                    document.querySelector("#screen3").src = "hand-paper.png";
                }
                else {
                    document.querySelector("#screen3").src = "scissors.png";
                }
            

            switch (value) {
                case "Rock":

                    if (value == "Rock" && comval == "Scissor") {
                        document.querySelector("#screen").value = "You Wins";
                        console.log("You Wins");
                        h++;
                        document.querySelector(".You").innerText = h;

                    }
                    else if (value == "Rock" && comval == "Paper") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText = c;
                    }
                    else {
                        document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText = d;
                    }
                    break;

                case "Paper":

                    if (value == "Paper" && comval == "Rock") {
                        document.querySelector("#screen").value = "You Wins";
                        console.log("You Wins");
                        h++;
                        document.querySelector(".You").innerText = h;
                    }
                    else if (value == "Paper" && comval == "Scissor") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText = c;
                    }
                    else {
                        document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText = d;
                    }
                    break;

                case "Scissor":

                    if (value == "Scissor" && comval == "Paper") {
                        document.querySelector("#screen").value = "You Wins";
                        console.log("You Wins");
                        h++;
                        document.querySelector(".You").innerText = h;
                    }
                    else if (value == "Scissor" && comval == "Rock") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText = c;
                    }
                    else {
                        document.querySelector("#screen").value = document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText = d;
                    }
                    break;
                default:
                    break;
            }
            round--;
        }
    
        checkwinner();
    },1500);
    })

})


document.querySelector(".reset").addEventListener("click", function () {
    resetall();
})

function resetall() {
    document.querySelector("#screen").value = "";
    document.querySelector("#screen2").src = "";
    document.querySelector("#screen3").src = "";
    location.reload();
    console.clear();
}

function resetdrop() {
    round = document.getElementById("rounds").value;
    console.log(round);
    h = 0, c = 0, d = 0;

    document.querySelector(".You").innerText = 0;
    document.querySelector(".computer").innerText = 0;
    document.querySelector(".draw").innerText = 0;

    document.querySelector("#screen").value = "";
    document.querySelector("#screen2").src = "";
    document.querySelector("#screen3").src = "";
}


function checkwinner() {
    if (round == 0) {
        if (h > c && (h >= d || h <= d)) {
            setTimeout(function(){
                alert("You Win");
            },25)
        }
        else if (c > h && (c >= d || c <= d)) {
            setTimeout(function(){
                alert("Computer Win");
            },25)
            
        }
        else if (h == c) {
            setTimeout(function(){
                alert("Draw");
            },25)
        }
    }
}
