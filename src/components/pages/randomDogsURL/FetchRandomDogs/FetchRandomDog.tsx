import {
  Alert,
  Center,
  Container,
  Loader,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { useQuery } from "react-query";
import { AlertCircle } from "tabler-icons-react";
import { fetchRandomImages } from "../../../api/api";
import DisplayRandomDogs from "../displayRandomDogs/DisplayRandomDogs";

const FetchRandomDogs = () => {
  const { data, error, isLoading } = useQuery("randomDog", fetchRandomImages, {
    staleTime: 500000,
  });
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
        <Title>
          Loading
          <Loader size="sm" variant="dots" color="dark" />
        </Title>
      </Center>
    );
  }

  return (
    <Container size="md" px="md">
      <SimpleGrid cols={2} spacing="xs">
        {data?.message.map((imageSrc: string, index: number) => {
          return <DisplayRandomDogs dogImage={imageSrc} key={index} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default FetchRandomDogs;
