
export const ProfileSectionLoader = () => {
    const section = document.createElement('section');
    section.id = 'section-profile';
    section.className = 'section-profile-loader';

    // Create personal-img div and its children
    const personalImgDiv = document.createElement('div');
    personalImgDiv.id = 'personal-img';

    const img = document.createElement('div');

    const button = document.createElement('button');

    personalImgDiv.appendChild(img);
    personalImgDiv.appendChild(button);

    // Create personal-info div, tabs and info-list
    const personalInfoDiv = document.createElement('div');
    personalInfoDiv.id = 'personal-info';

    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'tabs';

    for (let i = 0; i < 4; i++) {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tabsDiv.appendChild(tab);
    }

    const infoList = document.createElement('ul');
    infoList.id = 'info-list';

    for (let i = 0; i < 4; i++) {
        const infoItem = document.createElement('li');
        infoItem.className = 'info';
        infoList.appendChild(infoItem);
    }

    personalInfoDiv.appendChild(tabsDiv);
    personalInfoDiv.appendChild(infoList);

    // Append all the created elements to the main section
    section.appendChild(personalImgDiv);
    section.appendChild(personalInfoDiv);

    return section;
}