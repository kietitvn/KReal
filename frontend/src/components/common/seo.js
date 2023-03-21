import Head from "next/head";
import { useSelector } from "react-redux";
import { selectGlobal } from "../../features/global/globalSlice";

const Seo = ({ pageTitle, font, seo }) => {
  const globalData = useSelector(selectGlobal);

  const seoWithDefaults = {
    ...globalData?.global?.data?.attributes?.DefaultSeo,
    ...seo,
    Favicon:
      globalData?.global?.data?.attributes?.Favicon?.data?.attributes?.url,
  };

  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    MetaTitle:
      (pageTitle ? pageTitle : `${seoWithDefaults?.MetaTitle}`) +
      ` | ${globalData ? globalData.global?.data?.attributes?.SiteName : "KReal"}`,
    // Get full image URL
    ShareImage: seoWithDefaults?.ShareImage?.data?.attributes.url,
  };
  return (
    <>
      <Head>
        {seoWithDefaults?.MetaTitle ?
          <title>{fullSeo?.MetaTitle}</title> : <title>Mua bán Ký gửi-Nhà đất Căn hộ-Pháp lý Đăng bộ | KReal</title>
        }

        {fullSeo?.MetaDescription ?
          <meta name="description" content={fullSeo?.MetaDescription} /> : <meta name="description" content={`Mua bán cho thuê ký gửi dịch vụ đăng bộ nhà đất chung cư căn hộ`} />
        }

        {fullSeo?.MetaKeyword ?
          <meta name="keywords" content={fullSeo?.MetaKeyword} /> : <meta name="keywords" content={`Mua bán, cho thuê, ký gửi, dịch vụ, đăng bộ, nhà, đất, chung cư, căn hộ`} />
        }


        {fullSeo?.Favicon ? (
          <link rel="icon" href={fullSeo?.Favicon} />
        ) : (
          <link rel="icon" href={"../../../public/favicon.ico"} />
        )}

        {fullSeo.ShareImage &&
          <meta name="image" content={fullSeo.ShareImage} />
        }

        <meta name="twitter:card" content="summary_large_image" />

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="ibthemes" content="ATFN" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {font && <link href={font} rel="stylesheet" />}
      </Head>
    </>
  );
};

export default Seo;
