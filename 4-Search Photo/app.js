const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit",search);
    clearButton.addEventListener("click",deleteImageToUI);
    
}

function search(e){
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers : {
            Authorization : "Client-ID d7pEnpyY5G9c00FEEgVWbF4FiREl1ERV_mUmT496CjA"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        dataResults=Array.from(data.results);
        dataResults.forEach((image)=>{
            addImageToUI(image.urls.small);
        })
        
    })
.catch((err)=>console.log(err));

    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height="400"
    img.width="400"

    div.appendChild(img);
    imageListWrapper.appendChild(div);
}

function deleteImageToUI(){
    searchInput.value="";
    /*Array.from(imageListWrapper.children).forEach((child)=>{
        child.remove();
    })*/
    imageListWrapper.innerHTML=""
}