function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}
function createHome() {
    const home = document.createElement('div');

    const chefImage = document.createElement("img");
    chefImage.src = "images/about-image.jpg";
    chefImage.alt = "An image of chef";

    home.appendChild(createParagraph("Best pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 1908"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));
    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}
export default loadHome;