import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export const revalidate = 5;

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug": slug.current
  }`;

  const slugs = await client.fetch(query);

  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, description, image, content
  }[0]`;

  try {
    const post = await client.fetch(query);

    if (!post) {
      return <div>Post not found</div>; 
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>
        <Image
          src={urlForImage(post.image)}
          width={450}
          height={450}
          alt={post.title || "Post Image"}
          className="rounded mx-auto"
        />

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase ">
            Summary
          </h2>
          <p className="">
          {post.description}
          </p>
        </section>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>; 
  }
}