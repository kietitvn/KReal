import Head from "next/head";
import { useSeoContext } from "../../context/seoContext";

const SeoDefault = () => {
  const { seoDefault } = useSeoContext();
  return (
    seoDefault && (
      <Head>
        {seoDefault.title && <title>{seoDefault.title}</title>}
        {seoDefault.description && (
          <meta
            name="description"
            content={seoDefault.description}
            key="description"
          />
        )}
        {seoDefault.meta &&
          seoDefault.meta.length > 0 &&
          seoDefault.meta.map((meta, index) => (
            <meta key={index} name={meta.name} content={meta.content} />
          ))}
      </Head>
    )
  );
};
export default SeoDefault;
