function power(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = Math.pow(num1, num2);
    document.getElementById("result").textContent = `Result: ${result}`;
}

function squareRoot(){
    const num1 = document.getElementById("num1").value;
    const num1Result = Math.sqrt(num1);
    const num2 = document.getElementById("num2").value;
    const num2Result = Math.sqrt(num2);
    document.getElementById("result").textContent = `Number 1 : ${num1Result} Number 2 : ${num2Result}`
}

function round(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `${Math.round(num1)}  ${Math.round(num2)}`
}

function ceiling(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `${Math.ceil(num1)}  ${Math.ceil(num2)}`
}

function floor(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `${Math.floor(num1)}  ${Math.floor(num2)}`
}

function absolute(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `${Math.abs(num1)}  ${Math.abs(num2)}`
}

function sincos(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const rad1 = num1 * Math.PI /180;
    const rad2 = num2 * Math.PI /180;
    document.getElementById("result").textContent = `sin number 1: ${Math.sin(rad1).toFixed(4)} number 2 ${Math.sin(rad2).toFixed(4)} cos number 1: ${Math.cos(rad1).toFixed(4)} number 2 ${Math.cos(rad2).toFixed(4)}`
}

function minmax(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `Maximum : ${Math.max(num1,num2)} Minimum : ${Math.min(num1,num2)}`
}

function random(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    document.getElementById("result").textContent = `Random: ${Math.floor(Math.random() * (Math.abs(num1 - num2) + 1)) + Math.min(num1, num2)}`
}

//Strings

function lengthStr(){
    const s = document.getElementById("string").value;
    document.getElementById("strResult").textContent = s.length
}

function getString(){
    return document.getElementById("string").value;
}

function firstLast(){
    const s = getString();
    const w = document.getElementById("operations").value;
    const first = s.indexOf(w);
    const last = s.lastIndexOf(w);
    document.getElementById("strResult").textContent = first + " " + last
}   

function searchStr(){
    const s = getString();
    const w = document.getElementById("operations").value;
    document.getElementById("strResult").textContent = s.search(w)
}

function slice(){
    const s = getString();
    const start = document.getElementById("box1").value;
    const end = document.getElementById("box2").value;
    document.getElementById("strResult").textContent = s.slice(start,end)
}

function substring(){
    const s = getString();
    const start = document.getElementById("box1").value;
    const end = document.getElementById("box2").value;
    document.getElementById("strResult").textContent = s.substring(start,end)
}

function substr(){
    const s = getString();
    const start = document.getElementById("box1").value;
    const length = document.getElementById("box3").value;
    document.getElementById("strResult").textContent = s.substr(start, length)
}

function replaceWord(){
    const s = getString();
    const w = document.getElementById("operations").value;
    const r = document.getElementById("replacement").value;
    document.getElementById("strResult").textContent = s.replaceAll(w, r)
}

function upper(){
    document.getElementById("strResult").textContent = getString().toUpperCase()
}

function lower(){
    document.getElementById("strResult").textContent = getString().toLowerCase()
}