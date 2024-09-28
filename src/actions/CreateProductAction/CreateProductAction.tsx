import { redirect } from "react-router-dom";

import { createProductStore, productsStore } from "@/stores";
import helpers from "@/tools/helpers";

interface INewProduct {
  id: number;
  productName: string;
  description: string;
  price: string;
  currency: string;
  quantity: string;
  image: string;
}

const CreateProductAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as {
    [key: string]: string;
  };

  const existingIds = productsStore.products.map((product) => product.id);
  const maxId = Math.max(...existingIds);
  const newId = maxId + 1;

  const newProduct: INewProduct = {
    id: newId,
    productName: data.productName,
    description: data.description,
    price: helpers.formatNumber(data.price),
    currency: data.currency,
    quantity: data.quantity,
    image: data.image,
  };

  await createProductStore.createNewProduct(newProduct);

  return redirect("/products");
};

export default CreateProductAction;
