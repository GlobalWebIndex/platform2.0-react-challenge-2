import {
  Alert,
  Button,
  Center,
  Loader,
  Menu,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { useQuery } from "react-query";
import { AlertCircle, Selector } from "tabler-icons-react";
import { firstLetterCapital } from "../../../../utils/utils";
import { fetchAllDogBreeds, fetchDogImgByBreed } from "../../../api/api";
import styles from "./AllBreeds.module.css";
import DisplayBreedImage from "./DisplayBreedImage/DisplayBreedImage";

const AllBreeds = () => {
  const [breedImageSrc, setBreedImageSrc] = useState<string>();
  const [selectedBreed, setSelectedBreed] = useState<string>();
  let dogBreeds: string[] = [];

  const { error, isLoading, status, data } = useQuery(
    "fetchDogBreeds",
    fetchAllDogBreeds,
    {
      staleTime: 50000,
    }
  );
  if (status === "success") {
    dogBreeds = Object.keys(data?.message);
  }

  const setSpecificImage = async (breedName: string): Promise<void> => {
    const results = await fetchDogImgByBreed(breedName);
    setBreedImageSrc(results.message);
  };
  if (error) {
    return (
      <Alert
        icon={<AlertCircle size={16} />}
        title="Bummer!"
        color="red"
        radius="md"
      >
        There is an error fetching breeds...
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Center>
        <Text size="xl" weight={700} transform="uppercase">
          Loading
          <Loader size="sm" variant="dots" color="dark" />
        </Text>
      </Center>
    );
  }
  return (
    <Stack align={"center"}>
      <Paper
        shadow="md"
        radius="md"
        p="xs"
        withBorder
        className={`${styles.text_container}`}
      >
        <Text weight={600} align={"center"} size="lg">
          Today, many of the dogs you know and love are the product of selective
          breeding between individuals with desirable traits, either physical or
          behavioral. For instance, around 9,500 years ago, ancient peoples
          began breeding dogs that were best able to survive and work in the
          cold. These dogs would become the family of sled dogs—including breeds
          such as huskies and malamutes—that remains relatively unchanged today.
        </Text>
      </Paper>
      <Menu
        control={
          <Button size="md" rightIcon={<Selector size={16} />}>
            Check breeds
          </Button>
        }
        withArrow
      >
        <ScrollArea className={`${styles.scrollArea}`}>
          <Menu.Label>Breeds</Menu.Label>
          {dogBreeds !== undefined &&
            dogBreeds.map((breed: string, index: number) => {
              return (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    setSpecificImage(breed);
                    setSelectedBreed(breed);
                  }}
                >
                  {firstLetterCapital(breed)}
                </Menu.Item>
              );
            })}
        </ScrollArea>
      </Menu>
      {breedImageSrc !== undefined && (
        <DisplayBreedImage image={breedImageSrc} breedName={selectedBreed} />
      )}
    </Stack>
  );
};

export default AllBreeds;
