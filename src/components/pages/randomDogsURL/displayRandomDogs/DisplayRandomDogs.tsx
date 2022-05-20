import { Image } from "@mantine/core";
interface IProps {
  dogImage: string;
}

const DisplayRandomDogs: React.FC<IProps> = (props) => {
  return <Image src={props.dogImage} width={400} height={400} radius="md" />;
};
export default DisplayRandomDogs;
