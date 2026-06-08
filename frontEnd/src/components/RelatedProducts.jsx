import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let copyProducts = products.slice();
      copyProducts = copyProducts.filter((item) => item.category === category);
      copyProducts = copyProducts.filter((item) => item.subCategory === subCategory);

      setRelated(copyProducts.slice(5, 10));
      console.log(copyProducts.slice(5, 10));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Tittle text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
