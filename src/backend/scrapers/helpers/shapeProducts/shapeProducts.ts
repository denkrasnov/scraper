import { ShapedProducts, RawProducts } from "../../types";

const shapeProducts = (products: RawProducts): ShapedProducts | {} => {
  const shapedProducts = products.flat().reduce((acc, product) => {
    return product.name in acc
      ? {
          ...acc,
          [`${product.name}`]: [...acc[`${product.name}`], ...product.items]
        }
      : { ...acc, [product.name]: product.items };
  }, {});

  return shapedProducts;
};

export default shapeProducts;
