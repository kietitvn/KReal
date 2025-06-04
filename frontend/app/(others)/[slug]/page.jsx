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
  console.log('seoContent',data);
  const title = seoContent?.MetaTitle ? seoContent?.MetaTitle : slug;
  const description = seoContent?.MetaDescription ? seoContent?.MetaDescription : slug;
  const keywords = seoContent?.MetaKeywords ? seoContent?.MetaKeywords : slug;
  const images = data?.attributes?.cover?.data?.attributes?.url ;
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images
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
