import { Appbar } from ".";
import { Blog } from "../hooks/index";
import { Avatar } from "./BlogCard";

export const SingleBlog = ({ blog }: { blog: { publishDate: string | number | Date; post: Blog } }) => {
  const { post } = blog; // Destructure the post object

  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 min-h-screen">
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl bg-white bg-opacity-80 rounded-lg shadow-lg">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold text-gray-900">{post.title}</div>
            <div className="text-slate-500 pt-2">
              Posted on {new Date(blog.publishDate).toLocaleDateString()}
            </div>
            <div className="pt-4 text-gray-800">{post.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={post.author?.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {post.author?.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Title: {post.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
