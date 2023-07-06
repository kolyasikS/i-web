import React from 'react';

const UsefulPage = () => {
    return (
        <div className={'flex items-center flex-col w-full mt-20'}>
            <h1 className={'text-4xl'}>Useful Page</h1>
            <p>This is Useful Page description</p>
            <ul className={'mt-10'}>
                <li>
                    <a href="/" className={'text-blue-400'}>Move to home page</a>
                </li>
                <li>
                    <a href="/contact" className={'text-blue-400'}>Move to contact page</a>
                </li>
            </ul>
        </div>
    );
};

export default UsefulPage;