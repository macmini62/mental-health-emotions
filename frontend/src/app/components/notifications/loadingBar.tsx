import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const GradientCircularProgress = () => {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ "svg circle": { stroke: "url(#my_gradient)" } }} />
    </React.Fragment>
  );
}

const LoadingBar = () => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <GradientCircularProgress/>
    </Stack>
  );
}

export default LoadingBar;
