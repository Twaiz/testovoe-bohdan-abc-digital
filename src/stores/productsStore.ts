import { makeAutoObservable } from "mobx";

interface IProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
}

const BASE_URL = "http://localhost:7777";

class ProductsStore {
  products: IProduct[];
  isLoading: boolean;
  error: string | null;

  constructor() {
    this.products = [];
    this.isLoading = false;
    this.error = null;

    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async getProducts() {
    try {
      this.setIsLoading(true);
      this.setError(null);

      const res = await fetch(`${BASE_URL}/products`);
      if (!res.ok) {
        throw new Error(
          "Щось пішло не так 😣... Перевірте поєднання з інтернетом"
        );
      }

      const data = await res.json();

      if (!data.products || !Array.isArray(data.products)) {
        throw new Error("Дані не в правильному форматі");
      }

      this.products = data.products;
    } catch (err) {
      this.setError(err instanceof Error ? err.message : "Невідома помилка");
      console.error(err);
    } finally {
      this.setIsLoading(false);
    }
  }
}

const productsStore = new ProductsStore();
export default productsStore;
