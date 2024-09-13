import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/b6fcd22f-e413-482a-bf69-35bc8e7978c5-he3q8v.png",
  "https://utfs.io/f/f34580f3-335c-46e9-ab93-1f610583cf9b-5uz8ox.png",
  "https://utfs.io/f/54d80ce4-7ac2-41ed-b98b-0abd874a5a2b-7aglny.png",
  "https://utfs.io/f/d029aac9-f2ff-47b2-872e-16308ccf2fea-1prk.jpg"

];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));


export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => 
          (<div key={post.id}>{post.name} </div>))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
