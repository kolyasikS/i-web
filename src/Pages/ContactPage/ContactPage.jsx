import React from 'react';

const ContactPage = () => {
    return (
        <div className={'flex items-center flex-col w-full mt-20'}>
            <h1 className={'text-4xl'}>Contact Page</h1>
            <p>This is Contact Page description</p>
            <ul className={'mt-10'}>
                <li>
                    <a href="/" className={'text-blue-400'}>Move to home page</a>
                </li>
                <li>
                    <a href="/useful" className={'text-blue-400'}>Move to useful page</a>
                </li>
            </ul>
        </div>
    );
};

export default ContactPage;