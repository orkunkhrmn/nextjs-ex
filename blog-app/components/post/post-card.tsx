import { Post } from "@/types/collection";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => (
  <Link
    className={`${
      layout === "horizontal"
        ? "grid items-center grid-cols-2 gap-10"
        : "space-y-10"
    } `}
    href={`/post/${post.slug}`}
  >
    {/* post image */}
    <Image
      className={`rounded-md w-full object-cover object-center max-h-[300px] ${
        reverse ? "order-last" : ""
      }`}
      src={post.image}
      width={600}
      height={300}
      alt={post.title}
    />
    {/* post content */}
    <PostContent post={post} />
  </Link>
);

export default PostCard;
