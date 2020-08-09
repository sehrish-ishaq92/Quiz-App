function submit(){
    var score = 0;
   
//     var div = document.createElement("div")
// div.style.color = "red"

//     div.innerHTML = submit()
//     document.body.appendChild(div)

    var q1A = document.getElementById("q1-a")
    var q1B = document.getElementById("q1-b")
    var q1C = document.getElementById("q1-c")
    var q1D = document.getElementById("q1-d")

    if(q1D.checked==true){
        console.log("Q1 " + '<br> Answer Correct'  )
        score++
    }

    var q2A = document.getElementById("q2-a")
    var q2B = document.getElementById("q2-b")
    var q2C = document.getElementById("q2-c")
    var q2D = document.getElementById("q2-d")

    if(q2B.checked==true){
       console.log("Q2  " + '<br> Answer Correct'  )
        score++
    }

    var q3A = document.getElementById("q3-a")
    var q3B = document.getElementById("q3-b")
    var q3C = document.getElementById("q3-c")
    var q3D = document.getElementById("q3-d")

    if(q3D.checked==true){

        score++
    }

    var q4A = document.getElementById("q4-a")
    var q4B = document.getElementById("q4-b")
    var q4C = document.getElementById("q4-c")
    var q4D = document.getElementById("q4-d")

    if(q4D.checked==true){
      
        score++
    }

    var q5A = document.getElementById("q5-a")
    var q5B = document.getElementById("q5-b")
    var q5C = document.getElementById("q5-c")
    var q5D = document.getElementById("q5-d")

if(q5A.checked==true){

    score++
}
document.write("<h1>Result</h1>")

var total = 5;
var obt;
obt = score;
var per =(obt*100)/total;


document.write("Your Score = " + score)

document.write("<br> Your Percentage = " + per + "%")


}