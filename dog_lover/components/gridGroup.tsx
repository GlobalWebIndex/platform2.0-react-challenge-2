import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DogGenerator from "./dogGeneratorBox";
import RightBox from "./rightBox";


const GridGroup: FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        marginTop: "5px",
      }}
    >
      <Grid container spacing={10} direction="row">
        <Grid item xs={5} md={7.5} />
        <Grid item xs={7} md={3.5}>
          <DogGenerator />
        </Grid>
        <Grid item md={1} />
        <Grid item xs={10}>
          <RightBox />
        </Grid>
      </Grid>
    </Box>
  );
};
export default GridGroup;
