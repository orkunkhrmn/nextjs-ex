import { Post } from "@/types/collection";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => (
  <Link className="grid grid-cols-2 gap-10" href={`/post/${post.slug}`}>
    {/* post image */}
    <Image src={post.image} width={600} height={300} alt={post.title} />
    {/* post content */}
    <div>{post.title}</div>
  </Link>
);

export default PostCard;
