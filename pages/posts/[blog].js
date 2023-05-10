import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const blog = router.query.blog;
  return (
    <>
      <h1>Post: {blog}</h1>
    </>
  );
};
export default Blog;
