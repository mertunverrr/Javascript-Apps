const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const nextBtn1 = document.querySelector("#nextBtn");
const nextBtn2 = document.querySelector("#nextBtn2");
const backBtn2 = document.querySelector("#backBtn2");
const backBtn3 = document.querySelector("#backBtn3");
const submitBtn = document.querySelector("#submitBtn3");
const progress = document.querySelector("#progress");

nextBtn1.addEventListener("click", ()=>{
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px"
})
backBtn2.addEventListener("click", ()=>{
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px"
})
backBtn3.addEventListener("click", ()=>{
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px"
})
nextBtn2.addEventListener("click", ()=>{
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px"
})