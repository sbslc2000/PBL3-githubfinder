import {getUserByUsername, GithubAPI} from "./github/github.js";
import {ProfileSection} from "./component/ProfileSection.js";
import {ProfileSectionLoader} from "./component/ProfileSectionLoader";
import {NotFoundSection} from "./component/NotFoundSection";
import {LatestReposSection} from "./component/LatestReposSection";

const githubApi = GithubAPI.getInstance();

const showContent = (...components) => {
    let content = document.getElementById("content");
    content.innerHTML = "";

    for(let component of components) {
        content.appendChild(component);
    }
}

const search = (e) => {
    e.preventDefault();

    let input = document.getElementById("username");

    githubApi.getUser(input?.value).then((userInfo) => {
        showContent(ProfileSection(userInfo.user), LatestReposSection(userInfo.latestRepos));
    }).catch((error) => {
        console.log(error);
        showContent(NotFoundSection());
    });

    showContent(ProfileSectionLoader())
}

const addSearchButtonSubmitHandler = () => {
    let searchForm = document.getElementById("search");
    searchForm.addEventListener("submit",search);
}

const init = () => {
    addSearchButtonSubmitHandler();
}

init();