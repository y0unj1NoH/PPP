import axios from "axios";

const JOB_CD = 92;
const JOB_MID_CD = 2;
const KEYWORDS = ["신입"];
const PER_PAGE = 9;

const SARAMIN_PROXY =
  window.location.hostname === 'localhost' ? '' : '/saramin_proxy';


const apiSaramin = axios.create({
  // baseURL: `/saramin_api`,
  // TEST 1 => CORS ERR
  // baseURL: `https://oapi.saramin.co.kr/job-search`,
  // TEST 2
  baseURL: `${SARAMIN_PROXY}/job-search`,
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
