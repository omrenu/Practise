
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem("Salsiccia",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"));

    menu.appendChild(createMenuItem("Salsiccia",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"));

    return menu;

}

function createMenuItem(name, description) {

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
    foodImage.alt = `An image of ${name} pizza`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;

}


function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}
export default loadMenu;