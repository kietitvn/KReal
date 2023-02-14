import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Seo from "../../components/common/seo";
import ListingDetailsV1 from "../../components/details";

const Index = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Seo pageTitle={slug} />
      {/* <ListingDetailsV1 /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
