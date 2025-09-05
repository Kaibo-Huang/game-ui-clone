import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {FaWindows, FaPlaystation, FaApple, FaAndroid, FaLinux, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo, SiXbox} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props ) => {

    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }
    return(<HStack marginY={"10px"}>
    {platforms.map((platform) => (<Icon as= {iconMap[platform.slug]} color = "#718096"></Icon>))}
    
    </HStack>);
}

export default PlatformIconList;