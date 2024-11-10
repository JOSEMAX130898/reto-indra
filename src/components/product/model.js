class Product {
  constructor(id, name, description, price, stock, status, action) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.status = status;
    this.action = action;
  }
}

module.exports = Product;