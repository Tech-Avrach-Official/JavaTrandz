import BlogCards from '@/components/Auth/Blog-Card-Section/BlogCards';
import Footer from '@/components/Layout/Footer/Footer';
import Navbar from '@/components/Layout/Navbar/Navbar';
import SideAction from '@/components/Layout/Side-Quick-Action/SideAction';
import Loading from '@/components/Loading/Loading';
import { fetchBlogs } from '@/Redux/features/blog/blogApi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Blog = () => {
  const dispatch = useDispatch();
  const { allBlogs, isLoading, isError, error } = useSelector((state) => state.blog);

  useEffect(() => {
    // Only dispatch if `allBlogs` is empty
    if (!allBlogs || allBlogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, allBlogs]);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F8F8F8] px-4 xl:px-40 py-20">
        <div className="flex justify-center flex-wrap gap-10">
          {allBlogs?.map((item) => (
            <BlogCards blog={item} key={item.id} />
          ))}
        </div>
      </div>
      <SideAction />
      <Footer />
    </div>
  );
};

export default Blog;
