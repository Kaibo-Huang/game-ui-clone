import useData, { Genres } from "./useData";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const useGames = (selectedGenre: Genres | null) =>{ return useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);}

export default useGames;