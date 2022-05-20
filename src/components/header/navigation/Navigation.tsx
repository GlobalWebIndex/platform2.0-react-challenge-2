import { Link } from "react-router-dom";
import { Home, ListSearch } from "tabler-icons-react";
import { Button, Group, Header } from "@mantine/core";
import styles from "./Navigation.module.css";
import SearchFilterModal from "../../searchFilter/SearchFilter";

const Navigation: React.FC = () => {
  return (
    <Header height={70} p="sm" m="sm" className={`${styles.header_bg}`}>
      <Group position="center">
        <Button
          component={Link}
          to="/"
          radius="md"
          size="md"
          rightIcon={<Home size={16} />}
          color="violet"
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/dog-breeds"
          radius="md"
          size="md"
          rightIcon={<ListSearch size={16} />}
          color="violet"
        >
          Browse breeds
        </Button>
        <SearchFilterModal />
      </Group>
    </Header>
  );
};

export default Navigation;
