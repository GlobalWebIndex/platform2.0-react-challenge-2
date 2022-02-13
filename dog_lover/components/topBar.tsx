import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const TopBar: FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "#EEEBA6",
          boxShadow: "none",
          width: "100%",
          borderRadius: "30px",
          padding: "10px",
        }}
      >
        <Grid container direction="row" spacing={0.2}>
          <Grid item xs={0.3} />
          <Grid item xs={1.5}>
            <Box
              sx={{
                backgroundColor: "#67A4FF",
                boxShadow: "none",
                borderRadius: "30px",
                padding: "5px",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                align="center"
                noWrap
                sx={{
                  flexGrow: 1,
                  color: "#EEEBA6",
                  display: { xs: "none", md: "block" },
                }}
              >
                DogLover
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                align="center"
                noWrap
                sx={{
                  flexGrow: 1,
                  color: "#EEEBA6",
                  display: { xs: "block", md: "none" },
                }}
              >
                DL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7} />
          <Grid item xs>
            <Grid container direction="row" spacing={0.3}>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#67A4FF",
                    padding: "7px",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Random Dog Alert
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#67A4FF",
                    padding: "7px",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Breed Selector
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  disabled
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#67A4FF",
                    padding: "7px",
                    "&:hover": {
                      backgroundColor: "#7964FC",
                      boxShadow: "none",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
                  >
                    Breed photo truck
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default TopBar;
