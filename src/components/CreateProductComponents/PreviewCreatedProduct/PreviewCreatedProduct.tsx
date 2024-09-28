import { observer } from "mobx-react-lite";

import { createProductStore } from "@/stores";
import styles from "./PreviewCreatedProduct.module.css";

import Product from "@/components/Product";

function formatNumber(num: string) {
  const [integerPart, decimalPart] = num.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );
  return decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart;
}

const PreviewCreatedProduct = observer(() => {
  const product = {
    id: createProductStore.productName.length,
    productName: createProductStore.productName,
    description: createProductStore.description,
    price: formatNumber(createProductStore.price),
    currency: createProductStore.currency,
    quantity: createProductStore.quantity,
    image: "",
  };

  return (
    <div className={styles.previewCreatedProduct}>
      <Product product={product} productType="preview" />
    </div>
  );
});

export default PreviewCreatedProduct;
