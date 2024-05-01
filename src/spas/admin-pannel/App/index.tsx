import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import { DashboardScene, LoginScene } from "../scenes";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/admin-pannel">
        <Routes>
          <Route path="/login" element={<LoginScene />} />
          <Route path="/dashboard" element={<DashboardScene />}>
            <Route
              path="users"
              element={
                <span>
                  Users
                  <Outlet />
                </span>
              }
            >
              <Route path="about" element={<span>About</span>} />
              <Route path="contact" element={<span>Contacts</span>} />
              <Route path="*" element={<span>All</span>} />
            </Route>
            <Route path="post" element={<span>post</span>} />
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
