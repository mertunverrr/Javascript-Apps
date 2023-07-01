const searchForm = document.querySelector("#searchInput");
const searchName = document.querySelector("#searchValue");


const api = new Api;
const ui = new updateUI;

runEvents();

function runEvents() {
    searchForm.addEventListener("submit", getInfo)
}

function getInfo(e) {
    let name = searchName.value;
    api.getInfo(name)
        .then((data) => {
            if(data.Title == undefined){
                alert("Geçerli bir film adı giriniz")
            }else{
                ui.updatePhoto(data);
                ui.updateGI(data);
                ui.updateAI(data);
            }
            
        })
        .catch((err) => {
            console.log(err);
        })

    e.preventDefault();
}

