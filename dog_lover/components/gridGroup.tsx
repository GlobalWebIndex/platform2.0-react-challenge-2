import React, { FunctionComponent, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DogGenerator from "./dogGeneratorBox";
import BreedSelectorBox from "./breedSelectorBox";
import BreedImageGenerator from "./breedImageGenerator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  useVariableBreedContext,
  useVariableClickedBreedContext,
  useVariableOpenContext,
} from "../src/breedContext";

const GridGroup: FunctionComponent = () => {
  const clickedBreed = useVariableClickedBreedContext();
  const isOpened = useVariableOpenContext();
  const breeds = useVariableBreedContext();
  
  const [_document, set_document] = useState([]);

  useEffect(() => set_document(document), []);

  return (
    <Router>
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
          <Grid item lg="auto" xl={7.5} />
          <Grid item md="auto" xl={3.5}>
            {breeds &&
              breeds.map((breed) => {
                isOpened && clickedBreed[breed.key] && (
                  <Route
                    path={"/#randomBreedImage"}
                    element={<BreedImageGenerator breed={breed.key} />}
                  />
                );
              })}
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
};
export default GridGroup;

