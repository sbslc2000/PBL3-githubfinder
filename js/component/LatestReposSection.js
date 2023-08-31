function Repo(repo) {
    const li = document.createElement('li');
    li.className = 'latest-repo';

    const a = document.createElement('a');
    a.href = repo.html_url;
    const spanForA = document.createElement('span');
    spanForA.innerHTML = repo.name;
    a.appendChild(spanForA);
    li.appendChild(a);

    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'tabs';

    const tabName = ['Stars', 'Watchers', 'Forks'];
    const tabValue = [repo.stargazers_count, repo.watchers_count,repo.forks_count];

    for(let i in tabName) {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = `${tabName[i]}: `;
        const spanForTab = document.createElement('span');
        spanForTab.innerHTML = tabValue[i];
        tab.appendChild(spanForTab);
        tabsDiv.appendChild(tab);
    }

    li.appendChild(tabsDiv);
    return li;
}
export const LatestReposSection = (repos) => {
    const section = document.createElement('section');
    section.id = 'section-latest-repos';

    // Create section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    sectionHeader.textContent = 'Latest Repos';
    section.appendChild(sectionHeader);

    if(repos.length === 0) {
        let div = document.createElement('div');
        div.innerHTML = "There is no repos...";
        section.appendChild(div);
        return section;
    }

    // Create ul for repos
    const ul = document.createElement('ul');

    // Create and append 3 repo lis
    for(let repo of repos) {
        ul.appendChild(Repo(repo));
    }

    section.appendChild(ul);
    return section;
}