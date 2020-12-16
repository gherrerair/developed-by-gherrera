import { useRouter } from "next/router";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import { SEO } from "~/components";

export const getStaticProps = async () => {
  // const mdx = await renderToString("../../posts/getting-started.mdx", {components: })
};

const Slug = () => {
  const router = useRouter();

  return (
    <>
      {/* <SEO /> */}
      <p className="text-3xl">Hello {router.query.slug}</p>
    </>
  );
};

export default Slug;
