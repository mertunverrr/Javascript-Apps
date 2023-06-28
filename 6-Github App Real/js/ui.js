class UI {
    constructor() {
        this.profileContentDiv = document.querySelector("#profileContentDiv");
        this.tableContent = document.querySelector("#tableContent");
        this.boolRepo = true;
        this.reposDiv = document.querySelector("#reposDiv")
    }
    addProfileToUI(user) {
        this.tableContent.innerHTML = ""
        this.profileContentDiv.innerHTML = `<div class="col-sm-12 col-md-4 col-lg-4">
        <div id="profileDiv">
            <img id="profileImage" class="mb-3" src="${user.avatar_url}" width="200" height="200" alt="">
            <hr style="border: 1px solid lightgrey; width: 200px;">
            <span>${user.name}</span>
        </div>
    </div>
    <div class="col-sm-12 col-md-8 col-lg-8 mt-2">
        <div id="badgeDiv">
            <button type="button" class="btn btn-primary">
                Takipçi <span class="badge badge-light">${user.followers}</span>
            </button>
            <button type="button" class="btn btn-success">
                Takip Edilen <span class="badge badge-light">${user.following}</span>
            </button>
            <button type="button" class="btn btn-secondary">
                Repolar <span class="badge badge-light">${user.public_repos}</span>
            </button>
        </div>    
        <div class="infoDiv mt-3">
            <div class="info">
                <img src="images/company.png" width="40" height="40" alt="">
                <span>${user.company == null ? "" : user.company}</span>
            </div>
            <div class="info">
                <img src="images/location.png" width="40" height="40" alt="">
                <span>${user.location == null ? "" : user.location}</span>
            </div>
            <div class="info">
                <img src="images/mail.png" width="40" height="40" alt="">
                <span>${user.email == null ? "" : user.email}</span>
            </div>
            <div class="info">
                <a id="showRepo" href="#">Repoları Göster</a>
            </div>
        </div>
    </div>`
    }


    checkMessage() {
        const checkRepoMessage = document.querySelector("#showRepo");
        if (this.boolRepo) {
            checkRepoMessage.textContent = "Repoları Göster"
        } else {
            checkRepoMessage.textContent = "Repoları Gizle"
        }
    }


    showRepos(repos) {
        this.tableContent.innerHTML = "";
        if (this.boolRepo) {
           
            if (repos != null && repos.length > 0) {
                let i = 1
                repos.forEach(repo => {
                    this.tableContent.innerHTML += `<tr>
                <th scope="${i}">1</th>
                <td><a target="_blank" href="${repo.html_url}" style=text-decoration:none;>${repo.name}</a></td>
                <td>${repo.created_at}</td>
            </tr>`
                    i++;
                    

                })
                
            }
            this.boolRepo = false;
                    this.checkMessage();
                    this.reposDiv.style.visibility = "visible";
                    

        } else {
            this.boolRepo = true;
            this.reposDiv.style.visibility = "hidden";
            this.checkMessage();
        }

    }


}



