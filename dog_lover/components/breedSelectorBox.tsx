import React, { FunctionComponent, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { NextRouter, useRouter } from "next/router";

interface DogBreed {
  key: string;
  value: string;
}

interface ListAllResponse {
  message: {
    [key: string]: string[];
  };
}

interface ImageResponse {
  message: string;
}

const BreedSelectorBox: FunctionComponent = () => {
  const [breeds, setBreeds] = useState<DogBreed[]>([]);
  const router: NextRouter = useRouter();

  const fetchBreedsList = async () => {
    // fetch all breeds. Axios requests can be typed for the response
    const {
      data: { message: allBreeds },
    } = await axios.get<ListAllResponse>("https://dog.ceo/api/breeds/list/all");

    // extract keys from the ListAllResponse.message
    const keys = Object.keys(allBreeds);

    // resolve images and create DogBreed objects
    const dogBreeds = await Promise.all(
      keys.map(async (key) => {
        const {
          data: { message: value },
        } = await axios.get<ImageResponse>(
          `https://dog.ceo/api/breed/${encodeURIComponent(key)}/images/random`
        );
        return { key, value };
      })
    );

    setBreeds(dogBreeds);
    console.log(dogBreeds);
  };

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
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${breed.key}`}
                      onClick={() => router.push("/#contactBox")}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
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
