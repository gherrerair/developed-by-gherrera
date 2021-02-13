import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async () => {
  // const mdx = await renderToString("../../posts/getting-started.mdx", {components: })
};

const Slug: React.FC = () => {
  const router = useRouter();

  return (
    <>
      {/* <SEO /> */}
      <p className="text-3xl">Hello {router.query.slug}</p>
    </>
  );
};

export default Slug;
