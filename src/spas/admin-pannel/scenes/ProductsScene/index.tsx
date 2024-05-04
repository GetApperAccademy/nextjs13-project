import React, { memo } from "react";
import { useProductsScene } from "./index.hooks";
import { Typography, Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AddProductForm } from "@/components/AddProductForm";

type ProductsSceneProps = {};

export const ProductsScene = memo(({}: ProductsSceneProps) => {
  const { handleNewProduct, columns, rows, showAddProductForm } =
    useProductsScene();
  console.log(showAddProductForm);

  return (
    <Stack
      sx={{
        p: 2,
        width: "100%",
        height: "100vh",
      }}
      spacing={1}
    >
      <Stack direction="row" justifyContent={"flex-end"}>
        <Button variant="contained" onClick={handleNewProduct}>
          {showAddProductForm ? "Chiudi" : "Aggiungi"} prodotto
        </Button>
      </Stack>
      {showAddProductForm && <AddProductForm />}
      <DataGrid sx={{ flex: 1 }} rows={rows} columns={columns} />
    </Stack>
  );
});

ProductsScene.displayName = "ProductsScene";
