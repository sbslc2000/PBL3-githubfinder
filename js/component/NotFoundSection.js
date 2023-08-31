
export const NotFoundSection = () => {
    const section = document.createElement('section');
    section.id = 'section-notfound';

    // Create "code" div
    const codeDiv = document.createElement('div');
    codeDiv.id = 'code';
    codeDiv.textContent = '404';

    // Create "notfound" div
    const notFoundDiv = document.createElement('div');
    notFoundDiv.id = 'notfound';
    notFoundDiv.textContent = 'Not Found';

    // Create "message" div
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.textContent = 'The user could not be found on this server!';

    // Append all created elements to the main section
    section.appendChild(codeDiv);
    section.appendChild(notFoundDiv);
    section.appendChild(messageDiv);

    return section;
}
