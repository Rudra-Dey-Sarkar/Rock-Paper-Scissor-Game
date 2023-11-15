let round=document.getElementById("rounds").value;
let h=0,c=0,d=0;

//Human Choose 
document.querySelectorAll(".button").forEach(function (b) {
    b.addEventListener("click", function (e) {
        let value = e.target.id;
        
        //Computer Choose
        let users = ["Rock", "Paper", "Scissor"];
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let comval = users[getRandomInt(users.length)];

        //Comparison
        if(round>0){
            switch (value) {
                case "Rock":
    
                    if (value == "Rock" && comval == "Scissor") {
                        document.querySelector("#screen").value = "Human Wins";
                        console.log("Human Wins");
                        h++;
                        document.querySelector(".human").innerText=h;
                        
                    }
                    else if (value == "Rock" && comval == "Paper") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText=c;
                    }
                    else {
                        document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText=d;
                    }
                    break;
    
                case "Paper":
    
                    if (value == "Paper" && comval == "Rock") {
                        document.querySelector("#screen").value = "Human Wins";
                        console.log("Human Wins");
                        h++;
                        document.querySelector(".human").innerText=h;
                    }
                    else if (value == "Paper" && comval == "Scissor") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText=c;
                    }
                    else {
                        document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText=d;
                    }
                    break;
    
                case "Scissor":
    
                    if (value == "Scissor" && comval == "Paper") {
                        document.querySelector("#screen").value = "Human Wins";
                        console.log("Human Wins");
                        h++;
                        document.querySelector(".human").innerText=h;
                    }
                    else if (value == "Scissor" && comval == "Rock") {
                        document.querySelector("#screen").value = "Computer Wins";
                        console.log("Computer Wins");
                        c++;
                        document.querySelector(".computer").innerText=c;
                    }
                    else {
                        document.querySelector("#screen").value=document.querySelector("#screen").value = "Draw";
                        console.log("Draw");
                        d++;
                        document.querySelector(".draw").innerText=d;
                    }
                    break;
                default:
                    break;
            }
            round--;
        }
        else{
            if(h>c&&(h>=d || h<=d)){
                alert("Human Win");
            }
           else if(c>h&&(c>=d || c<=d)){
                alert("Computer Win");
            }
            else if(h==c){
                alert("draw");
            }     
        }
    })
})



document.querySelector(".reset").addEventListener("click", function () {
    resetall();
})

function resetall(){
    document.querySelector("#screen").value="";
    location.reload();
    console.clear();
}