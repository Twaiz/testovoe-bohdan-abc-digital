import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { productsStore } from "@/stores";
import styles from "./Products.module.css";

import Product from "@/components/Product";

const Products = observer(() => {
  useEffect(() => {
    productsStore.getProducts();
  }, []);

  return (
    <ul className={styles.products}>
      {productsStore.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
});

export default Products;
