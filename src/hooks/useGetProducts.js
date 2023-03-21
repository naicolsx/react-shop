import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const respnse = await axios(API);
    setProducts(respnse.data);
  }, []);
  
  return products;
};

export default useGetProducts;
