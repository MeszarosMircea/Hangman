let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let array = [];
window.onload = drawFrame;

function drawFrame() {
    ctx.strokeStyle = "rgba(255, 0, 0)";
    ctx.beginPath();
    ctx.lineCap = "round";
}

function saveWord(wordEntered) {
    let br = document.createElement("br");
    document.body.appendChild(br);  
    array.push(wordEntered);
    for (let i = 0; i < wordEntered.length; ++i) {
        let input = document.createElement("input");
        input.disabled = 1;
        input.id =  wordEntered[i] + i;
        input.size = 1;
        input.style="border-color:gold";
        input.style.color = "gold";
        if (i == 0) {
            input.style.marginLeft = "25px";
        }
        document.body.appendChild(input);
    }
    let inputLetter = document.createElement("input");
    inputLetter.placeholder = "Enter a letter";
    document.body.appendChild(inputLetter);
    inputLetter.id = "letter";
    inputLetter.size = 8;
    inputLetter.maxLength = 1;
    let button = document.createElement("button");
    button.innerHTML = "check";
    button.id = "btn";
    button.setAttribute("class", "btn btn-danger");
    document.body.appendChild(button);
    document.getElementById("btn").onclick = function() {
        checkLetter(document.getElementById("letter").value);
    }
}

let member = 0, guessedLetters = 0;
function checkLetter(letterEntered) {
    letterEntered = letterEntered.toLowerCase();
    if (array[0].indexOf(letterEntered) != -1 && guessedLetters < array[0].length) {
        for (let i = 0; i < array[0].length; ++i) {
            if (array[0][i] == letterEntered) {
                document.getElementById(letterEntered + i).value = letterEntered.toUpperCase();
                ++guessedLetters;
            }
        }
    } else {
        if (member == 0) {
            let warningtext = document.createElement("p");
            warningtext.innerHTML = "Wrong letters: ";
            warningtext.style.color = "red";
            warningtext.style.marginLeft = "25px";
            document.body.appendChild(warningtext);
        }
        let invalidLetter = document.createElement("span");
        invalidLetter.innerHTML = letterEntered.toUpperCase();
        invalidLetter.style.color = "red";
        document.body.appendChild(invalidLetter);
        drawLimbs();
    }
    if (guessedLetters == array[0].length) {
        document.getElementById("output").style.color = "gold";
        document.getElementById("output").style.fontSize = "40px";
        document.getElementById("output").innerHTML = " Congratulations! &#129299;";
        let output = document.getElementById("output");
        output.style.height = "0px";
        output.style.width = "600px";
        member = 13;
    }
}

function drawLimbs() {
    ctx.lineWidth = 7;
    if (member == 0) {
        ctx.beginPath();
        ctx.arc(210, 140, 20, 0, 2 * Math.PI);
    } else if (member == 1) {
        ctx.moveTo(210, 160);
        ctx.lineTo(210, 250);
    } else if (member == 2) {
        ctx.moveTo(210, 250);
        ctx.lineTo(213, 407);
    } else if (member == 3) {
        ctx.moveTo(210, 250);
        ctx.lineTo(200, 400);
    } else if (member == 4) {
        ctx.moveTo(211, 160);
        ctx.lineTo(130, 130);
    } else if (member == 5) {
        ctx.moveTo(211, 160);
        ctx.lineTo(300, 120);
    } else if (member == 6) {
        ctx.beginPath();
        ctx.arc(215, 407, 5, 0, 2 * Math.PI);
    } else if (member == 7) {
        ctx.beginPath();
        ctx.arc(200, 395, 5, 0, 2 * Math.PI);
    } else if (member == 8) {
        ctx.beginPath();
        ctx.arc(300, 120, 4, 0, 2 * Math.PI);
    } else if (member == 9) {
        ctx.beginPath();
        ctx.arc(130, 130, 4, 0, 2 * Math.PI);
    } else if (member == 10) {
        ctx.beginPath();
        ctx.arc(203, 135, 0.3, 0, 2 * Math.PI);
    } else if (member == 11) {
        ctx.beginPath();
        ctx.arc(217, 135, 0.3, 0, 2 * Math.PI);
    } else if (member == 12) {
        ctx.moveTo(209, 143);
        ctx.lineTo(211, 143);
    } else if (member == 13) {
        ctx.beginPath();
        ctx.arc(210, 153, 1, 3, 2 * Math.PI);
        document.getElementById("output").style.color = "gold";
        document.getElementById("output").style.fontSize = "40px";
        document.getElementById("output").innerHTML = " You lose! &#128533;";
        let output = document.getElementById("output");
        output.style.height = "0px";
        output.style.width = "600px";
        guessedLetters += array[0].length + 1;
    } 
    ++member;
    ctx.stroke();
}
