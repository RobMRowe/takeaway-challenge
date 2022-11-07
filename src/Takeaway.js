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
}
