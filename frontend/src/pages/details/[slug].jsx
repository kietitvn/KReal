import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Seo from "../../components/common/seo";
import ListingDetails from "../../components/details";

const Index = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Seo pageTitle={slug} />
      <ListingDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
