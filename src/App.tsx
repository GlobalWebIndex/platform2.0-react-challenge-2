import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Affix, Button, Transition } from "@mantine/core";
import Home from "./components/pages/home/Home";
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import Navigation from "./components/header/navigation/Navigation";
import DogBreedURL from "./components/pages/dogBreeds/dogBreedURL/DogBreedURL";
import AllBreeds from "./components/pages/dogBreeds/allBreeds/AllBreeds";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp } from "tabler-icons-react";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dog-breeds/" element={<AllBreeds />} />
            <Route path="dog-breed/:dogBreed" element={<DogBreedURL />} />
            <Route
              path="*"
              element={
                <PageNotFound
                  statusNumber={404}
                  navText="Sorry, the page you are looking for could not be found."
                  btnText="Go back!"
                  navigationPath="/"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 30}>
          {() => (
            <Button
              radius={10}
              leftIcon={<ArrowUp size={16} />}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default App;
