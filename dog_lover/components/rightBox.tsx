import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const RightBox: FunctionComponent = () => {
  return (
    <Box
      sx={{
        background: "rgba(121, 100, 252, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "100%",
      }}
    ></Box>
  );
};
export default RightBox;

