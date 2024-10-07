import { useState, useEffect } from "react";
import { fetchJobListings } from "../services/apiSaramin";
import { fetchArticles } from "../services/apiBlog";
import { fetchGithubProjects } from "../services/apiGithub";
import {
  parseJobListings,
  parseArticles,
  parseGithubProjects
} from "../utils/parseNewsData";

const useNewsData = () => {
  const [data, setData] = useState({ jobs: [], articles: [], projects: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [jobs, articles, projects] = await Promise.all([
          fetchJobListings(),
          fetchArticles(),
          fetchGithubProjects()
        ]);

        const parsedJobs = parseJobListings(jobs);
        const parsedArticles = parseArticles(articles);
        const parsedProjects = parseGithubProjects(projects);

        setData({
          jobs: parsedJobs,
          articles: parsedArticles,
          projects: parsedProjects
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};

export default useNewsData;
