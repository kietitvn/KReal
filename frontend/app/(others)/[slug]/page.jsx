import ListingDetails from "@/components/details";
import dynamic from "next/dynamic";

export async function generateMetadata({ params, searchParams }) {
  console.log('params',params);
  console.log('searchParams',searchParams);

  const id = searchParams.id;
  const res = await fetch(process.env.baseUrl + "/api/products/" + id + "?&populate=*", {
    cache: 'no-store', // nếu bạn muốn luôn fetch mới
  });
  const response = await res.json();
  const data = response?.data;
  const slug = data?.attributes?.slug;
  const seoContent = data?.attributes?.seo;
  const title = seoContent?.MetaTitle ? seoContent?.MetaTitle : slug;
  return {
    title,
    description: seoContent?.MetaDescription,
    keywords: seoContent?.MetaKeywords,
    openGraph: {
      title,
      description: seoContent?.MetaDescription,
      images: [seoContent?.ShareImage],
    },
  };
}

const Index = () => {
  return (
    <>
      <ListingDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
