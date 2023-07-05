import React from 'react';
import './QuotesCarouselItem.scss';

const QuotesCarouselItem = ({imageUrl, name, quote, width, height, isPrev}) => {
    return (
        <div className={`quote-item ${isPrev ? 'prev-item' : ''}`} style={{minWidth: width}}>
            <div className={'quote-item__inner'}>
                <div className={'quote-author'}>
                    <div className={'quote-author__img'}>
                        <img src={imageUrl} alt=""/>
                    </div>
                    <h4 className={'quote-author__name'}>{name}</h4>
                    <a href={'https://www.facebook.com/iwebtop/reviews/'} className={'facebook-link'}>
                        <img src={'https://www.i-web.top/wp-content/uploads/2022/09/416-4169860_facebook-button-png-image-free-download-searchpng-parallel-removebg-preview.png'}
                             alt=""
                        />
                    </a>
                </div>
                <div className={'quote-text'}>
                    {quote}
                </div>
            </div>
        </div>
    );
};

export default QuotesCarouselItem;