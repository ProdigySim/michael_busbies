import Head from "next/head";
import { BlogPost, getLatestPosts } from "../blogposts/generators";
import { MDXRemote } from "next-mdx-remote";

type Props = {
  latestPosts: BlogPost[];
};
export default function Home({ latestPosts }: Props) {
  return (
    <main className="blog">
      <Head>
        <title>Michael Busby | Homepage</title>
      </Head>
      <div>
        <h2>Latest Posts</h2>
        <div>
          {latestPosts.map(({ fileName, metadata, contents }) => (
            <article className="content-block" key={fileName}>
              <h1>{metadata.title ?? "Unknown Title"}</h1>
              <div className="blogpost-wrapper">
                <MDXRemote {...contents} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const latestPosts = await getLatestPosts();

  return {
    props: { latestPosts },
  };
}
