import axios from "axios";

const JOB_CD = 92;
const JOB_MID_CD = 2;
const KEYWORDS = ["신입"];
const PER_PAGE = 9;

// const saramin_proxy =
//   window.location.hostname === 'localhost' ? '' : '/saramin_proxy';


const apiSaramin = axios.create({
  // baseURL: `/saraminApi`,
  // TEST
  baseURL: `https://oapi.saramin.co.kr/job-search`,
  headers: {
    'Access-Control-Allow-Origin': '*' 
  },
  params: {
    "access-key": import.meta.env.VITE_APP_SARAMIN_ACCESS_KEY,
    job_cd: JOB_CD,
    job_mid_cd: JOB_MID_CD,
    keywords: KEYWORDS.join("+"),
    count: PER_PAGE
  }
});

export const fetchJobListings = async () => {
  try {
    const response = await apiSaramin.get("");
    console.log(response.data)
    return response.data.jobs.job;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    throw error;
  }
};

export default apiSaramin;
