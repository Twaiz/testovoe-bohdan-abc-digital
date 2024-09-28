import { makeAutoObservable } from "mobx";

import productsStore, { BASE_URL } from "./productsStore";

interface INewProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
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

  async createNewProduct(newProduct: INewProduct) {
    try {
      productsStore.setIsLoading(true);

      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(
          "Щось пішло не так 😣... Перевірте поєднання з інтернетом"
        );
      }

      const data: INewProduct = await res.json();

      productsStore.setProducts([...productsStore.products, data]);
    } catch (err) {
      productsStore.setError(
        err instanceof Error ? err.message : "Невідома помилка"
      );
      console.error(err);
    } finally {
      productsStore.setIsLoading(false);
      this.newProduct = null;
      this.setProductName("");
      this.setDescription("");
      this.setPrice("");
      this.setCurrency("");
      this.setQuantity("");
    }
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
