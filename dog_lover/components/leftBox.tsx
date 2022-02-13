import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const LeftBox: FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#67A4FF",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
      }}
    >
      <Grid container direction="column" rowSpacing={5}>
        <Grid item xs={11}>
          <Box
            sx={{
              backgroundColor: "#7964FC",
              padding: "8px",
              borderRadius: "30px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#EEEBA6",
              }}
            >
              In need of some serotonin boost?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#EEEBA6",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#EEEBA6",
                fontWeight: "600",
              }}
            >
              You are in the right place.
            </Typography>
            {<br />}Start navigating the DogLover app by clicking{<br />}at the
            light blue buttons in the upper right corner.
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#EEEBA6",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#EEEBA6",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Tip:
            </Typography>{" "}
            Try choosing your favourite breed and{<br />}then you will see the
            purple button come to life!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LeftBox;
