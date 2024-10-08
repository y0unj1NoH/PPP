import { format } from "date-fns";
import { ko, enUS } from "date-fns/locale";

const formatDeadline = timestamp => {
  const dateObj = new Date(parseInt(timestamp, 10));
  return `~${format(dateObj, "MM.dd(EEE)", { locale: ko })}`;
};

const formatPublishedDate = published_date => {
  const dateObj = new Date(published_date);
  return format(dateObj, "MMM dd, yyyy", { locale: enUS });
};

export const parseJobListings = jobs => {
  return jobs.map(job => {
    const { url, position, company } = job;
    const location = position.location.name.split(",")[0].replace("&gt;", ">");
    const educationLevel = position["required-education-level"].name.replace(
      "이상",
      "↑"
    );
    const deadline = formatDeadline(job["expiration-timestamp"]);

    return {
      url,
      title: position.title,
      companyName: company.name,
      location,
      experienceLevel: position["experience-level"].name,
      educationLevel,
      deadline
    };
  });
};

export const parseArticles = articles => {
  return articles.map(article => {
    return {
      url: article.url,
      image: article.cover_image || "https://i.ibb.co/xj0MQjw/no-image.png",
      tags: article.tag_list,
      title: article.title,
      user: {
        profile: article.user.profile_image_90,
        name: article.user.name.split(",")[0]
      },
      date: formatPublishedDate(article.published_timestamp)
    };
  });
};

export const parseGithubProjects = projects => {
  return projects.map(project => ({
    url: project.html_url,
    title: project.name,
    description: project.description,
    owner: {
      profile: project.owner.avatar_url,
      name: project.owner.login
    }
  }));
};
