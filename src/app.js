const menuContainer = document.getElementById('menu-container');

let takeaway = new Takeaway([
  { name: "Beans on Toast", details: "Family favourite!", price: 2.5 },
  { name: "Haggis Toastie", details: "A cheeky twist on this classic", price: 12.5 },
  { name: "Battered Chip Butty", details: "Carbception", price: 6.95 },
  { name: "Lobster Roll", details: "Why not Zoidberg?!", price: 17.5 },
  { name: "Anything else bread based", details: "You get a roll with it", price: 9.99 },
  { name: "Everlasting Gobstopper", details: "You gotta take your time", price: 50 }
]);

takeaway.printMenu();
