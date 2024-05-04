import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectors } from "../../redux-store";
import { useMemo } from "react";
import { IProductFe } from "../../../../models/client/ProductFe/index";

export const useProductDetailsScene = () => {
  const { productID } = useParams();
  const productsList = useSelector(selectors.getProductsList);
  const product = useMemo(
    () => productsList.find((p) => p.id === productID),
    [productID, productsList],
  );
  return { product };
};
