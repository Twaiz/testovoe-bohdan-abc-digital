import styles from "./Products.module.css";

import Product from "@/components/Product";

const Products = () => {
  return (
    <ul className={styles.products}>
      {Array.from({ length: 10 }, (_, index) => (
        <Product key={index} />
      ))}
    </ul>
  );
};

export default Products;
