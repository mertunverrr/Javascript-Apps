const form = document.querySelector("#searchForm");
const githubName = document.querySelector("#githubName");
const profileContent = document.querySelector("profileContentDiv");



const githubApi = new Github;
const updateUI = new UI;

runEvents();

function runEvents() {
    form.addEventListener("submit", getInfo);

}


function getInfo(e) {
    const username = githubName.value.trim();
    if (username == null || username == "") {
        alert("Lütfen geçerli bir kullanıcı ismi giriniz.")
    } else {
        githubApi.getGithubData(username)
            .then((response) => {
                if (response.user.followers === undefined) {
                    alert("Yanlış kullanıcı adı girdiniz");
                } else {

                    updateUI.addProfileToUI(response.user);
                    document.querySelector("#showRepo").addEventListener("click", () => updateUI.showRepos(response.repo));

                }
            })
            .catch((err) => console.log(err));
    }

    e.preventDefault();
}

function repoUI(e) {




    e.preventDefault();
}
