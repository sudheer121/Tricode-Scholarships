import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import Index from "./index";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/nextjs-argon-dashboard.scss";

import { AuthContext, Provider } from "../context/store";
import { useAuth } from "../hooks/auth-hook";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

const MyApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     let comment = document.createComment(`

// =========================================================
// * * NextJS Argon Dashboard v1.0.0 based on Argon Dashboard React v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/nextjs-argon-dashboard/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// `);
//     document.insertBefore(comment, document.documentElement);
//   }
//   
//   }, []);

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    // const router = useRouter();
    // const { role } = useAuth();

    // console.log(role);
    // if (router.pathname.startsWith("/admin") && role !== "admin") {
    //   router.push("regulator/dashboard");
    // }
    // if (router.pathname.startsWith("/regulator") && role !== "regulator") {
    //   router.push("admin/dashboard");
    // }


    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Tricode Scholarships</title>
        </Head>
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </React.Fragment>
    );
}

MyApp.getInitialProps = async ({ Component, router, ctx }) => {
      let pageProps = {};
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      return { pageProps };
    }

export default MyApp;