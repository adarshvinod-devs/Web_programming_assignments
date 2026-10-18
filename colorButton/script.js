const button = document.getElementById("button")

function colorChange(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

}

button.addEventListener("click",colorChange)