import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

const SortSelector = () => {

    
    return (<>
        <Menu>
            <MenuButton as = {Button} rightIcon = {<BsChevronDown></BsChevronDown>}>Order by: Relevance</MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    </>);
}

export default SortSelector;