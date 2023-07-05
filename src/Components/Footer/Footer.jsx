import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__inner'}>
                <div className={'footer-col'}>
                    <h2 className={'footer-col-h mb-3'}>Main Office</h2>
                    <div className={'footer-office-row-list'}>
                        <div className={'footer-office-row mb-10 relative'}>
                            <div className={'w-16 min-w-[4rem]'}>
                                <svg viewBox="3 0 24 24" fill={'none'} width={40} height={40}
                                     stroke={'#fff'}
                                     strokeLinecap={'round'}
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g data-name="Layer 2" id="Layer_2" width={30}>
                                        <g id="Workspace" width={30}>
                                            <circle className="cls-2" cx="12" cy="10" r="2px"/>
                                            <path className="cls-2"
                                                  d="M17,10a4.64,4.64,0,0,1-.62,2.4C15.36,14.1,12,19,12,19s-3.36-4.9-4.39-6.59A4.64,4.64,0,0,1,7,10a5,5,0,0,1,10,0Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p className={'footer-row-text relative top-4'}>Ukraine, Kyiv, st. Saksaganskogo 69, office 3</p>
                        </div>
                        <div className={'footer-office-row mb-2'}>
                            <div className={'w-16'}>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                     xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill={'#fff'}
                                     width="25" height="25" viewBox="0 0 512 512" space="preserve">
                                    <g>
                                        <path stroke={'#fff'} d="M448,64H64C28.656,64,0,92.656,0,128v256c0,35.344,28.656,64,64,64h384c35.344,0,64-28.656,64-64V128
                                    C512,92.656,483.344,64,448,64z M342.656,234.781l135.469-116.094c0.938,3,1.875,6,1.875,9.313v256
                                    c0,2.219-0.844,4.188-1.281,6.281L342.656,234.781z M448,96c2.125,0,4,0.813,6,1.219L256,266.938L58,97.219
                                    C60,96.813,61.875,96,64,96H448z M33.266,390.25C32.828,388.156,32,386.219,32,384V128c0-3.313,0.953-6.313,1.891-9.313
                                    L169.313,234.75L33.266,390.25z M64,416c-3.234,0-6.172-0.938-9.125-1.844l138.75-158.563l51.969,44.531
                                    C248.578,302.719,252.297,304,256,304s7.422-1.281,10.406-3.875l51.969-44.531l138.75,158.563C454.188,415.062,451.25,416,448,416 H64z"/>
                                    </g>
                                </svg>
                            </div>
                            <a href="">
                                <p className={'footer-row-text cursor-pointer'}>vk@i-web.top</p>
                            </a>
                        </div>
                        <div className={'footer-office-row'}>
                            <div className={'w-16'}>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                     xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     width="25" height="25" viewBox="0 0 477.156 477.156"
                                     stroke={'#fff'} fill={'none'} strokeWidth={20}
                                     space="preserve">
                                    <g>
                                        <path d="M475.009,380.316l-2.375-7.156c-5.625-16.719-24.062-34.156-41-38.75l-62.688-17.125c-17-4.625-41.25,1.594-53.688,14.031
                                    l-22.688,22.688c-82.453-22.28-147.109-86.938-169.359-169.375L145.9,161.94c12.438-12.438,18.656-36.656,14.031-53.656
                                    l-17.094-62.719c-4.625-16.969-22.094-35.406-38.781-40.969L96.9,2.19c-16.719-5.563-40.563,0.063-53,12.5L9.962,48.659
                                    C3.899,54.69,0.024,71.94,0.024,72.003c-1.187,107.75,41.063,211.562,117.281,287.781
                                    c76.031,76.031,179.454,118.219,286.891,117.313c0.562,0,18.312-3.813,24.375-9.845l33.938-33.938
                                    C474.946,420.878,480.571,397.035,475.009,380.316z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={'relative top-4'}>
                                <a href="">
                                    <p className={'footer-row-text cursor-pointer'}>+38(063) 919 23 83</p>
                                </a>
                                <a href="">
                                    <p className={'footer-row-text cursor-pointer'}>+38(063) 264 03 27</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'footer-col pl-20'}>
                    <h2 className={'footer-col-h mb-8'}>Menu</h2>
                    <ol className={'footer-menu--list space-y-6'}>
                        <li className={'footer-menu--list__item'}>
                            <a href="">01. Main</a>
                        </li>
                        <li className={'footer-menu--list__item'}>
                            <a href="">
                                02. Useful
                            </a>
                        </li>
                        <li className={'footer-menu--list__item'}>
                            <a href="">
                                03. Contacts
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={'footer-col pl-8'}>
                    <div className={'footer-imgs space-x-4 mb-8'}>
                        <img src={'https://i-web.top/wp-content/uploads/2022/05/logo_light-iweb.png'} alt="" width={140}/>
                        <img src={'https://i-web.top/wp-content/uploads/2022/07/Partner-RGB.png'} alt="" width={140}/>
                    </div>
                    <div className={'footer-socnets space-x-4'}>
                        <a href="">
                            <img src="https://www.i-web.top/wp-content/uploads/2022/09/icons8-facebook.svg" alt="" width={60}/>
                        </a>
                        <a href="">
                            <img src="https://www.i-web.top/wp-content/uploads/2022/09/icons8-instagram.svg" alt="" width={60}/>
                        </a>
                        <a href="">
                            <img src="https://www.i-web.top/wp-content/uploads/2022/09/icons8-google.svg" alt="" width={60}/>
                        </a>
                    </div>
                    <div className={'footer-copy-right mt-7'}>
                        <p>© 2023, IWEB. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;