import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProductFe } from "@/models/client/ProductFe";
import { useDispatch } from "react-redux";
import { actions } from "@/spas/admin-pannel/redux-store";

const schema = yup.object({
  id: yup.string().required(),
  name: yup.string().required("Error message"),
  description: yup.string().required(),
  price: yup.number().required(),
});

type AddProductFormData = IProductFe;

export const useAddProductForm = () => {
  const dispatch = useDispatch();
  const formData = useForm<AddProductFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      price: 0,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
    reset,
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.addProduct(data));
        reset({
          id: "",
          name: "",
          description: "",
          price: 0,
        });
      }),
    [handleSubmit, dispatch, reset],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
