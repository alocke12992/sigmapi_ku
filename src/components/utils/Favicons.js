import React, { Fragment } from 'react';
import appleTouch from 'static/favicons/apple-touch-icon.png';
import favicon32 from 'static/favicons/favicon-32x32.png';
import favicon16 from 'static/favicons/favicon-16x16.png';
import safari from 'static/favicons/safari-pinned-tab.svg';
const Favicons = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/ >
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
    <link rel="mask-icon" href={safari} color="#3f3a5f"/>
    <meta name="apple-mobile-web-app-title" content="Sigma Pi Ku"/>
    <meta name="application-name" content="Sigma Pi Ku"/>
    <meta name="msapplication-TileColor" content="#603cba"/>
    <meta name="theme-color" content="#ffffff"/>
  </>
);

export default Favicons;
