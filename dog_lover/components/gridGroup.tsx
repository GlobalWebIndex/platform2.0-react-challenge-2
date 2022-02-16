import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DogGenerator from "./dogGeneratorBox";
import BreedSelectorBox from "./breedSelectorBox";

const GridGroup: FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        marginTop: "5px",
      }}
    >
      <Grid container spacing={10} direction="row">
        <Grid item lg="auto" xl={7.5} />
        <Grid item md="auto" xl={3.5}>
          <DogGenerator />
        </Grid>
        <Grid item lg={1} />
        <Grid item md="auto">
          <BreedSelectorBox />
        </Grid>
      </Grid>
    </Box>
  );
};
export default GridGroup;
