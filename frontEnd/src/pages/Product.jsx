import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*products data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*product images*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursot-pointer hover:scale-[120%]"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/*product info*/}
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
