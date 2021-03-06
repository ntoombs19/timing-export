import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AppProvider } from '../src/contexts/AppContext';
import NextPersistWrapper from 'next-persist';
import { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(typeof window === 'undefined');
    }, []);

    return (
        !isSSR && (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                    />
                    <meta name="description" content="Description" />
                    <meta name="keywords" content="Keywords" />
                    <title>Timing Export</title>

                    <link rel="manifest" href="/manifest.json" />
                    <link
                        href="/icons/icon-16x16.png"
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                    />
                    <link
                        href="/icons/icon-32x32.png"
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                    />
                    {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link>*/}
                    <meta name="theme-color" content="#317EFB" />
                    <meta name="application-name" content="PWA App" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta name="apple-mobile-web-app-title" content="PWA App" />
                    <meta
                        name="description"
                        content="Best PWA App in the world"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="msapplication-config"
                        content="/icons/browserconfig.xml"
                    />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#000000" />

                    {/* <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />*/}
                    {/* <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />*/}
                    {/* <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />*/}
                    {/* <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />*/}
                    {/* <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />*/}
                    <link rel="shortcut icon" href="/favicon.ico" />

                    {/* <meta name='twitter:card' content='summary' />*/}
                    {/* <meta name='twitter:url' content='https://yourdomain.com' />*/}
                    {/* <meta name='twitter:title' content='PWA App' />*/}
                    {/* <meta name='twitter:description' content='Best PWA App in the world' />*/}
                    {/* <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />*/}
                    {/* <meta name='twitter:creator' content='@DavidWShadow' />*/}
                    {/* <meta property='og:type' content='website' />*/}
                    {/* <meta property='og:title' content='PWA App' />*/}
                    {/* <meta property='og:description' content='Best PWA App in the world' />*/}
                    {/* <meta property='og:site_name' content='PWA App' />*/}
                    {/* <meta property='og:url' content='https://yourdomain.com' />*/}
                    {/* <meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />*/}
                </Head>
                <AppProvider>
                    <NextPersistWrapper>
                        <Component {...pageProps} />
                    </NextPersistWrapper>
                </AppProvider>
            </>
        )
    );
}
