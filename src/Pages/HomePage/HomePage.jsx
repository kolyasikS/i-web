import React, {useState} from 'react';
import Loading from "./Components/Loading/Loading";
import Cursor from "../../Components/FixedComponents/Cursor/Cursor";
import Header from "../../Components/FixedComponents/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import LastProjects from "./Components/LastProjects/LastProjects";
import Management from "./Components/Management/Management";
import Quotes from "./Components/Quotes/Quotes";
import NextProject from "./Components/NextProject/NextProject";
import Game from "./Components/Game/Game";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import Sharing from "../../Components/FixedComponents/Sharing/Sharing";
import PresentationLink from "../../Components/FixedComponents/PresentationLink/PresentationLink";

const HomePage = () => {
    const [menuVisible, setMenuVisible] = useState(null);

    return (
        <>
            <Loading/>
            <Cursor/>
            <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>
            <Introduction/>
            <LastProjects/>
            <Management/>
            <Quotes/>
            <NextProject/>
            <Game/>
            <Footer/>
            <Menu menuVisible={menuVisible}/>
            <Sharing/>
            <PresentationLink/>
        </>
    );
};

export default HomePage;