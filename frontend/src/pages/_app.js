import { Provider } from "react-redux";

import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";

import { persistStore } from "reduxjs-toolkit-persist";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
