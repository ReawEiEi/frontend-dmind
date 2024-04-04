import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 100 / 12
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <CircularProgress
        determinate
        size="lg"
        value={progress > 100 ? 100 : progress}
        variant="soft"
      />
      <Box
        sx={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(progress > 100 ? 100 : progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
