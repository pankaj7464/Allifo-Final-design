import api from "../../api/api";
import { request } from "../constants";

export const fetchBlogs = () => async (dispatch) => {
  try {
    const response = await api.get("/blog/posts");
    if (response.data.success) {
      dispatch({ type: request.FETCH_BLOGS, payload: response?.data?.posts });
    }
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  }
};

export const fetchBlogById = (id) => async (dispatch) => {
  try {
    const response = await api.get( `/blog/posts/${id}`);
    console.log(`/blog/posts/${id}`)
    console.log(id)
    if (response.data?.success) {
      dispatch({ type: request.FETCH_BLOGS_BY_ID, payload: response?.data });
    }
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  }
};
export const fetchHomeData = () => async (dispatch) => {
  try {
    const response = await api.get("blog/home-data");
    if (response.data) {
      dispatch({ type: request.FETCH_HOME_BLOGS, payload: response?.data });
    }
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  }
};

export const publishBlog = (post) => async (dispatch) => {
  try {
    dispatch({ type: request.LOADING, payload: true });
    const response = await api.post("/blog/create-post", post);
    dispatch({ type: request.PUBLISH_BLOG, payload: response?.data });
    fetchBlogs();
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  } finally {
    dispatch({ type: request.LOADING, payload: false });
  }
};

// category actions

export const fetchCategory = () => async (dispatch) => {
  try {
    const response = await api.get("/categories");
    console.log(response)
    dispatch({ type: request.FETCH_CATEGORY, payload: response?.data });
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: request.LOADING, payload: true });
    const response = await api.post("/categories", category);
    dispatch({ type: request.ADD_CATEGORY, payload: response?.data });
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  } finally {
    dispatch({ type: request.LOADING, payload: false });
  }
};
export const editCategory = (id, category) => async (dispatch) => {
  try {
    dispatch({ type: request.LOADING, payload: true });
    const response = await api.put(`categories/${id}`, category);
    dispatch({ type: request.EDIT_CATEGORY, payload: response?.data });
  } catch (err) {
    dispatch({ type: request.ERROR, payload: "Server error" });
  } finally {
    dispatch({ type: request.LOADING, payload: false });
  }
};
