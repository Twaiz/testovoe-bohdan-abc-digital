import Input from "@/ui/Input";

import styles from "./FormProduct.module.css";
import Button from "@/ui/Button";

const FormProduct = () => {
  const handleSave = () => {};

  return (
    <form className={styles.formProduct}>
      <div className={styles.wrapperInput}>
        <Input placeholder="Введіть назву товара" name="productName" />
        <Input placeholder="Введіть опис товара" name="description" />
        <Input placeholder="Введіть ціну товара" name="price" />
        <Input placeholder="Введіть валюту" name="currency" />
        <Input placeholder="Введіть кількість товару" name="quantity" />
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
