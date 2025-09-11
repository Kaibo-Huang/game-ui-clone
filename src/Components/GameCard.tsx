import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import noImage from '../assets/no-image.webp'

interface Props {
    game: Game;
}
const GameCard = ({game}: Props) => {
    return (<>
    <Card>
        {game.background_image ? <Image src = {game.background_image}></Image>: <Image src = {noImage}></Image>}
        <CardBody>
            <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
    </>);
}

export default GameCard;