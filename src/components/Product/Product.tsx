import { FaEllipsisV } from "react-icons/fa";

import styles from "./Product.module.css";

interface IProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
}

const Product = ({ product }: { product: IProduct }) => {
  const { productName, description, price, currency, quantity, image } =
    product;

  return (
    <li className={styles.product}>
      <img src={image} alt={productName} className={styles.product__image} />

      <div className={styles.wrapper}>
        <div className={styles.productInfo}>
          <h2 className={styles.productInfo__name}>{productName}</h2>
          <p className={styles.productInfo__description}>{description}</p>
        </div>

        <div className={styles.productDetails}>
          <span className={styles.productDetails__price}>
            {price} {currency}
          </span>
          <span className={styles.productDetails__quantity}>{quantity}</span>
        </div>

        <button type="button" className={styles.product__button}>
          <FaEllipsisV />
        </button>
      </div>
    </li>
  );
};

export default Product;
