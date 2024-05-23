import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { actions, selectors } from "../../redux-store";

export const useProductDetailsScene = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectors.getCurrentProduct);
  const isLoadingProduct = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.getProductsByProductId.api),
  );

  useEffect(() => {
    dispatch(actions.getProductsByProductId.request({ productId }));
  }, [dispatch, productId]);

  return { product, isLoadingProduct };
};
