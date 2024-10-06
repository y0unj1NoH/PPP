import axios from "axios";

const PER_PAGE = 9;
const DAYS = 7;
const TAGS = ["javascript", "react", "css", "html"];

const apiBlog = axios.create({
  baseURL: "https://dev.to/api/articles/latest",
  headers: {
    accept: "application/json"
  }
});

export const fetchArticles = async () => {
  try {
    const response = await apiBlog.get("", {
      params: {
        q: "frontend",
        per_page: PER_PAGE,
        top: DAYS,
        tags: TAGS.join(",")
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching frontend articles:", error);
    throw error;
  }
};

export default apiBlog;
