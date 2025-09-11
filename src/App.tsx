import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import theme from './theme'
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery{
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid templateAreas={{base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `      }}
      templateColumns={{
        base: '1fr', 
        lg: '200px 1fr'
      }}
      >
        <GridItem area = 'nav'> <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} /></GridItem>
       
        <Show above = "lg" ><GridItem area = 'aside' paddingX={5}>
          <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre })} selectedGenre = {gameQuery.genre}></GenreList>
          </GridItem>
          
          </Show>
        <GridItem area = 'main'>
          <Box paddingLeft={2}>
         <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack marginBottom= {5} spacing = {5}>
          <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}>

          </PlatformSelector>
          <SortSelector sortOrder = {gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => {setGameQuery({...gameQuery, sortOrder})}}></SortSelector>
          
        </HStack>
        </Box>
        <GameGrid 
   gameQuery={gameQuery} />
    </GridItem>
      </Grid>
    </>
  );
}

export default App;
