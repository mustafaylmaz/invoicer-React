import React from 'react';

const Footer = ({name,address,email,website,phone}) => {
    return (
        <>
            <footer >
                <ul className="flex flex-wrap items-center justify-center">
                    <li> <span className="font-bold"> Your name: {name}</span></li>
                    <li> <span className="font-bold"> Your email: {email}</span></li>
                    <li> <span className="font-bold"> Phone Number: {phone}</span></li>
                    <li> <span className="font-bold"> Bank: bank</span></li>
                    <li> <span className="font-bold"> Account holder name: john doe</span></li>
                    <li> <span className="font-bold"> Account number: 3432432</span></li>
                    <li> <span className="font-bold"> Website: <a target="_blank" rel='noopenner noreferrer' href="{website}">{website}</a></span></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
