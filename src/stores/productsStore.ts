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

export const BASE_URL = "http://localhost:7777";

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

  setProducts(products: IProduct[]) {
    this.products = products;
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

      const data: IProduct[] = await res.json();

      this.setProducts(data);
    } catch (err) {
      this.setError(err instanceof Error ? err.message : "Невідома помилка");
      console.error(err);
    } finally {
      this.setIsLoading(false);
    }
  }

  async deleteProduct(id: number) {
    try {
      this.setIsLoading(true);

      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error(
          "Щось пішло не так 😣... Перевірте поєднання з інтернетом"
        );
      }

      this.setProducts(this.products.filter((product) => product.id !== id));
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
