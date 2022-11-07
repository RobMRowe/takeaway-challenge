class Takeaway {
  constructor(items) {
    this.menu = items;
  }

  all() {
    return this.menu;
  }

  add(itemName, quantity) {
    let itemToAdd = this.menu.find(item => item.name === itemName);
    itemToAdd.quantity = itemToAdd.quantity + quantity || quantity;
  }

  remove(itemName, quantity) {
    let itemToRemove = this.menu.find(item => item.name === itemName);
    itemToRemove.quantity = itemToRemove.quantity == null ? 0 : itemToRemove.quantity - quantity;
    itemToRemove.quantity = itemToRemove.quantity < 0 ? 0 : itemToRemove.quantity;
  }

  printMenu() {
    for (let i = 0; i < takeaway.menu.length; i++) {
      let menuItemContainer = document.createElement("div");
      menuItemContainer.setAttribute('class', "menu-item");
      menuItemContainer.setAttribute('style', "width: 240px; height: 200px; border: thin black solid; background: white; display: flex; flex-direction: column; align-items: center; justify-content: space-around;");
      let menuItemHeading = document.createElement("h2");
      menuItemHeading.innerHTML = takeaway.menu[i].name;
      menuItemHeading.setAttribute('style', "text-align: center; max-width: 220px; height: 70px;");
      menuItemContainer.appendChild(menuItemHeading);
      let menuItemDetailsContainer = document.createElement("div");
      menuItemDetailsContainer.setAttribute('class', "menu-item-details");
      menuItemDetailsContainer.setAttribute('style', "width: 220px; height: 80px; display: flex; justify-content: space-between; align-items: center; max-width: 220px;");
      let menuItemDetails = document.createElement("p");
      menuItemDetails.innerHTML = takeaway.menu[i].details;
      menuItemDetailsContainer.appendChild(menuItemDetails);
      menuItemContainer.appendChild(menuItemDetailsContainer);
      let menuItemPrice = document.createElement("p");
      menuItemPrice.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(takeaway.menu[i].price);
      menuItemDetailsContainer.appendChild(menuItemPrice);
      menuContainer.appendChild(menuItemContainer);
    }
  }
}
