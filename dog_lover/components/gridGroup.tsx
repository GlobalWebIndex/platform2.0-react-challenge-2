import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LeftBox from "./leftBox";
import RightBox from "./rightBox";

const GridGroup: FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        marginTop: "5px",
      }}
    >
      <Grid container spacing={1} direction="row">
        <Grid item xs={6}>
          <LeftBox />
        </Grid>
        <Grid item xs={6}>
          <RightBox />
        </Grid>
      </Grid>
    </Box>
  );
};
export default GridGroup;
