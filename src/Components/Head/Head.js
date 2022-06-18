import * as React from "react";
import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

export const Head = ({ children, title }) => (
    <React.Fragment>
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <title>{title}</title>

            {children}
        </NextHead>
    </React.Fragment>
);