import Head from "next/head";
import { ISeo } from "../../interface/seo";

const Seo = (props: ISeo) => {
  return (
    <Head>
      <title>{props.metaTitle}</title>
      <meta
        name="description"
        content={props.metaDescription}
        key="description"
      />
      <meta name="keywords" content={props.keywords} />
      <meta property="og:title" content={props.metaTitle} key="og:title" />
      <meta
        property="og:description"
        content={props.metaDescription}
        key="og:description"
      />
      <meta
        property="og:image"
        content={process.env.backendURL + props.shareImage.media.url}
        key="og:image"
      />
      {props.preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )}
    </Head>
  );
};
export default Seo;
