import * as React from "react";
import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

const Head = ({ children, title, keywords }) => {

    return (<React.Fragment>
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="author" content="John Baggen" />

            <meta name="keywords" content={keywords?.join(',')} />
            <title>{title || "John Baggen"}</title>

            {children}
        </NextHead>
    </React.Fragment>
    );
}
export default Head;