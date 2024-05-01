import React, { memo } from "react";
import { useDashboardScene } from "./index.hooks";
import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

type DashboardSceneProps = {};

export const DashboardScene = memo(({}: DashboardSceneProps) => {
  const {} = useDashboardScene();

  return (
    <Box
      sx={{
        p: 10,
        bgcolor: "primary.main",
      }}
    >
      Dashboard:
      <Paper>
        Sottoroute:
        <Outlet></Outlet>
      </Paper>
    </Box>
  );
});

DashboardScene.displayName = "DashboardScene";
