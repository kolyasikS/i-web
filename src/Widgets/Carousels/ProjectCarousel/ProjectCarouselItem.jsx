import React from 'react';
import './projectCarouselItem.scss';
import BPRButton from "../../Buttons/blue-pink-redBtn/BPRButton";

const ProjectCarouselItem = ({subtitle, title, width, inView, active,
                                 height, srcVideo, linkUrl, borderSlide}) => {
    return (
        <div className={'projectCarouselItem'} style={{minWidth: width}}>
            <div className={'video'}>
                <video muted={true} playsInline={true} autoPlay={true}
                       preload={'auto'} loop={true}>
                    <source src={srcVideo} type={'video/mp4'}/>
                </video>
            </div>
            <div className={'projectItem__link'}>
                <a href={linkUrl} target="_blank">
                    <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"></path>
                    </svg>
                </a>
            </div>
            <div className={'information'}>
                <div>
                    <h4 className={`information__subtitle ${active ? 'active' : ''} ${borderSlide ? 'border-slide' : ''}`}>
                        <a href="">{subtitle}</a>
                    </h4>
                    <h3 className={`information__title ${active ? 'active' : ''} ${borderSlide ? 'border-slide' : ''}`}>
                        <a href="">{title}</a>
                    </h3>
                </div>
                <div className={`brn-wrapper ${inView ? 'show' : ''}`}>
                    <BPRButton>Want same</BPRButton>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarouselItem;