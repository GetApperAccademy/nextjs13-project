import { GridColDef } from "@mui/x-data-grid";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

export const useProductsScene = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector(selectors.getProductsList);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const handleDeleteProduct = useCallback(
    (productID: string) => {
      dispatch(actions.deleteProduct(productID));
    },
    [dispatch],
  );
  const columns = useMemo<
    GridColDef<{
      id: string;
      name: string;
      description: string;
      price: number;
    }>[]
  >(
    () => [
      {
        field: "id",
      },
      {
        field: "name",
        flex: 1,
      },
      {
        field: "description",
        flex: 2,
      },
      {
        field: "price",
      },
      {
        field: "delete",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => handleDeleteProduct(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
      {
        field: "details",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => navigate(params.row.id)}>
              <VisibilityIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleDeleteProduct, navigate],
  );

  const handleNewProduct = useCallback(() => {
    setShowAddProductForm((prev) => !prev);
  }, []);
  return { handleNewProduct, rows: productsList, columns, showAddProductForm };
};
