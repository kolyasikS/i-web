import React, {useContext, useState} from 'react';
import './Menu.scss';

const Menu = ({menuVisible}) => {
    const [activeOption, setActiveOption] = useState(-1);
    const checkActive = (pos) => {
        if (activeOption === -1) {
            return;
        }

        if (activeOption === pos) {
            return;
        } else {
            return 'opacity-50';
        }
    }
    return (
        <section className={`menu ${menuVisible === null ? '' : menuVisible === true ? 'open' : 'closed'}`}>
            <div className={'menu-container'}>
                <div className={'menu-options-wrapper'}>
                    <ol className={'menu-options'}>
                        <li className={`menu-options-item ${checkActive(1)}`}
                            onMouseEnter={() => setActiveOption(1)}
                            onMouseLeave={() => setActiveOption(-1)}
                        >
                            <a href="/">
                                <span className={'num'}>01.</span><span className={'title'}>Main</span>
                            </a>
                        </li>
                        <li className={`menu-options-item ${checkActive(2)}`}
                            onMouseEnter={() => setActiveOption(2)}
                            onMouseLeave={() => setActiveOption(-1)}
                        >
                            <a href="/useful">
                                <span className={'num'}>02.</span><span className={'title'}>Useful</span>
                            </a>
                        </li>
                        <li className={`menu-options-item ${checkActive(3)}`}
                            onMouseEnter={() => setActiveOption(3)}
                            onMouseLeave={() => setActiveOption(-1)}
                        >
                            <a href="/contact">
                                <span className={'num'}>03.</span><span className={'title'}>Contacts</span>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={'menu-contacts space-x-16'}>
                    <div className={'menu-contacts-col space-y-8'}>
                        <div className={'menu-contacts-office space-y-2'}>
                            <h4>Office Ukraine:</h4>
                            <a href="">
                                <p>+38(063) 919 23 83</p>
                            </a>
                            <a href="">
                                <p>+38(063) 264 03 27</p>
                            </a>
                            <a href="">
                                <p>vk@i-web.top</p>
                            </a>
                        </div>
                        <div className={'menu-contacts-office space-y-2'}>
                            <h4>Office Slavakia:</h4>
                            <a href="">
                                <p>+421 951 686 229</p>
                            </a>
                            <a href="">
                                <p>gl@i-web.top</p>
                            </a>
                        </div>
                        <div className={'menu-contacts-office space-y-2'}>
                            <h4>Office Turkey:</h4>
                            <a href="">
                                <p>+90 531 229 6184</p>
                            </a>
                            <a href="">
                                <p>ds@i-web.top</p>
                            </a>
                        </div>
                    </div>
                    <div className={'menu-contacts-col space-y-8'}>
                        <div className={'menu-contacts-office space-y-2'}>
                            <h4>Office Canada:</h4>
                            <a href="">
                                <p>+1 647 531 7505</p>
                            </a>
                            <a href="">
                                <p>gl@i-web.top</p>
                            </a>
                        </div>
                        <div className={'menu-contacts-office space-y-2'}>
                            <h4>Office USA:</h4>
                            <a href="">
                                <p>+1 346 490 8699</p>
                            </a>
                            <a href="">
                                <p>dd@i-web.top</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;