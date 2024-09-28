import styles from "./Products.module.css";

const Products = () => {
  return (
    <ul className={styles.products}>
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index}>Элемент {index + 1}</li>
      ))}
    </ul>
  );
};

export default Products;
