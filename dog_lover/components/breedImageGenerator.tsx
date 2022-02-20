import React, { FunctionComponent, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios, { AxiosResponse } from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";

interface ImageResponse {
  message: string;
}
interface ImageProps {
  breed: string;
}
const BreedImageGenerator: FunctionComponent<ImageProps[]> = ({ breed }) => {
  const [randomImages, setRandomImage] = useState<ImageResponse[]>([]);

  useEffect(() => {
    const fetchRandomImages = async () => {
      const res: AxiosResponse = await axios.get<ImageResponse[]>(
        `https://dog.ceo/api/breed/${breed}/images/random/4`
      );
      setRandomImage(res.data.message);
    };
    fetchRandomImages();
  }, []);

  return (
    <Box
      id="randomBreedImage"
      // data-aos="fade-up"
      // data-aos-anchor="#welcomeMsg"
      // data-aos-anchor-placement="top-top"
      sx={{
        background: "rgba(103, 164, 255, 0.7)",
        border: "1px solid black",
        padding: "20px",
        width: "100%",
        borderRadius: "30px",
        height: "100%",
      }}
    >
      <Box>
        <ImageList
          sx={{
            width: 500,
            height: 500,
            border: "1px solid black",
            "&::-webkit-scrollbar": {
              width: 11,
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(103, 164, 255, 0.7)",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#EEEBA6",
              borderRadius: 1,
            },
          }}
        >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              component="div"
              sx={{
                color: "#EEEBA6",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                textTransform: "Capitalize",
              }}
            >
              {breed}
            </ListSubheader>
          </ImageListItem>
          {randomImages &&
            randomImages.map((randomImage) => (
              <ImageListItem key={randomImage}>
                <img src={randomImage} />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Box>
  );
};
export default BreedImageGenerator;
