import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import {
  DashboardScene,
  LoginScene,
  ProductDetailsScene,
  ProductsScene,
  UsersScene,
} from "../scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/admin-pannel">
        <Routes>
          <Route path="/login" element={<LoginScene />} />
          <Route path="/dashboard" element={<DashboardScene />}>
            <Route path="products" element={<ProductsScene />}></Route>
            <Route
              path="products/:productID"
              element={<ProductDetailsScene />}
            ></Route>
            <Route path="users" element={<UsersScene />}></Route>
          </Route>
          <Route path="/" element={<span>TEST</span>} />
        </Routes>
      </BrowserRouter>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default memo(App);
