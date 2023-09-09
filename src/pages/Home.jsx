import React, { useEffect } from "react";
import Hero from "../components/main-componants/Hero";
import PostVerticalCard from "../components/cards/PostVerticalCard";
import { Link } from "react-router-dom";
import Banner from "../components/common/Banner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchHomeData } from "../redux/action/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { home_data } = useSelector(state => state?.blogs)
  console.log(home_data)
  let { trendingPosts, topViewedPosts, topRecentPosts } = home_data || {}
  useEffect(() => {
    if (!home_data) {
      dispatch(fetchHomeData());
      dispatch(fetchCategory());
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <section className=" ">
      <Banner />
      <Hero trendingPosts={trendingPosts} topRecentPosts={topRecentPosts} />
      <div className="m-4">
        <h1>Top viewed articles!</h1>
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4  ">
          {topViewedPosts?.map((item, index) => {
            return (
              <Link to={`${item?.categoryId?.name?.split(" ").join("-")}/${item?.slug}`} key={item?._id}>
                <PostVerticalCard key={item?._id + index} item={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
