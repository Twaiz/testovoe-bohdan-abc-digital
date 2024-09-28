import Product from "@/components/Product";
import styles from "./PreviewCreatedProduct.module.css";

const product = {
  id: 1,
  productName: "Oppo A58",
  description: "asdasdasdadsasd",
  price: "7.500",
  currency: "ГРН",
  quantity: "2",
  image:
    "https://img.jabko.ua/image/cache/catalog/products/2022/06/062308/macbook-air-starlight-gallery1-2-1397x1397.jpg.webp",
};

const PreviewCreatedProduct = () => {
  return (
    <div className={styles.previewCreatedProduct}>
      <Product product={product} productType="preview" />
    </div>
  );
};

export default PreviewCreatedProduct;
