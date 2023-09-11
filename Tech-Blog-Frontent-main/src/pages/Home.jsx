import React from "react";
import Hero from "../components/main-componants/Hero";
import PostVerticalCard from "../components/cards/PostVerticalCard";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <section className=" ">
      <Hero />
      <div className="m-4">
        <h1>Trending</h1>
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4  ">
          {[1, 2, 3, 4]?.map((item, index) => {
            return (
              <Link to={`/${"computer"}/${"dfsdfsdfsd"}`} key={index}>
                <PostVerticalCard />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
