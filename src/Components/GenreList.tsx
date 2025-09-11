import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";

interface Props{
    onSelectedGenre: (genre: Genres) => void;
    selectedGenre: Genres | null;
}
const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
    const { data, isLoading } = useGenres();
    
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <>
        <Heading fontSize="2xl" marginBottom = {3}>Genres</Heading>
        <List>
           {data.map((genre) => <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
                <Image objectFit = "cover" boxSize={"32px"} borderRadius={"8px"} src = {genre.image_background}></Image>
                <Button whiteSpace = 'normal' textAlign= "left" fontWeight={selectedGenre?.id === genre.id?  "bold": "normal"} onClick = {() => {onSelectedGenre(genre)}}variant={"link"} fontSize={'lg'}>{genre.name}</Button> 
            </HStack></ListItem>)}
            
        </List>
        </>
    );
}

export default GenreList;