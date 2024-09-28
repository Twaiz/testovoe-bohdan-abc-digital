import styles from "./CreateProduct.module.css";

import {
  PreviewCreatedProduct,
  FormProduct,
} from "@/components/CreateProductComponents";

const CreateProduct = () => {
  return (
    <div className={styles.createProduct}>
      <PreviewCreatedProduct />
      <FormProduct />
    </div>
  );
};

export default CreateProduct;
