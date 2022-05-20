import { Card, Image, Text } from "@mantine/core";
import styles from "./DisplayBreedImage.module.css";

interface IProps {
  image: string | undefined;
  breedName: string | undefined;
}

const DisplayBreedImage: React.FC<IProps> = (props) => {
  return (
    <Card
      className={`${styles.cardBackground}`}
      shadow="sm"
      p="md"
      component="a"
      href={`dog-breed/${props.breedName}`}
      radius="md"
      withBorder
    >
      <Card.Section>
        <Image src={props.image} height={400} />
      </Card.Section>

      <Text weight={900} size="xl" align="center" underline>
        {props.breedName}
      </Text>

      <Text size="md">
        Want to see more {props.breedName} images? Then click anywhere on this
        card!
      </Text>
    </Card>
  );
};

export default DisplayBreedImage;
