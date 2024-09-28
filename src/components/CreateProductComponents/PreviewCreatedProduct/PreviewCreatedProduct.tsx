import { observer } from "mobx-react-lite";

import styles from "./PreviewCreatedProduct.module.css";

import { createProductStore } from "@/stores";
import helpers from "@/tools/helpers";

import Product from "@/components/Product";

const PreviewCreatedProduct = observer(() => {
  const product = {
    id: createProductStore.productName.length,
    productName: createProductStore.productName,
    description: createProductStore.description,
    price: helpers.formatNumber(createProductStore.price),
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
