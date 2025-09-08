import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import theme from './theme'
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <>
      <Grid templateAreas={{base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `      }}
      templateColumns={{
        base: '1fr', 
        lg: '200px 1fr'
      }}
      >
        <GridItem area = 'nav'> <NavBar /></GridItem>
       
        <Show above = "lg" ><GridItem area = 'aside' paddingX={5}>
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre = {selectedGenre}></GenreList>
          </GridItem>
          
          </Show>
        <GridItem area = 'main'><PlatformSelector selectedPlatform = {selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)}></PlatformSelector><GameGrid selectedGenre={selectedGenre}/></GridItem>
      </Grid>
    </>
  );
}

export default App;
