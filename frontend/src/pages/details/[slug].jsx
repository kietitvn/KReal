import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Seo from "../../components/common/seo";
import ListingDetails from "../../components/details";
import { selectProducts } from "../../features/products/productsSlice";

const Index = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const productData = useSelector(selectProducts);
  let product = productData?.products?.data?.find(
    (f) => f.attributes.slug === slug
  );
  if (!product)
    product = productData?.productsFeatured
      ?.data?.find(
        (f) => f.attributes.slug === slug
      );
  return (
    <>
      <Seo seo={product?.attributes?.seo} />
      <ListingDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
