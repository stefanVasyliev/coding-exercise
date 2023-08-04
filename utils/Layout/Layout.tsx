import React, { FC } from "react";
import Head from "next/head";
import Header from "../../views/components/Header";
import Footer from "../../views/components/Footer";

interface Props {
  children: any;
  title: string;
  keywords?: string;
  description?: string;
  bodyClass?: string;
}



const Layout: FC<Props> = ({
  children,
  bodyClass,
  title,
  keywords,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {!!description?.length && <meta name="description" content={description} />}
      {!!keywords?.length && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={`${bodyClass ? bodyClass : ""}`}  >
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;
