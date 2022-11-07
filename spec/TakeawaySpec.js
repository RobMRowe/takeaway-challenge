describe('Takeaway', function () {
  let takeaway;

  beforeEach(function () {
    takeaway = new Takeaway([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5 }]);
  });

  it('should display all available dishes, with prices', function () {
    expect(takeaway.all()).toEqual([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5 }]);
  });

  describe('when dish has been selected', function () {
    it('should be possible to increase the quantity of the dish in the order', function () {
      takeaway.add("Haggis Toastie", 2);
      expect(takeaway.all()).toEqual([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5, quantity: 2 }]);
      takeaway.add("Beans on Toast", 1);
      expect(takeaway.all()).toEqual([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5, quantity: 1 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5, quantity: 2 }]);
    });

    it('should be possible to decrease the quantity of the dish in the order, with a minimum of 0', function () {
      takeaway.add("Haggis Toastie", 2);
      takeaway.remove("Haggis Toastie", 1);
      expect(takeaway.all()).toEqual([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5, quantity: 1 }]);
      takeaway.remove("Beans on Toast", 2);
      expect(takeaway.all()).toEqual([{ name: "Beans on Toast", details: "Family favourite!", price: 2.5, quantity: 0 }, { name: "Haggis Toastie", details: "A cheeky twist on this classic.", price: 12.5, quantity: 1 }]);
    });
  });
});
