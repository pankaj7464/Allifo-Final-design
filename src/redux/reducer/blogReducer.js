import { request } from "../constants";

const initialState = {
  allBlogs: null,
  category: null,
  home_data: null,
  post: null
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case request.FETCH_BLOGS:
      return { ...state, allBlogs: payload };
    case request.FETCH_BLOGS_BY_ID:
      return { ...state, post: payload };
    case request.FETCH_HOME_BLOGS:
      return { ...state, home_data: payload };
    case request.FETCH_CATEGORY:
      return { ...state, category: payload };
    default:
      return { ...state };
  }
};
