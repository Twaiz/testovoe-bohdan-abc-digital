import { createProductStore } from "@/stores";
import styles from "./FormProduct.module.css";

import Input from "@/ui/Input";
import Button from "@/ui/Button";

const FormProduct = () => {
  const handleSave = () => {};

  return (
    <form className={styles.formProduct}>
      <div className={styles.wrapperInput}>
        <Input
          placeholder="Введіть назву товара"
          name="productName"
          onChange={(value) => createProductStore.setProductName(value)}
        />
        <Input
          placeholder="Введіть опис товара"
          name="description"
          onChange={(value) => createProductStore.setDescription(value)}
        />
        <Input
          type="number"
          placeholder="Введіть ціну товара"
          name="price"
          onChange={(value) => createProductStore.setPrice(value)}
          />
        <Input
          placeholder="Введіть валюту"
          name="currency"
          onChange={(value) => createProductStore.setCurrency(value)}
          />
        <Input
          type="number"
          placeholder="Введіть кількість товару"
          name="quantity"
          onChange={(value) => createProductStore.setQuantity(value)}
        />
      </div>

      <Button
        type="submit"
        onClick={handleSave}
        text="Зберегти"
        buttonStyle="submit"
      />
    </form>
  );
};

export default FormProduct;
