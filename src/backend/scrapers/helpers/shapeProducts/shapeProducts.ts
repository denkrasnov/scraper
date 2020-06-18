import { ShapedProducts, RawProducts, ObjectType } from "../../types";

const shapeProducts = (products: RawProducts): ShapedProducts | ObjectType => {
  const shapedProducts = products.flat().reduce<ObjectType>((acc, product) => {
    const { name, items } = product;
    return name in acc
      ? {
          ...acc,
          [name]: [...acc[name], ...items]
        }
      : { ...acc, [name]: items };
  }, {});

  return shapedProducts;
};

export default shapeProducts;
