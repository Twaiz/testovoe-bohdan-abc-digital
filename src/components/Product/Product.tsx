import { FaEllipsisV } from "react-icons/fa";

import styles from "./Product.module.css";

type ProductType = "basic" | "preview";

interface IProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
}

interface IProductProps {
  product: IProduct;
  productType?: ProductType;
}

const Product = (props: IProductProps) => {
  const { product, productType = "basic" } = props;
  const { productName, description, price, currency, quantity, image } =
    product;

  return (
    <li
      className={`${styles.product} ${
        productType === "preview" ? styles.productPreview : ""
      }`}
    >
      {image.length > 0 ? (
        <img src={image} alt={productName} className={styles.product__image} />
      ) : (
        <div className={styles.product__emptyImage} />
      )}

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

        {productType !== "preview" && (
          <button type="button" className={styles.product__button}>
            <FaEllipsisV />
          </button>
        )}
      </div>
    </li>
  );
};

export default Product;
