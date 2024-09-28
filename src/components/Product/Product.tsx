import { FaEllipsisV } from "react-icons/fa";

import styles from "./Product.module.css";

const Product = () => {
  return (
    <li className={styles.product}>
      <img
        src="https://img.jabko.ua/image/cache/catalog/products/2022/06/062308/macbook-air-starlight-gallery1-2-1397x1397.jpg.webp"
        alt="oppo a58"
        className={styles.product__image}
      />

      <div className={styles.wrapper}>
        <div className={styles.productInfo}>
          <h2 className={styles.productInfo__name}>Oppo A58</h2>
          <p className={styles.productInfo__description}>
            8-core processor, 8GB RAM, 128GB
          </p>
        </div>

        <div className={styles.productDetails}>
          <span className={styles.productDetails__price}>7.800 ГРН</span>
          <span className={styles.productDetails__quantity}>1</span>
        </div>

        <button type="button" className={styles.product__button}>
          <FaEllipsisV />
        </button>
      </div>
    </li>
  );
};

export default Product;
