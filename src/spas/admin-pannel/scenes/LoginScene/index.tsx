import React, { memo } from "react";
import { useLoginScene } from "./index.hooks";
import { Box, Typography } from "@mui/material";

type LoginSceneProps = {};

export const LoginScene = memo(({}: LoginSceneProps) => {
  const {} = useLoginScene();

  return <Typography>Login</Typography>;
});

LoginScene.displayName = "LoginScene";
