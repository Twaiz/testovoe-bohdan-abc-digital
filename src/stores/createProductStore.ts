import { makeAutoObservable } from "mobx";

interface INewProduct {
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
}

class CreateProductStore {
  newProduct: INewProduct | null;

  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;

  constructor() {
    this.newProduct = null;
    this.productName = "";
    this.description = "";
    this.price = "";
    this.currency = "";
    this.quantity = "";

    makeAutoObservable(this);
  }

  setProductName(productName: string) {
    this.productName = productName;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setPrice(price: string) {
    this.price = price;
  }

  setCurrency(currency: string) {
    this.currency = currency;
  }

  setQuantity(quantity: string) {
    this.quantity = quantity;
  }
}

const createProductStore = new CreateProductStore();
export default createProductStore;
