let pDiv = document.getElementById("p-div");
let imgDiv = document.getElementById("img-div");
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");

function addP() {
    imgDiv.style.display = "none"
    pDiv.style.display = "block"
    let newP = document.createElement("p")
    newP.innerText = "I am a paragraph that will persist!"
    pDiv.appendChild(newP)
}

function addImg() {
    pDiv.style.display = "none"
    imgDiv.style.display = "block"
    let newImg = document.createElement("img")
    newImg.src = "stick.jpeg"
    newImg.style.width = "200px"
    imgDiv.appendChild(newImg)
}

pButton.addEventListener("click", addP)
imgButton.addEventListener("click", addImg)