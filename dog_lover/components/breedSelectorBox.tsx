import React, { FunctionComponent, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BreedImageGenerator from "./breedImageGenerator";
import Link from "next/link";
import {
  useVariableBreedContext,
  useVariableClickedBreedContext,
  useFunctionHeartContext,
  useFunctionFetchBreedsContext,
} from "../src/breedContext";

export interface DogBreed {
  key: string;
  value: string;
}
export interface ListAllResponse {
  message: {
    [key: string]: string[];
  };
}
export interface ImageResponse {
  message: string;
}
export interface DogBreedImage {
  breed: string;
}

const BreedSelectorBox: FunctionComponent = () => {
  const breeds = useVariableBreedContext();
  const clickedBreed = useVariableClickedBreedContext();
  const handleHeartClicked = useFunctionHeartContext();
  const fetchBreedsList = useFunctionFetchBreedsContext();

  return (
    <Box
      id="breedSelector"
      sx={{
        background: "rgba(121, 100, 252, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "100%",
      }}
    >
      <Button
        id="whoLetTheDogsOut"
        variant="contained"
        sx={{
          border: "1px solid black",
          background: "rgba(121, 100, 252, 0.7)",
          marginBottom: "10px",
        }}
        onClick={fetchBreedsList}
      >
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "Capitalize", color: "#EEEBA6" }}
        >
          Who let the dogs out?
        </Typography>
      </Button>
      <ImageList
        sx={{
          width: 800,
          height: 600,
          transform: "translateZ(0)",
          border: "1px solid black",
          "&::-webkit-scrollbar": {
            width: 11,
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(103, 164, 255, 0.7)",
            borderLeft: "1px solid black",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EEEBA6",
            borderRadius: 1,
          },
        }}
        rowHeight={200}
        gap={1}
      >
        {breeds &&
          breeds.map((breed) => {
            return (
              <ImageListItem key={breed.key} cols={1} rows={2}>
                <img
                  src={breed.value}
                  alt={breed.key}
                  width="100%"
                  height="100%"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    textTransform: "Capitalize",
                  }}
                  title={breed.key}
                  position="top"
                  actionIcon={
                    <Link href="/#randomBreedImage">
                      <IconButton
                        sx={{ color: "white" }}
                        aria-label={`star ${breed.key}`}
                        onClick={handleHeartClicked(breed.key)}
                      >
                        {clickedBreed[breed.key] ? (
                          <FavoriteOutlinedIcon />
                        ) : (
                          <FavoriteBorderOutlinedIcon />
                        )}
                      </IconButton>
                    </Link>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
      </ImageList>
    </Box>
  );
};
export default BreedSelectorBox;

// {
//   isOpened && clickedBreed[breed.key] && (
//     <BreedImageGenerator breed={breed.key} />
//   );
// }
