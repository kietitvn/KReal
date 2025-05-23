
'use client'

import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body >
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>

      <ScrollToTop />
      </body>
    </html>
  )
}
