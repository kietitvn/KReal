import Head from "next/head";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../features/global/globalSlice";

const Seo = ({ pageTitle, font, seo }) => {
  const globalData = useSelector(selectGlobal);
  const seoWithDefaults = {
    ...globalData?.global?.data?.attributes.DefaultSeo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    MetaTitle:
      (pageTitle ? pageTitle : `${seoWithDefaults.MetaTitle}`) +
      ` | ${globalData?.global?.data?.attributes?.SiteName}`,
    // Get full image URL
    ShareImage: seoWithDefaults?.ShareImage?.data?.attributes.url,
  };
  console.log("fullSeo", fullSeo);
  return (
    <>
      <Head>
        {fullSeo.MetaTitle && (
          <>
            <title>{fullSeo.MetaTitle}</title>
            <meta property="og:title" content={fullSeo.MetaTitle} />
            <meta name="twitter:title" content={fullSeo.MetaTitle} />
          </>
        )}
        {fullSeo.MetaDescription && (
          <>
            <meta name="description" content={fullSeo.MetaDescription} />
            <meta property="og:description" content={fullSeo.MetaDescription} />
            <meta
              name="twitter:description"
              content={fullSeo.MetaDescription}
            />
          </>
        )}
        {fullSeo.ShareImage && (
          <>
            <meta property="og:image" content={fullSeo.ShareImage} />
            <meta name="twitter:image" content={fullSeo.ShareImage} />
            <meta name="image" content={fullSeo.ShareImage} />
          </>
        )}
        {fullSeo.article && <meta property="og:type" content="article" />}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <title>{pageTitle && `${pageTitle}|` + "Bất Động Sản - KReal"}</title> */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* <meta
          name="keywords"
          content="Mua bán, cho thuê, ký gửi, dịch vụ, đăng bộ, nhà, đất, chung cư, căn hộ"
        />
        <meta
          name="description"
          content="Mua bán cho thuê ký gửi dịch vụ đăng bộ nhà đất chung cư căn hộ"
        /> */}
        <meta name="ibthemes" content="ATFN" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="favicon.ico" />
      </Head>
    </>
  );
};

export default Seo;
