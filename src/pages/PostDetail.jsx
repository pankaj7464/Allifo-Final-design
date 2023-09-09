import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/images.jpg";
import PostCardWithThumbnail from "../components/cards/PostCardWithThumbnail";
import PostCard from "../components/cards/PostCard";
import { fetchBlogById } from "../redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
const PostDetail = () => {
  const dispatch = useDispatch()
  const { category, postId } = useParams();
  const postData = useSelector(state => state?.blogs?.post)
  console.log(postData)
  let { post, similarPostsByCategory, topRecentPosts } = postData || {}
  useEffect(() => {
    if (postId) {
      dispatch(fetchBlogById(postId));
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [postId]);
  console.log(post)
  return (
    <>
      <section className="md:w-[90%] mx-auto lg:flex">
        <section className="lg:w-3/4 p-4 ">
          <section className="flex flex-col gap-6">
            <h1 className="text-2xl  md:text-4xl">{post?.title}</h1>
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img className="  object-fill" src={image} alt="" />
                </div>
                <div>
                  <div>
                    <span className="text-xl">{post?.authorId?.username} </span>
                    <span className="text-slate-500 -mt-6">
                      {post?.date}
                    </span>{" "}
                  </div>
                  <span>{post?.authorId?.email}</span>
                </div>
              </div>
              <div>
                <span>Read : {post?.views}</span>
              </div>
            </div>
            <p className=" text-xl font-light text-justify">

              <p dangerouslySetInnerHTML={{ __html: post?.content }}></p>
              liquam, culpa aliquid
              animi assumenda explicabo? Labore vero, repudiandae quasi fuga
              velit consequatur autem deserunt eligendi dicta molestiae ut
              voluptas officiis atque? Nam dolor modi repudiandae, ea officiis
              nisi quidem vero similique iste aliquam amet delectus, neque
              officia sed magni veniam eveniet illo suscipit deserunt commodi
              temporibus? Enim nesciunt facere pariatur! Sed reprehenderit,
              magnam culpa eius placeat numquam quibusdam quod omnis earum quae,
              facere voluptate porro fugit quasi. Veniam accusantium commodi
              facilis inventore, ipsum assumenda praesentium consequuntur odio?
              Excepturi minus totam, eos quasi eaque eius! Laborum, accusamus.
            </p>
          </section>
          <hr className="border-t-2  border-slate-500 my-4" />
          <section className=" flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">

              Similar post in {post?.categoryId?.name}
            </h2>
            {
              similarPostsByCategory?.map((item, idx) => {
                return <>
                  <PostCardWithThumbnail key={idx} post={item} />
                </>
              })
            }
          </section>
        </section>
        {/* Right section for recent posts */}
        <section className="lg:w-1/3 p-4">
          <h1 className=" text-2xl  mb-12 mt-[4.5rem]">
            Recent articles!
          </h1>

          <div className="flex flex-col gap-6">
            {topRecentPosts?.map((recentPost, idx) => (
              <>
                <PostCard post={recentPost} key={idx} />
                <hr className="border-t-2  border-slate-500" />
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default PostDetail;
