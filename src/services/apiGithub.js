import axios from "axios";
import { subMonths, format } from "date-fns";

const STARS = 30;
const LANGUAGES = ["JavaScript", "TypeScript"];
const PER_PAGE = 9;

const apiGithub = axios.create({
  baseURL: "https://api.github.com/search/repositories",
  headers: {
    Accept: "application/vnd.github+json"
    // Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
  }
});

export const fetchGithubProjects = async () => {
  const oneMonthAgo = subMonths(new Date(), 1);
  const formattedDate = format(oneMonthAgo, "yyyy-MM-dd");
  const languageQuery = LANGUAGES.map(lang => `language:${lang}`).join(" ");
  const query = `${languageQuery} stars:>=${STARS} created:>${formattedDate}`;

  try {
    const response = await apiGithub.get("", {
      params: { q: query, per_page: PER_PAGE }
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export default apiGithub;
