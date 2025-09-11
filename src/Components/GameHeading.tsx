import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";

interface Props{
    gameQuery: GameQuery;
}
const GameHeading = ({gameQuery}: Props) =>{
    const platformName = gameQuery.platform?.name || "";
    const genreName = gameQuery.genre?.name || "";
    const heading = `${platformName}${platformName && genreName ? " " : ""}${genreName} Games`;
    return (
        <Heading as='h1' marginY={5} fontSize={'5xl'}>{heading.trim()}</Heading>
    );
}

export default GameHeading;