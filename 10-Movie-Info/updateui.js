class updateUI {
    constructor() {
        this.photo = document.querySelector("#photoInfo");
        this.generalInfo = document.querySelector("#generalInfo");
        this.categoryBtn = document.querySelector(".categoryBtn");
        this.additionalInfo = document.querySelector("#additionalInfo");
    }

    updatePhoto(data) {
        this.photo.innerHTML = ``;
        this.photo.innerHTML = `<img src="${data.Poster}">`;
    }

    updateGI(data) {
        this.generalInfo.innerHTML = ``;
        this.generalInfo.innerHTML = `<h3>${data.Title}</h3> <br>
        <p><i class="fa-solid fa-star" style="color: #dbdf0c;"> ${data.imdbRating} </i> <br> <br></p>
        <div id="categoryBtn">
        <button>${data.Genre.split(",").join("</button><button>")}</button> `
    }


    updateAI(data) {
        this.additionalInfo.innerHTML = ``
        this.additionalInfo.innerHTML = `
            <div id = "plotInfo" >
        <h4>Plot:</h4>
        <p>${data.Plot}</p> <br>
        </div>
        <div id="castInfo">
        <h4>Cast:</h4>
        <p>${data.Actors}</p>
        </div>`
    }
}