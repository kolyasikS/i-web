import React, {useContext, useState} from 'react';
import './Header.scss';
import AnimatedText from "../../../AnimatedWidgets/Text/AnimatedText";

const Header = ({setMenuVisible, menuVisible}) => {
    const [animatedMenu, setAnimatedMenu] = useState(createAnimatedMenu());
    function createAnimatedMenu() {
        return  (<AnimatedText
            jump={true} jumpDist={20}
            delay={30}
            animationDuration={1000}
            charClassName={'char-m jump-header'}
        >
            Menu
        </AnimatedText>)
    }
    return (
        <header className={'header'}>
            <div className={'header__inner'}>
                <div className={'logo'}>
                    <a href="">
                        <img src='https://www.i-web.top/wp-content/uploads/2022/05/logo_light-iweb.png' alt=""/>
                    </a>
                </div>
                <div className={'menu-icon'}
                     onClick={() => setMenuVisible(prev => !prev)}
                     onMouseEnter={() => setAnimatedMenu(createAnimatedMenu)}>
                    <span className={`menu-state ${menuVisible ? 'open' : ''}`}>
                        <span className={'menu-text'}>
                            {animatedMenu}
                        </span>
                    </span>
                    <span className={'icon space-y-1'}>
                        <i></i>
                        <i className={'scale-[0.8]'}></i>
                        <i className={'scale-[0.7]'}></i>
                    </span>
                    <div className={'languages mt-1.5'}>
                        <a href="#">UA</a>
                        <a href="#">RU</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;