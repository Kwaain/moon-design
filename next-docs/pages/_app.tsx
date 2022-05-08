import React, {ReactChild, ReactNode, useMemo} from 'react';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/themes.css';
import '../styles/custom.css';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator
} from 'kbar';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { DocsThemeProvider } from '../components/themes/DocsThemeProvider';
import { BarResults } from './components/KBar/BarResults';
import {BarSearch} from "./components/KBar/BarSearch";
import type { AppProps } from 'next/app';

type GetLayout = (page: ReactNode) => ReactChild & ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const kBarActions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
];

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout;

  return (
    <>
      {/* TODO Add favicon.ico*/}
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <KBarProvider actions={kBarActions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <BarSearch />
              <BarResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>

        <DocsThemeProvider>
          {getLayout ? (
            getLayout(<Component {...pageProps} />)
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </DocsThemeProvider>
      </KBarProvider>
    </>
  );
}
export default MyApp;
