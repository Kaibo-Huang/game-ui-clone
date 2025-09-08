import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({onSelectedPlatform}: Props) => {

    const {data, error} = usePlatforms();
    if(error){
        return null;
    }
    return (<>
        <Menu>
            <MenuButton as = {Button} rightIcon = {<BsChevronDown></BsChevronDown>}></MenuButton>
            <MenuList>
                {data.map((d) => <MenuItem onClick={() => onSelectedPlatform(d)} key = {d.id}>{d.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </>);
}

export default PlatformSelector;