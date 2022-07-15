import Link from 'next/link';
import React from 'react';

const CustomLink = ({ children, href }) => {
    return (
        <Link href={href} passHref>
            <a >
                {children}
            </a>

        </Link>
    );
};

export default CustomLink;