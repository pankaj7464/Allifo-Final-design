import { useEffect } from "react";
import Banner from "../components/common/Banner";
import PostVerticalCard from "../components/cards/PostVerticalCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, fetchHomeData } from "../redux/action/Action";
import PostCard from "../components/cards/PostCard";

function Blogs(props) {
  const dispatch = useDispatch();
  const { allBlogs, home_data } = useSelector(state => state?.blogs)
  let { trendingPosts } = home_data || {}
  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchHomeData());
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return <>
    <Banner />
    <section className="grid md:grid-cols-[70%_28%]">
      <div className="m-4 px-4 md:border-r-4">
        <h1>Recent uploads!</h1>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4  ">
          {allBlogs?.map((item, index) => {
            return (
              <Link to={`${item?.categoryId?.name?.split(" ").join("-")}/${item?.slug}`} key={item?._id}>
                <PostVerticalCard key={item?._id + index} item={item} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden  w-full md:flex flex-col gap-4 pt-8 ">
        <h2 className=" text-2xl font-bold text-colors-accent">Trending posts </h2>
        {trendingPosts?.map((post, index) => {
          return (
            <>
              <Link key={post?._id} to={`/${post?.categoryId?.name?.split(" ").join("-")}/${post?.slug}`}>
                <PostCard post={post} />
              </Link>
              <hr key={post?._id + index} className="border-t-2  border-slate-600" />
            </>
          );
        })}
      </div>
    </section>
  </>
}
export default Blogs