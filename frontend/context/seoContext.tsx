import { useQuery } from "@apollo/client";
import { createContext, useContext } from "react";
import { querySeoDefault } from "../graphql/home";
import { ISeoDefault, IQuerySeoDefault } from "../interface/home";

type seoDefaultContextType = {
  seoDefault: ISeoDefault;
};

const Context = createContext<seoDefaultContextType>(null);

export function SeoContext({ children }) {
  const { loading, error, data } = useQuery<IQuerySeoDefault>(querySeoDefault);

  return (
    <Context.Provider
      value={{ seoDefault: data ? { ...data.config.seo } : null }}
    >
      {children}
    </Context.Provider>
  );
}

export function useSeoContext() {
  return useContext(Context);
}
