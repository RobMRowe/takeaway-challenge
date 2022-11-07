class Takeaway {
  constructor(items) {
    this.menu = items;
  }

  all() {
    return this.menu;
  }

  add(itemName) {
    let itemToAdd = this.menu.find(item => item.name === itemName);
    if (itemToAdd.quantity == null) {
      itemToAdd.quantity = 1;
    } else {
      itemToAdd.quantity++;
    }
  }

  remove(itemName) {
    let itemToRemove = this.menu.find(item => item.name === itemName);
    if (itemToRemove.quantity == null || 0) {
      itemToRemove.quantity = 0;
    } else {
      itemToRemove.quantity--;
    }
  }
}
