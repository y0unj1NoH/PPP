import { format } from "date-fns";
import { ko } from "date-fns/locale";
import styled from "@emotion/styled";
import Text from "../../common/Text";
import Icon from "../../common/Icon";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  // gap: 8px;
  padding: 16px;
  border-radius: 24px;
  border: 1px solid #e8e8ea;

  height: 180px;

  & * {
    line-height: 20px;
  }

  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #909cb0;
`;

const DaysOfWeek = Object.freeze({
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토"
});

// TODO: date 처리 함수들 정리 필요
const timestampToDeadline = (timestamp) => {
  const dateObj = new Date(parseInt(timestamp, 10));
  const formattedDate = format(dateObj, "MM.dd(EEE)", { locale: ko });
  return `~${formattedDate}`;
};

// TODO: 리팩토링 필요
const parseSaraminData = (data) => {
  const { url, position, company } = data;

  const location = position.location.name.split(",")[0].replace("&gt;", ">");
  const educationLevel = position["required-education-level"].name.replace(
    "이상",
    "↑"
  );
  const deadline = timestampToDeadline(data["expiration-timestamp"]);

  return {
    url,
    title: position.title,
    companyName: company.name,
    location,
    experienceLevel: position["experience-level"].name,
    educationLevel,
    deadline
  };
};

const SaraminCard = ({ data }) => {
  // TODO: 데이터 가공 부분은 api 가져오는 파일로 이동시키기
  const {
    url,
    title,
    companyName,
    location,
    experienceLevel,
    educationLevel,
    deadline
  } = parseSaraminData(data);

  // TODO: 컨테이너가 너무 많아서 컴포넌트 분리해야 할 듯
  return (
    <CardContainer onClick={() => window.open(url)}>
      <Icon.Saramin size={120} block />
      <Text size="large" strong color="#292E40">
        {title}
      </Text>
      <Text size={1.6} color="#475067">
        {companyName}
      </Text>
      <InfoContainer>
        <Icon.Default name="map-pin" size={14} color="#909CB0" />
        <Text size="medium">{`${location} | ${experienceLevel} · ${educationLevel}`}</Text>
      </InfoContainer>
      <Text size="medium" color="#6D73AA">
        {deadline}
      </Text>
    </CardContainer>
  );
};

export default SaraminCard;
