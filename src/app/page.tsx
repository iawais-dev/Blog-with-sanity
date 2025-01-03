import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Comments from "@/components/Comments";
import Card from "@/components/Card";

export default async function Home() {

  const Query=`*[_type =='post']  | order(_createAt asc){
  title,image,description,"slug":slug.current    
}`

const posts:Post[]=await client.fetch(Query)


  return (
    <div className="">
      <h1 className="text-center font-bold text-[50px]">Blogs</h1>
      <div className="flex flex-col lg:flex-row lg:ml-10 items-center gap-10">
        {
          posts.map((post:Post)=>(
            <Card post={post} key={post.slug } />
          ))
        }
      </div>
      <Comments/>
    </div>
  );
}
