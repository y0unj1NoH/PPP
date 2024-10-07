import axios from "axios";

const PER_PAGE = 30;


const apiHoliday = axios.create({
  baseURL: "https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo",
  params: {
    serviceKey: import.meta.env.VITE_APP_HOLIDAY_API_KEY,
    solYear: 2024,
    _default:"json",
    numOfRows: PER_PAGE
  }
});

export const fetchHolidays = async () => {
  try {
    const response = await apiHoliday.get("");
    console.log(response.data)
    return response.data.items.item;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    throw error;
  }
};

export default apiHoliday;


