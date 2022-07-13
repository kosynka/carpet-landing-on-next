import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
                <meta property="og:title" content="Чистка ковров | kilem juu"/>
                <meta property="og:site_name" content="kilem juu"/>
                <meta property="og:url" content="https://carpet-landing-on-next.vercel.app/"/>
                <meta property="og:description" content=""/>
                <meta property="og:locale" content="ru_KZ" />
                <meta property="og:image" content="/images/welcome_page.jpg"/>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
                />
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
