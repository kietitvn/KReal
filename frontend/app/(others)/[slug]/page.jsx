import ListingDetails from "@/components/details";
import { appName } from "@/utils/const";
import dynamic from "next/dynamic";

export async function generateMetadata({ params, searchParams }) {
  const id = searchParams.id;
  const res = await fetch(process.env.baseUrl + "/api/products/" + id + "?&populate=*", {
    cache: 'no-store', // nếu bạn muốn luôn fetch mới
  });
  const response = await res.json();
  const data = response?.data;
  const slug = data?.attributes?.slug;
  const seoContent = data?.attributes?.seo;
  const title = seoContent?.MetaTitle ? seoContent?.MetaTitle : data?.attributes?.name;
  const description = seoContent?.MetaDescription ? seoContent?.MetaDescription : data?.attributes?.description.substring(0, 150);
  const keywords = seoContent?.MetaKeywords ? seoContent?.MetaKeywords : slug;
  const images = data?.attributes?.cover?.data?.attributes?.url;
  return {
    title: title + ` | ${appName}`,
    description: description + "...",
    keywords,
    openGraph: {
      title: title + ` | ${appName}`,
      description: description + "...",
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
