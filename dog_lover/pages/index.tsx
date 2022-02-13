import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import TopBar from "../components/topBar";
import GridGroup from "../components/gridGroup";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DogLover App</title>
        <meta name="description" content="In need of some serotonin boost?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: "#4E40A6",
            padding: "10px",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <TopBar />
          <GridGroup />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Home;
