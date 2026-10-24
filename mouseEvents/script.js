const image = document.getElementById("image")
const heading = document.getElementById("heading")
const oldHeading = heading.textContent

function changeImageAndText(){
    image.src = "miles-morales.jpg"
    heading.textContent = "Now drag back"
}

function reset(){
    image.src = "spider-man.jpg"
    heading.textContent = oldHeading
}

image.addEventListener("mouseover",changeImageAndText)
image.addEventListener("mouseleave",reset)