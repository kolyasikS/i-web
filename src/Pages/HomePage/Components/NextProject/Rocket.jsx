import React, {useState} from 'react';
import BPRButton from "../../../../Widgets/Buttons/blue-pink-redBtn/BPRButton";
import './Rocket.scss';
import {createPortal} from "react-dom";
import SignUp from "../SignUp/SignUp";

const Rocket = () => {
    const [topRocket, setTopRocket] = useState(-15);
    const [launchRocket, setLaunchRocket] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    return (
        <div className={`rocket`}>
            <div className={`rocket-container ${launchRocket ? 'launched' : ''}`}>
                <div className={`rocket-img`} style={{transform: `translateY(${topRocket}px)`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 512 513" fill="none">
                        <g clipPath="url(#clip0)">
                            <path d="M187.436 363.09L107.011 363.088L107.012 295.449L137.477 241.018L187.436 241.018L187.436 363.09Z" fill="#C3DAFD"/>
                            <path d="M405.053 363.09L324.627 363.09L324.628 241.023L374.667 241.02L405.053 295.456L405.053 363.09Z" fill="#A1B8D8"/>
                            <path d="M331.748 337.745L180.479 337.743L166.331 363.09L183.582 405.765L327.413 405.766L345.895 363.09L331.748 337.745Z" fill="#2B4CA1"/>
                            <path d="M256.161 341.769C256.161 350.453 256.162 405.579 256.161 405.766C262.714 405.766 323.645 405.766 327.412 405.766L345.895 363.089L331.747 341.768L256.161 341.769Z" fill="#213B82"/>
                            <path d="M326.363 104.489C300.873 38.5932 260.401 5.20269 256.15 0.0719608C253.937 3.3839 164.001 77.6922 166.318 213.943L166.317 363.09L345.881 363.088L345.881 213.95C346.559 177.103 339.812 139.254 326.363 104.489V104.489Z" fill="#E4F3FF"/>
                            <path d="M326.363 104.489C300.873 38.5931 260.401 5.20262 256.15 0.0718923C256.147 0.075894 256.139 0.0833931 256.137 0.0878951L256.137 363.089L345.881 363.087L345.882 213.95C346.559 177.103 339.812 139.254 326.363 104.489V104.489Z" fill="#C3DAFD"/>
                            <path d="M256.126 241.178C213.582 241.178 191.305 189.323 221.936 158.653C252.334 128.21 304.484 150.033 304.484 192.868C304.483 219.504 282.791 241.176 256.126 241.178V241.178Z" fill="#84D9F3"/>
                            <path d="M256.162 144.464L256.161 241.178C282.81 241.157 304.485 219.493 304.486 192.869C304.487 164.045 280.872 144.736 256.162 144.464Z" fill="#77B0FB"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect y="256.077" width="362.147" height="362.147" transform="rotate(-45 0 256.077)" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {createPortal(
                    <SignUp open={isSignUpOpen} setOpen={setIsSignUpOpen}/>,
                    document.body
                )}
                <div className={`flame-wrapper`}>
                    <div className={`flame-anim`}>
                        <div className={'flame red'}></div>
                        <div className={'flame orange'}></div>
                        <div className={'flame gold'}></div>
                        <div className={'flame white'}></div>
                    </div>
                </div>
            </div>
            <BPRButton className={'rocket-btn'}
                       onClick={() => {
                           setIsSignUpOpen(true);
                           setLaunchRocket(true)
                       }}
                       onMouseEnter={() => setTopRocket(0)}
                       onMouseExit={() => setTopRocket(-15)}
            ><a href="HomePage/Components/NextProject#sign-up">Launch rocket</a></BPRButton>
        </div>
    );
};

export default Rocket;