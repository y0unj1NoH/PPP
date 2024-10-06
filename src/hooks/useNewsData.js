import { useState, useEffect } from "react";
import { fetchJobListings } from "../services/apiSaramin";
import { fetchArticles } from "../services/apiBlog";
import { fetchGithubProjects } from "../services/apiGithub";

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
        setData({ jobs, articles, projects });

        console.log("jobs", jobs);
        console.log("articles", articles);
        console.log("projects", projects);
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
