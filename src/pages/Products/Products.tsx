import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { productsStore } from "@/stores";
import styles from "./Products.module.css";

import Product from "@/components/Product";

interface IProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
}

const Products = observer(() => {
  useEffect(() => {
    productsStore.getProducts();
  }, []);

  return (
    <ul className={styles.products}>
      {productsStore.products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
});

export default Products;
