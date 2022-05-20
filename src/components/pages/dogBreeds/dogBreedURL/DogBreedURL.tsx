import {
  Alert,
  Center,
  Container,
  Image,
  Loader,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AlertCircle } from "tabler-icons-react";
import { fetchSpecificDogBreed } from "../../../api/api";
import styles from "./DogBreedURL.module.css";

const DogBreedURL: React.FC = () => {
  let { dogBreed } = useParams();
  const { data, isLoading, error } = useQuery(
    ["specificBreed", dogBreed],
    async () => {
      const data = await fetchSpecificDogBreed(dogBreed);
      return data;
    }
  );
  if (error) {
    return (
      <Alert
        icon={<AlertCircle size={16} />}
        title="Bummer!"
        color="red"
        radius="md"
      >
        There is an error fetching images...
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
    <>
      <Center>
        <Paper
          shadow="md"
          radius="md"
          p="xs"
          withBorder
          m="xs"
          className={`${styles.textBG}`}
        >
          <Title order={3}>Current Breed: {dogBreed}</Title>
        </Paper>
      </Center>
      <Container size="md" px="md">
        <SimpleGrid cols={2} spacing="xs">
          {data?.message.map((imageSrc: string, index: number) => {
            return (
              <Image src={imageSrc} width={400} height={400} key={index} />
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default DogBreedURL;
