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
      menuItemContainer.classList.add("menu-item");
      let menuItemHeading = document.createElement("h2");
      menuItemHeading.innerHTML = takeaway.menu[i].name;
      let menuItemDetailsContainer = document.createElement("div");
      menuItemDetailsContainer.classList.add("menu-item-details-container");
      let menuItemDetails = document.createElement("p");
      menuItemDetails.classList.add("menu-item-details");
      menuItemDetails.innerHTML = takeaway.menu[i].details;
      let menuItemPrice = document.createElement("p");
      menuItemPrice.classList.add("menu-item-price");
      menuItemPrice.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(takeaway.menu[i].price);
      menuItemContainer.appendChild(menuItemHeading);
      menuItemDetailsContainer.appendChild(menuItemDetails);
      menuItemDetailsContainer.appendChild(menuItemPrice);
      menuItemContainer.appendChild(menuItemDetailsContainer);
      menuContainer.appendChild(menuItemContainer);
    }
  }
}
