
export const ProfileSection = (user) => {
    // Create <section> element
    const section = document.createElement('section');
    section.id = 'section-profile';

    // Create personal image div
    const personalImgDiv = document.createElement('div');
    personalImgDiv.id = 'personal-img';

    const img = document.createElement('img');
    img.src = user.avatar_url;
    img.alt = "profile image";

    const button = document.createElement('button');
    button.textContent = "View Profile";
    button.addEventListener("click",() => {
        document.location.href = user.html_url;
    })

    personalImgDiv.appendChild(img);
    personalImgDiv.appendChild(button);

    // Create personal info div
    const personalInfoDiv = document.createElement('div');
    personalInfoDiv.id = 'personal-info';

    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'tabs';

    const tabName = ["Public Repos","Public Gists", "Followers", "Followings"];
    const tabValue = [user.public_repos, user.public_gists, user.followers, user.following]


    for (let i in tabName) {
        const tabDiv = document.createElement('div');
        tabDiv.className = 'tab';
        tabDiv.innerHTML = `${tabName[i]}: <span>${tabValue[i]}</span>`;
        tabsDiv.appendChild(tabDiv);
    }

    const infoList = document.createElement('ul');
    infoList.id = 'info-list';

    const infoName = ["Company", "Website", "Location", "Member Since"];
    const infoValue = [user.company, user.blog, user.location, user.created_at.split('T')[0]];
    for (let i in infoName) {
        const li = document.createElement('li');
        li.className = 'info';
        if(infoName[i] === "Website") {
            li.innerHTML = `${infoName[i]}: <span><a href='${infoValue[i]}'>${infoValue[i]}</a></span>`;
        } else {
            console.log("here");
            li.innerHTML = `${infoName[i]}: <span>${infoValue[i]}</span>`;
        }

        infoList.appendChild(li);
    }

    personalInfoDiv.appendChild(tabsDiv);
    personalInfoDiv.appendChild(infoList);

    // Append to section
    section.appendChild(personalImgDiv);
    section.appendChild(personalInfoDiv);

    return section;
}
