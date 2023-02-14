import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} | Bất Động Sản - KReal`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="Mua bán, cho thuê, ký gửi, dịch vụ, đăng bộ, nhà, đất, chung cư, căn hộ"
      />
      <meta
        name="description"
        content="Mua bán cho thuê ký gửi dịch vụ đăng bộ nhà đất chung cư căn hộ"
      />
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

export default Seo;
