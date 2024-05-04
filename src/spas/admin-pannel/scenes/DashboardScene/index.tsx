import React, { memo } from "react";
import { useDashboardScene } from "./index.hooks";
import { Box, Paper, Drawer, Stack, MenuItem } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

type DashboardSceneProps = { navigate };

export const DashboardScene = memo(({}: DashboardSceneProps) => {
  const { navigate } = useDashboardScene();

  return (
    <Stack direction="row">
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <MenuItem onClick={() => navigate("products")}>Products</MenuItem>
        <MenuItem onClick={() => navigate("users")}>Users</MenuItem>
      </Drawer>
      <Outlet />
    </Stack>
  );
});

DashboardScene.displayName = "DashboardScene";
